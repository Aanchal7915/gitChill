

type PaymentSuccessModalProps = {
  open: boolean;
  onClose: () => void;
  paymentId: string;
  amount: number;
  date: string;
};

const PaymentSuccessModal = ({
  open,
  onClose,
  paymentId,
  amount,
  date
}: PaymentSuccessModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-xl w-80 p-8 shadow-lg animate-scaleIn text-center">
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="text-green-500 text-5xl mb-2">&#10003;</div>
        <h2 className="text-2xl font-semibold mb-1">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">Thank you for your payment.</p>
        <div className="bg-gray-100 rounded-lg p-4 text-left text-sm mb-6 space-y-1">
          <div>
            <span className="font-medium">Payment ID:</span>{" "}
            <span className="break-all">{paymentId}</span>
          </div>
          <div>
            <span className="font-medium">Amount:</span> ₹{amount.toFixed(2)}
          </div>
          <div>
            <span className="font-medium">Date:</span> {date}
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-md font-medium transition"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;