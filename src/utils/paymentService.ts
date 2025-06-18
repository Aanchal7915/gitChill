import { Phone } from 'lucide-react';
import { loadScript } from './loadScript';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  notes?: {
    name: string;
    phoneNu: string;
    address:string;
  };
  prefill: {
    name: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

export const initializeRazorpay = async () => {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
  if (!res) {
    throw new Error('Razorpay SDK failed to load');
  }
};

export const createOrder = async (amount: number,name:string, phoneNu:string, address:string) => {
  try {
    const response = await fetch(`${ import.meta.env.VITE_BACKEND_URL}/api/v1/payment/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, name, phoneNu, address }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

interface CustomerDetails {
  name: string;
  phoneNu: string;
  address:string;
}

type SetPaymentDetails = (details: any) => void;
type SetPaymentModal = (open: boolean) => void;

export const initiatePayment = async (
  amount: number,
  serviceName: string,
  customerDetails: CustomerDetails,
  setPayementDetails: SetPaymentDetails,
  setPaymentModal: SetPaymentModal
): Promise<void> => {
  try {
    await initializeRazorpay();
    const orderData = await createOrder(amount, customerDetails.name, customerDetails.phoneNu, customerDetails.address);

    const options: RazorpayOptions = {
      key: import.meta.env.VITE_PUBLIC_RAZORPAY_KEY_ID || '',
      amount: amount * 100, // Razorpay expects amount in paise use instead orderData.amount
      currency: 'INR',//orderData.currency
      name: 'AC Service Booking',
      description: `Payment for ${serviceName}`,
      order_id: orderData.orderId,
      handler: function (response: any) {
        // Handle successful payment
        console.log('Payment successful:', response);
        // You can add additional logic here like updating the order status
        setPayementDetails({paymentId:response.razorpay_payment_id, orderId:response.razorpay_order_id, amount})
        setPaymentModal(true)
      },
      notes: {
        name: customerDetails.name,
        phoneNu: customerDetails.phoneNu,
        address:customerDetails.address
      },
      prefill: {
        name: customerDetails.name,
        contact: customerDetails.phoneNu,
      },
      theme: {
        color: '#2563EB', // Blue color matching your UI
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error('Payment initiation failed:', error);
    throw error;
  }
}; 