import React, { useState } from "react";

type UserInfoModalProps = {
  open: boolean;
  setUserInfoModal: (curState: boolean) => void;
  setCurService: (curState: any)  => void;
  onSubmit: (name: string, phone: string, address:string) => void;
};

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  open,
  setUserInfoModal,
  setCurService,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const[address, setAddress]=useState("")
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please enter both name and phone number.");
      return;
    }
    setError("");
    onSubmit(name, phone, address);
    setName("");
    setPhone("");
    setAddress("")
    setUserInfoModal(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-xl w-80 p-8 shadow-lg animate-scaleIn text-center">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={()=>{setUserInfoModal(false); setCurService(null)}}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            pattern="[0-9]{10,15}"
            maxLength={15}
            required
          />

          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoModal;