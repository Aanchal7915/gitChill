import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AiOutlineHome
        className="text-6xl text-green-600 mb-4 cursor-pointer"
        onClick={() => navigate("/")}
        title="Go Home"
      />
      <h1 className="text-4xl font-bold mb-2 text-gray-700">404</h1>
      <p className="text-lg text-gray-500 mb-6">Page Not Found</p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;