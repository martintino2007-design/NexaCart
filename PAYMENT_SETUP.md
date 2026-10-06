# MartinMart — Real payment integration

## UPI QR / UPI Intent
The checkout now generates a real `upi://pay` URI containing:
- Merchant UPI ID
- MartinMart merchant name
- Exact order amount
- INR currency

Set your real merchant UPI ID in `payment-config.js`:

```js
merchantUpiId: "yourbusiness@upi"
```

Scanning the QR opens a compatible UPI app. **Do not treat a client-side redirect as proof of payment.** Production order confirmation must be verified by a payment gateway/webhook or bank-side reconciliation.

## Razorpay / card / netbanking
The UI is gateway-ready. Set the public Razorpay Key ID in `payment-config.js`. Keep the Razorpay secret key ONLY on your backend. For production, your backend must create the Razorpay order and verify the returned signature before marking an order paid.

The current static Live Server version intentionally does not fake a successful payment. Cash on Delivery remains locally testable.
