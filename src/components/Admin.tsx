import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout, AiOutlineReload } from "react-icons/ai";

// Types
type Booking = {
  _id: string;
  bookingId?: string;
  address: string;
  contact: string;
  createdAt: string;
  currency: string;
  description: string;
  email: string;
  method: string;
  name: string;
  status_history: { status: string; at: string }[];
  updatedAt: string;
  serviceStatus?: boolean;
  preferredTiming?: string;
  dateOfVisit?: string;
};


const PAGE_SIZE = 10;

// Admin Header Component
const AdminHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-lg mb-6 shadow animate-fade-in-down">
      <div className="flex items-center gap-2 text-xl font-bold">
        <span>Admin Panel</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-1 hover:text-blue-200 transition"
          onClick={() => navigate("/")}
        >
          <AiOutlineHome className="text-2xl" />
          <span className="hidden sm:inline">Home</span>
        </button>
        <button
          className="flex items-center gap-1 hover:text-blue-200 transition"
          onClick={handleLogout}
        >
          <AiOutlineLogout className="text-2xl" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};

// Booking Row Component
const BookingRow: React.FC<{
  booking: Booking;
  onStatusChange: (id: string, serviceStatus: boolean) => void;
}> = ({ booking, onStatusChange }) => (
  <tr className="border-b hover:bg-blue-50 transition animate-row-fade-in">
    <td className="p-2 font-mono text-xs truncate max-w-[120px]" title={booking.bookingId || booking._id}>
      {booking.bookingId || "ID: " + booking._id.slice(-6)}
    </td>
    <td className="p-2 font-semibold">{booking.name}</td>
    <td className="p-2">{booking.contact}</td>
    <td className="p-2 max-w-xs truncate" title={booking.address}>{booking.address}</td>
    <td className="p-2">{booking.description}</td>
    <td className="p-2 text-xs">
      <div className="font-bold text-blue-800">{booking.dateOfVisit || "N/A"}</div>
      <div className="text-gray-500 italic">{booking.preferredTiming || "N/A"}</div>
    </td>
    <td className="p-2 text-xs">{new Date(booking.createdAt).toLocaleDateString()}</td>
    <td className="p-2 text-center">
      <span
        className={`px-2 py-1 rounded text-xs font-semibold transition-all duration-300 ${booking.serviceStatus
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700 animate-pulse"
          }`}
      >
        {booking.serviceStatus ? "Fulfilled" : "Pending"}
      </span>
    </td>
    <td className="p-2">
      <button
        className={`px-3 py-1 rounded shadow text-xs transition-all duration-300 transform hover:scale-105 ${booking.serviceStatus
          ? "bg-gray-500 hover:bg-gray-600 text-white"
          : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        onClick={() => onStatusChange(booking._id, !booking.serviceStatus)}
      >
        {booking.serviceStatus ? "Mark Pending" : "Mark Fulfilled"}
      </button>
    </td>
  </tr>
);


// Filter Component
const BookingFilter: React.FC<{
  filter: string;
  setFilter: (v: string) => void;
  serviceStatus: string;
  setServiceStatus: (v: string) => void;
}> = ({
  filter,
  setFilter,
  serviceStatus,
  setServiceStatus,
}) => (
    <div className="flex flex-wrap gap-2 mb-4 items-center animate-fade-in-up">
      <input
        type="text"
        placeholder="Search by name, email, phone..."
        className="border rounded px-3 py-2 w-64 focus:ring-2 focus:ring-green-400 transition"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <select
        className="border rounded px-3 py-2 focus:ring-2 focus:ring-green-400 transition"
        value={serviceStatus}
        onChange={e => setServiceStatus(e.target.value)}
      >
        <option value="">All Service Status</option>
        <option value="true">Fulfilled</option>
        <option value="false">Pending</option>
      </select>
    </div>
  );

// Pagination Component
const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-2 mt-4 animate-fade-in-up">
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 rounded ${currentPage === idx + 1
            ? "bg-green-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const Admin: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState("");
  const [serviceStatus, setServiceStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Fetch bookings from API with token and filters
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const params = new URLSearchParams();
        if (serviceStatus) params.append("serviceStatus", serviceStatus);
        params.append("page", currentPage.toString());
        params.append("limit", PAGE_SIZE.toString());
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/admin-data?${params.toString()}`;
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok && data.success && Array.isArray(data.data)) {
          setBookings(
            data.data.map((b: any) => ({
              ...b,
              serviceStatus: b.serviceStatus ?? false,
            }))
          );
          setTotalPages(
            data.totalPages ||
            (data.data.length < PAGE_SIZE && currentPage > 1
              ? currentPage
              : currentPage + 1)
          );
        } else {
          setBookings([]);
          setTotalPages(1);
        }
      } catch (err) {
        setBookings([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [serviceStatus, currentPage, refreshKey]);

  // Filter bookings client-side for search
  const filteredBookings = bookings.filter(b =>
    [b.name, b.email, b.contact, b.address, b.description]
      .join(" ")
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  // Reset to first page if filter changes (except page)
  useEffect(() => {
    setCurrentPage(1);
  }, [serviceStatus, filter]);

  // Handle status change and update via API
  const handleStatusChange = async (id: string, serviceStatusVal: boolean) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/update-status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          bookingId: id,
          serviceStatus: serviceStatusVal,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success && data.data) {
        setBookings(prev =>
          prev.map(b =>
            b._id === id
              ? {
                ...b,
                serviceStatus: data.data.serviceStatus,
              }
              : b
          )
        );
      }
    } catch (err) {
      // Optionally handle error (e.g., show toast)
    }
  };

  // Refresh handler
  const handleRefresh = () => setRefreshKey(prev => prev + 1);

  return (
    <div className="p-4 max-w-7xl mx-auto bg-gradient-to-br from-green-50 to-white min-h-screen animate-fade-in">
      <AdminHeader />
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-green-700 tracking-tight drop-shadow animate-gradient-text">
            <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </span>
          <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold shadow-sm animate-fade-in-up">
            Manage Bookings
          </span>
        </div>
        <button
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition animate-bounce-once"
          onClick={handleRefresh}
          title="Refresh"
        >
          <AiOutlineReload className="text-xl animate-spin-once" />
          Refresh
        </button>
      </div>
      <BookingFilter
        filter={filter}
        setFilter={setFilter}
        serviceStatus={serviceStatus}
        setServiceStatus={setServiceStatus}
      />
      <div className="overflow-x-auto bg-white rounded-lg shadow animate-fade-in-up">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Booking ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Visit Preference</th>
              <th className="p-2 text-left">Booked At</th>
              <th className="p-2 text-center">Status</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={11} className="text-center py-8 text-gray-500 animate-pulse">
                  Loading...
                </td>
              </tr>
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={11} className="text-center py-8 text-gray-500 animate-fade-in">
                  No bookings found.
                </td>
              </tr>
            ) : (
              filteredBookings.map(booking => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  onStatusChange={handleStatusChange}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
      <style>
        {`
          .animate-spin-once {
            animation: spin 0.7s linear 1;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          .animate-fade-in {
            animation: fadeIn 0.7s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in-down {
            animation: fadeInDown 0.7s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-row-fade-in {
            animation: fadeInRow 0.5s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInRow {
            0% { opacity: 0; transform: translateX(-20px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          .animate-pulse-green {
            animation: pulseGreen 1.2s infinite alternate;
          }
          @keyframes pulseGreen {
            0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.2);}
            100% { box-shadow: 0 0 8px 4px rgba(34,197,94,0.15);}
          }
          .animate-pulse-red {
            animation: pulseRed 1.2s infinite alternate;
          }
          @keyframes pulseRed {
            0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.2);}
            100% { box-shadow: 0 0 8px 4px rgba(239,68,68,0.15);}
          }
          .animate-gradient-text {
            animation: gradientText 2s ease-in-out infinite alternate;
          }
          @keyframes gradientText {
            0% { filter: brightness(1);}
            100% { filter: brightness(1.2);}
          }
          .animate-bounce-once {
            animation: bounceOnce 0.5s;
          }
          @keyframes bounceOnce {
            0% { transform: scale(1);}
            30% { transform: scale(1.12);}
            60% { transform: scale(0.96);}
            100% { transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
};

export default Admin