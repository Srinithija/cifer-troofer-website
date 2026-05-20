import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import {
  formatCurrency,
  getCartItems,
  removeCartItem,
  saveCartItems,
  updateCartItemQuantity,
} from '../../utils/cartUtils';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    setCartItems(getCartItems());

    const handleStorageUpdate = () => setCartItems(getCartItems());

    window.addEventListener('cartUpdated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const updateCart = (nextItems) => {
    saveCartItems(nextItems);
    setCartItems(nextItems);
  };

  const handleQuantityChange = (itemId, delta) => {
    const nextItems = cartItems
      .map((item) => {
        if (item.id !== itemId) return item;
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      })
      .filter((item) => item.quantity > 0);

    updateCart(nextItems);
  };

  const handleRemove = (itemId) => {
    const nextItems = removeCartItem(itemId);
    setCartItems(nextItems);
  };

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const tax = Number((subtotal * 0.08).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  const handleBillingChange = (event) => {
    const { name, value } = event.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError('');

    if (!billingInfo.fullName || !billingInfo.email || !billingInfo.address) {
      setFormError('Please complete the required billing fields before placing your order.');
      return;
    }

    if (cartItems.length === 0) {
      setFormError('Your cart is empty. Add items before checking out.');
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
    }, 600);
  };

  return (
    <>
      <Helmet>
        <title>Checkout | Cifer Troofer</title>
        <meta
          name="description"
          content="Complete your order with billing details, review your cart, and place checkout for premium cybersecurity products."
        />
      </Helmet>

      <Header />

      <main className="bg-[#f8fafc] min-h-screen pt-[120px] pb-[100px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-[28px] sm:text-[32px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
              Checkout
            </h1>
            <p className="mt-3 text-[15px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
              Confirm your order details, enter billing information, and complete your purchase.
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center shadow-sm">
              <h2 className="text-[24px] sm:text-[26px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                Your cart is empty
              </h2>
              <p className="mt-3 text-[15px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                Add items from the shop before completing checkout.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#4f46e5]"
                style={{ fontFamily: 'Inter' }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : orderPlaced ? (
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-10 shadow-sm">
              <h2 className="text-[24px] sm:text-[26px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                Order placed successfully!
              </h2>
              <p className="mt-3 text-[15px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                Thanks for your purchase. We will contact you at {billingInfo.email} with order details.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-xl bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#4f46e5]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Return to Home
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center rounded-xl border border-[#6366f1] bg-white px-6 py-3 text-sm font-semibold text-[#6366f1] transition hover:bg-[#eef2ff]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.45fr_0.95fr]">
              <section className="space-y-6 rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-8 shadow-sm">
                <div className="space-y-5">
                  <h2 className="text-[20px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                    Billing Information
                  </h2>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="space-y-2 text-sm text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                        Full name
                        <input
                          type="text"
                          name="fullName"
                          value={billingInfo.fullName}
                          onChange={handleBillingChange}
                          className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#c7d2fe]"
                        />
                      </label>
                      <label className="space-y-2 text-sm text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                        Email address
                        <input
                          type="email"
                          name="email"
                          value={billingInfo.email}
                          onChange={handleBillingChange}
                          className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#c7d2fe]"
                        />
                      </label>
                    </div>

                    <label className="space-y-2 text-sm text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                      Shipping address
                      <input
                        type="text"
                        name="address"
                        value={billingInfo.address}
                        onChange={handleBillingChange}
                        className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#c7d2fe]"
                      />
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="space-y-2 text-sm text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                        City
                        <input
                          type="text"
                          name="city"
                          value={billingInfo.city}
                          onChange={handleBillingChange}
                          className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#c7d2fe]"
                        />
                      </label>
                      <label className="space-y-2 text-sm text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                        Postal code
                        <input
                          type="text"
                          name="postalCode"
                          value={billingInfo.postalCode}
                          onChange={handleBillingChange}
                          className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#c7d2fe]"
                        />
                      </label>
                    </div>

                    <label className="space-y-2 text-sm text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                      Country
                      <input
                        type="text"
                        name="country"
                        value={billingInfo.country}
                        onChange={handleBillingChange}
                        className="w-full rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#c7d2fe]"
                      />
                    </label>

                    {formError && (
                      <p className="text-sm font-medium text-[#dc2626]" style={{ fontFamily: 'Inter' }}>
                        {formError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#6366f1] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#4f46e5] disabled:cursor-not-allowed disabled:bg-[#a5b4fc]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {isSubmitting ? 'Processing order...' : 'Place Your Order'}
                    </button>
                  </form>
                </div>

                <div className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-5">
                  <h3 className="text-[17px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                    Checkout Notes
                  </h3>
                  <p className="mt-3 text-[14px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                    This page lets you review your cart, update quantities, and submit billing details for your order. All cart data is saved locally in your browser.
                  </p>
                </div>
              </section>

              <aside className="space-y-6 rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-8 shadow-sm">
                <div className="space-y-4">
                  <h2 className="text-[20px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                    Order Summary
                  </h2>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
                      <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-contain" />
                      <div className="flex-1">
                        <p className="text-[15px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                          {item.name}
                        </p>
                        <p className="text-[14px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                          {item.quantity} × {formatCurrency(item.price)}
                        </p>
                      </div>
                      <p className="text-[15px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-[#e5e7eb] bg-white p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[15px] text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                      <span>Subtotal</span>
                      <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between text-[15px] text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                      <span>Tax (8%)</span>
                      <span>{formatCurrency(tax)}</span>
                    </div>
                    <div className="border-t border-[#e5e7eb] pt-4">
                      <div className="flex items-center justify-between text-[17px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                        <span>Total</span>
                        <span>{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckoutPage;
