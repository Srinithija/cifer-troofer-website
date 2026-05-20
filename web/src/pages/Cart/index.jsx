import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { formatCurrency, getCartItems, removeCartItem, saveCartItems } from '../../utils/cartUtils';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCartItems());

    const handleStorageUpdate = () => {
      setCartItems(getCartItems());
    };

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
        const quantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity };
      })
      .filter((item) => item.quantity > 0);

    updateCart(nextItems);
  };

  const navigate = useNavigate();

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

  return (
    <>
      <Helmet>
        <title>Shopping Cart | Cifer Troofer</title>
        <meta
          name="description"
          content="Review your cart, update quantities, remove items, and proceed to checkout for premium cybersecurity hardware."
        />
      </Helmet>

      <Header />

      <main className="bg-[#f8fafc] min-h-screen pt-[120px] pb-[100px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-[28px] sm:text-[32px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
              Your Shopping Cart
            </h1>
            <p className="mt-3 text-[15px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
              Review your selected products, update quantities, and see the total order summary before checkout.
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center shadow-sm">
              <h2 className="text-[24px] sm:text-[26px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                Your cart is empty
              </h2>
              <p className="mt-3 text-[15px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                Add items from the shop to see them here. Your selected products will be saved in your browser.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#4f46e5]"
                style={{ fontFamily: 'Inter' }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
              <section className="space-y-6 rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-8 shadow-sm">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col gap-5 border-b border-[#e5e7eb] pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[130px] w-full rounded-2xl bg-[#f8fafc] object-contain sm:w-[140px] sm:h-[140px]"
                    />

                    <div className="flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <h2 className="text-[18px] sm:text-[20px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                            {item.name}
                          </h2>
                          <p className="text-[14px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                            Unit price: {formatCurrency(item.price)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          className="text-sm font-semibold text-[#ef4444] transition hover:text-[#b91c1c]"
                          style={{ fontFamily: 'Inter' }}
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-2">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#4b5563] transition hover:bg-[#eef2ff]"
                          >
                            −
                          </button>
                          <span className="min-w-[40px] text-center text-[16px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#4b5563] transition hover:bg-[#eef2ff]"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-[15px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                            Item subtotal
                          </p>
                          <p className="text-[16px] font-bold" style={{ fontFamily: 'Inter', color: '#6366f1' }}>
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              <aside className="rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-8 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-[20px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                    Order Summary
                  </h2>
                  <p className="mt-2 text-[14px] text-[#6b7280]" style={{ fontFamily: 'Inter' }}>
                    Review your subtotal, tax, and final total before checkout.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[15px] text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[15px] text-[#4b5563]" style={{ fontFamily: 'Inter' }}>
                    <span>Estimated tax (8%)</span>
                    <span>{formatCurrency(tax)}</span>
                  </div>
                  <div className="border-t border-[#e5e7eb] pt-4">
                    <div className="flex items-center justify-between text-[17px] font-semibold" style={{ fontFamily: 'Inter', color: '#1f2937' }}>
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/checkout')}
                  disabled={cartItems.length === 0}
                  className="mt-8 w-full rounded-xl bg-[#6366f1] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#4f46e5] disabled:cursor-not-allowed disabled:bg-[#a5b4fc]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Proceed to Checkout
                </button>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CartPage;
