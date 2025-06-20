import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout, AiOutlineReload } from "react-icons/ai";

// Types
type Booking = {
  _id: string;
  razorpay_payment_id: string;
  address: string;
  amount: number;
  contact: string;
  createdAt: string;
  currency: string;
  description: string;
  email: string;
  paymentStatus: string;
  method: string;
  name: string;
  razorpay_order_id: string;
  status_history: { status: string; at: string }[];
  updatedAt: string;
  serviceStatus?: boolean;
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
    <div className="flex items-center justify-between bg-green-600 text-white px-6 py-4 rounded-lg mb-6 shadow">
      <div className="flex items-center gap-2 text-xl font-bold">
        <span>Admin Panel</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-1 hover:text-green-200 transition"
          onClick={() => navigate("/")}
        >
          <AiOutlineHome className="text-2xl" />
          <span className="hidden sm:inline">Home</span>
        </button>
        <button
          className="flex items-center gap-1 hover:text-green-200 transition"
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
  <tr className="border-b hover:bg-gray-50 transition">
    <td className="p-2">{booking.name}</td>
    <td className="p-2">{booking.email}</td>
    <td className="p-2">{booking.contact}</td>
    <td className="p-2">{booking.address}</td>
    <td className="p-2">{booking.description}</td>
    <td className="p-2">₹{booking.amount}</td>
    <td className="p-2">{booking.currency}</td>
    <td className="p-2">{new Date(booking.createdAt).toLocaleString()}</td>
    <td className="p-2">
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${
          booking.paymentStatus === "captured"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {booking.paymentStatus}
      </span>
    </td>
    <td className="p-2">
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${
          booking.serviceStatus
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {booking.serviceStatus ? "Fulfilled" : "Pending"}
      </span>
    </td>
    <td className="p-2">
      <button
        className={`px-3 py-1 rounded ${
          booking.serviceStatus
            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
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
  paymentStatus: string;
  setPaymentStatus: (v: string) => void;
  serviceStatus: string;
  setServiceStatus: (v: string) => void;
}> = ({
  filter,
  setFilter,
  paymentStatus,
  setPaymentStatus,
  serviceStatus,
  setServiceStatus,
}) => (
  <div className="flex flex-wrap gap-2 mb-4 items-center">
    <input
      type="text"
      placeholder="Search by name, email, phone..."
      className="border rounded px-3 py-2 w-64"
      value={filter}
      onChange={e => setFilter(e.target.value)}
    />
    <select
      className="border rounded px-3 py-2"
      value={paymentStatus}
      onChange={e => setPaymentStatus(e.target.value)}
    >
      <option value="">All Status</option>
      <option value="captured">Captured</option>
      <option value="authorized">Authorized</option>
      <option value="failed">Failed</option>
    </select>
    <select
      className="border rounded px-3 py-2"
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
    <div className="flex justify-center items-center gap-2 mt-4">
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
          className={`px-3 py-1 rounded ${
            currentPage === idx + 1
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
  const [paymentStatus, setPaymentStatus] = useState("");
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
        if (paymentStatus)
          params.append(
            "paymentStatus",
            paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)
          );
        if (serviceStatus) params.append("serviceStatus", serviceStatus);
        params.append("page", currentPage.toString());
        params.append("limit", PAGE_SIZE.toString());
        const url = `http://localhost:4000/api/v1/admin/admin-data?${params.toString()}`;
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
              paymentStatus: b.paymentStatus,
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
  }, [paymentStatus, serviceStatus, currentPage, refreshKey]);

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
  }, [paymentStatus, serviceStatus, filter]);

  // Handle status change and update via API
  const handleStatusChange = async (id: string, serviceStatusVal: boolean) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:4000/api/v1/admin/update-status", {
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
    <div className="p-4 max-w-7xl mx-auto">
      <AdminHeader />
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-green-700 tracking-tight drop-shadow">
            <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </span>
          <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold shadow-sm">
            Manage Bookings
          </span>
        </div>
        <button
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition"
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
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        serviceStatus={serviceStatus}
        setServiceStatus={setServiceStatus}
      />
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Currency</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Payment Status</th>
              <th className="p-2 text-left">Service Status</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={11} className="text-center py-8 text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={11} className="text-center py-8 text-gray-500">
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
        `}
      </style>
    </div>
  );
};
export default Admin;