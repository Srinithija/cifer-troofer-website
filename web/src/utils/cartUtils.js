export const CART_STORAGE_KEY = 'cartItems';

export const parsePrice = (priceString) => {
  const value = String(priceString).replace(/[^0-9.]/g, '');
  return Number(value || 0);
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const getCartItems = () => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Error reading cart items from localStorage:', error);
    return [];
  }
};

export const saveCartItems = (items) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('cartUpdated'));
  } catch (error) {
    console.error('Error writing cart items to localStorage:', error);
  }
};

export const getCartCount = () => {
  return getCartItems().reduce((count, item) => count + Number(item.quantity || 0), 0);
};

export const addProductToCart = (product) => {
  const items = getCartItems();
  const existingItem = items.find((item) => item.id === product.id);
  const cartPrice = typeof product.price === 'number' ? product.price : parsePrice(product.price);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    items.push({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: cartPrice,
      quantity: 1,
    });
  }

  saveCartItems(items);
  return items;
};

export const syncCartItemToDb = async (product, sessionId = null) => {
  try {
    // Lazy import supabase to avoid breaking SSR or environments without window
    const mod = await import('./supabaseClient').catch(() => ({}));
    const supabase = mod.supabase || mod.default || null;
    if (!supabase) return;

    // Only set product_id when it's a valid UUID string (to match DB schema)
    const isUuid = (val) => typeof val === 'string' && /^[0-9a-fA-F-]{36}$/.test(val);
    const productId = isUuid(product.id) ? product.id : null;

    const payload = {
      product_id: productId,
      name: product.name || product.title || null,
      price: typeof product.price === 'number' ? product.price : parsePrice(product.price),
      quantity: 1,
      metadata: { image: product.image || null, sessionId, original_id: product.id ?? null },
    };

    const { data, error } = await supabase.from('cart_items').insert([payload]);
    if (error) console.warn('Sync cart item to DB failed', error);
    return data;
  } catch (err) {
    console.error('syncCartItemToDb error', err);
    return null;
  }
};

export const updateCartItemQuantity = (itemId, quantity) => {
  const items = getCartItems();
  const nextItems = items
    .map((item) => (item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item))
    .filter((item) => item.quantity > 0);
  saveCartItems(nextItems);
  return nextItems;
};

export const removeCartItem = (itemId) => {
  const items = getCartItems();
  const nextItems = items.filter((item) => item.id !== itemId);
  saveCartItems(nextItems);
  return nextItems;
};
