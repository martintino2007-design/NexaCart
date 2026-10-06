// NexaCart payment configuration
// Merchant UPI ID from the supplied NexaCart checkout QR.
// Never put a Razorpay SECRET KEY in this file or in browser JavaScript.
window.NEXACART_PAYMENT = {
  merchantUpiId: "YOUR_NEXACART_UPI_ID@upi",
  merchantName: "NexaCart",
  razorpayKeyId: "",
  razorpayOrderEndpoint: "/api/payment/create-order",
  currency: "INR"
};
