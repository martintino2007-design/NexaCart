# MartinMart – Feature Expansion

The MartinMart name and branding are preserved.

## Added in the standalone demo UI
- Product wishlist with saved-item counter
- Product detail modal with description, stock, discounts and reviews
- Search, category filter and sorting by featured/rating/price/newest
- Discount pricing and coupon codes: MARTIN10, WELCOME50, SAVE100
- Cart quantity limits, free delivery over ₹999 and coupon calculation
- Saved delivery addresses
- Checkout with UPI, Card and Cash on Delivery demo methods
- UPI QR demo generation
- Order tracking timeline
- Order cancellation and re-order
- Invoice download
- Seller listing creation with discount/description/emoji
- Seller low-stock metric
- Admin live metrics based on local demo orders
- Review entry and verified-purchase style display
- Dark mode
- Responsive mobile UI
- MartinBot budget/product/order/payment/return/seller help
- Better empty states, notifications and loading-free local demo flow

## Backend/database expansion
`db/migrations/V2__martinmart_features.sql` adds tables for addresses, wishlists, coupons and audit logs, plus richer review fields. The existing Java/Tomcat backend is preserved.

## Demo note
The root `index.html`, `style.css` and `app.js` use localStorage so the full UI can be demonstrated with VS Code Live Server without changing the existing Java backend. Real payment processing is not enabled.
