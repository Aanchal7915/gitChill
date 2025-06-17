import { loadScript } from './loadScript';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
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

export const createOrder = async (amount: number) => {
  try {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const initiatePayment = async (
  amount: number,
  serviceName: string,
  customerDetails: {
    name: string;
    email: string;
    contact: string;
  }
) => {
  try {
    await initializeRazorpay();
    const orderData = await createOrder(amount);

    const options: RazorpayOptions = {
      key: process.env.VITE_PUBLIC_RAZORPAY_KEY_ID || '',
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      name: 'AC Service Booking',
      description: `Payment for ${serviceName}`,
      order_id: orderData.id,
      handler: function (response) {
        // Handle successful payment
        console.log('Payment successful:', response);
        // You can add additional logic here like updating the order status
      },
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.contact,
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