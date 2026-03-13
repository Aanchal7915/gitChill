import React, { useState } from "react";
import MapPicker from "./MapPicker";
import { MapPin as MapPinIcon } from "lucide-react";

type UserInfoModalProps = {
  open: boolean;
  setUserInfoModal: (curState: boolean) => void;
  setCurService: (curState: any) => void;
  onSubmit: (name: string, phone: string, address: string, date?: string, time?: string) => void;
};

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  open,
  setUserInfoModal,
  setCurService,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [locationSelected, setLocationSelected] = useState(false);
  const [dateOfVisit, setDateOfVisit] = useState("");
  const [preferredTiming, setPreferredTiming] = useState("");
  const [error, setError] = useState("");

  const handleLocationSelect = (_lat: number, _lng: number, addr: string) => {
    setAddress(addr);
    setLocationSelected(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !locationSelected || !dateOfVisit || !preferredTiming) {
      setError("Please fill all fields and select location on map.");
      return;
    }
    setError("");
    onSubmit(name, phone, address, dateOfVisit, preferredTiming);
    // Reset form
    setName("");
    setPhone("");
    setAddress("");
    setLocationSelected(false);
    setDateOfVisit("");
    setPreferredTiming("");
    setUserInfoModal(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="relative bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl text-left overflow-y-auto max-h-[95vh]">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={() => { setUserInfoModal(false); setCurService(null); }}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-1">Enter Your Details</h2>
        <p className="text-xs text-gray-500 mb-4">Fill in all details to confirm your booking</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-200 bg-gray-50 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-200 bg-gray-50 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              placeholder="9876543210"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              pattern="[0-9]{10,15}"
              maxLength={15}
              required
            />
          </div>

          {/* Map Location */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1 flex items-center gap-1">
              <MapPinIcon size={12} className="text-blue-600" />
              Service Location
            </label>
            <MapPicker onLocationSelect={handleLocationSelect} />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Visit Date</label>
              <input
                type="date"
                className="w-full border border-gray-200 bg-gray-50 rounded-xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                value={dateOfVisit}
                onChange={e => setDateOfVisit(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Preferred Time</label>
              <select
                className="w-full border border-gray-200 bg-gray-50 rounded-xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                value={preferredTiming}
                onChange={e => setPreferredTiming(e.target.value)}
                required
              >
                <option value="">Select Time</option>
                <option value="Morning (9AM-12PM)">9AM - 12PM</option>
                <option value="Afternoon (1PM-5PM)">1PM - 5PM</option>
                <option value="Evening (5PM-9PM)">5PM - 9PM</option>
              </select>
            </div>
          </div>

          {error && <div className="text-red-500 text-xs bg-red-50 p-2 rounded-lg">{error}</div>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoModal;
