# Khmer Temple Art Store

An e-commerce website for **Khmer temple-inspired paintings and stickers**, built with **Next.js**, **React Context API**, and **Stripe Checkout**. Users can browse products, add to cart, update quantities, and checkout securely.

---

## 🧠 Big Picture

- **Products**: Paintings and stickers with high-res and low-res images.  
- **Cart**: Global state using React Context API (`ProductContext`).  
- **Checkout**: Stripe integration for payments.  
- **Responsive Design**: Works on mobile, tablet, and desktop.  
- **Image Banner**: Low-res images load instantly, high-res fade in.  
- **Sections**: Scroll smoothly to painting or sticker section from banner.

---

## 🛠 Features

### Product Page

- Display paintings and stickers.
- Add to cart with quantity management.
- Open high-resolution images in a modal portal.

### Cart Page

- Show all cart items with quantity input.
- Update cart directly via input field.
- Display total items and prices.
- Checkout button integrates with Stripe.

### Checkout

- Sends cart data to backend API `/api/checkout`.
- Creates Stripe checkout session.
- Redirects user to Stripe payment page.
- Handles success and cancel URLs.

### Global State Management

- React Context (`ProductsProvider`) stores cart globally.
- Any component can read/update cart without prop drilling.

### Responsive UI

- Mobile-first design.
- Sticky header and banner.
- Grid-based layout for products.
- Smooth scroll to sections.

---

## ⚡ Tech Stack

- **Frontend**: Next.js 13+, React 18+, Tailwind CSS (optional styling)
- **State Management**: React Context API
- **Backend**: Next.js API routes
- **Payments**: Stripe API
- **Images**: Low-res for fast load, high-res for detail

---



---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/khmer-temple-art.git
cd khmer-temple-art

npm install

NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...

npm run dev
