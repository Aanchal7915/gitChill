import React, { useState } from "react";

type TempProps = {
  open: boolean;
  setTemp: (curState: boolean) => void;
  setCurService: (curState: any) => void;
  onSubmit: (
    name: string,
    phone: string,
    location: string,
    address: string,
    email: string
  ) => void;
};

const UserInfoModal: React.FC<TempProps> = ({
  open,
  setTemp,
  setCurService,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState<{ lat: number; long: number } | null>(null);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const generateMapLink=(location: { lat: number; long: number } | null): string => {
    return `https://www.google.com/maps?q=${location?.lat},${location?.long}`;
  }


  const handleLocationChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;
    setUseCurrentLocation(checked);

    if (checked) {
      setLoadingLocation(true);
      setError("");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, long: longitude });
            setLoadingLocation(false);
          },
          (error) => {
            setError("Unable to fetch location.");
            setLoadingLocation(false);
            setUseCurrentLocation(false);
            setLocation(null);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoadingLocation(false);
        setUseCurrentLocation(false);
        setLocation(null);
      }
    } else {
      setLocation(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Please enter name, phone number, and email.");
      return;
    }
    if (!useCurrentLocation && !address.trim()) {
      setError("Please provide your address or use current location.");
      return;
    }
    if (useCurrentLocation && !location) {
      setError("Location not available. Please try again.");
      return;
    }
    const link: string=generateMapLink(location)
    setError("");
    console.log("detai: ",name, phone, link, address, email);
    onSubmit(name, phone, link, address, email);
    setName("");
    setPhone("");
    setLocation(null);
    setAddress("");
    setEmail("");
    setUseCurrentLocation(false);
    setTemp(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-xl w-80 p-8 shadow-lg animate-scaleIn text-center">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={() => {
            setTemp(false);
            setCurService(null);
          }}
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
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="use-location"
              checked={useCurrentLocation}
              onChange={handleLocationChange}
              disabled={loadingLocation}
              required
            />
            <label htmlFor="use-location" className="text-sm">
              Use my current location
            </label>
            {loadingLocation && (
              <span className="text-xs text-gray-500 ml-2">Fetching...</span>
            )}
          </div>

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
            disabled={loadingLocation}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoModal