type PaymentSuccessModalProps = {
  open: boolean;
  onClose: () => void;
  payment: any;
};

const PaymentSuccessModal = ({
  open,
  onClose,
  payment,
}: PaymentSuccessModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl text-center overflow-hidden">

        {/* Top gradient banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 pt-10 pb-14 relative">
          {/* Close button */}
          <button
            className="absolute top-3 right-4 text-white/70 hover:text-white text-2xl"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Animated checkmark */}
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow-lg animate-bounce-once">
              <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-white mb-1">Booking Confirmed! 🎉</h2>
          <p className="text-blue-100 text-sm font-medium">
            Our executive will reach out to you within <span className="font-bold text-white underline">30 minutes</span>
          </p>
        </div>

        {/* White card pulled up over banner */}
        <div className="-mt-6 mx-4 bg-white rounded-2xl shadow-xl p-5 text-left space-y-3 border border-gray-100">
          {/* Booking ID */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Booking ID</span>
            <span className="text-blue-600 font-mono font-bold text-sm">{payment?.bookingId || "BK" + Date.now()}</span>
          </div>

          {/* Name */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</span>
            <span className="text-gray-800 font-semibold text-sm">{payment?.name || "—"}</span>
          </div>

          {/* Service */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Service</span>
            <span className="text-gray-800 font-semibold text-sm text-right max-w-[60%]">{payment?.serviceName || "—"}</span>
          </div>

          {/* Date booked */}
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Booked At</span>
            <span className="text-gray-600 text-sm">{new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</span>
          </div>
        </div>

        {/* Thank You note */}
        <div className="px-6 py-4 text-center">
          <p className="text-gray-500 text-xs mb-4">
            Thank you for choosing <span className="font-bold text-blue-600">GetChill</span>! We'll confirm your appointment shortly.
          </p>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-200"
            onClick={onClose}
          >
            Great, Thanks! 👍
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounceOnce {
          0%   { transform: scale(0.6); opacity: 0; }
          50%  { transform: scale(1.15); opacity: 1; }
          75%  { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-bounce-once {
          animation: bounceOnce 0.6s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
};

export default PaymentSuccessModal;