import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, MessageSquare, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formatPrice = (val: number) => {
    return 'IDR ' + val.toLocaleString('en-US');
  };

  const handleWhatsAppCheckout = (phone: string = '6289690571731') => {
    const lines = [
      `*EXCELSA COFFEE ORDER - KOPERASI MARANGKAI SEJAHTERA BERSAMA*`,
      `---------------------------------------`,
      ...cartItems.map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (${item.product.weight}) x ${item.quantity} = ${formatPrice(
            item.product.price * item.quantity
          )}`
      ),
      `---------------------------------------`,
      `*Total Product Cost:* ${formatPrice(totalAmount)}`,
      customerName ? `*Customer Name:* ${customerName}` : '',
      customerAddress ? `*Shipping Address:* ${customerAddress}` : '',
      customerNotes ? `*Special Notes:* ${customerNotes}` : '',
      `---------------------------------------`,
      `Please confirm stock availability and freight shipping quote. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(lines);
    const targetPhone = phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, '_blank');
    setOrderSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-[#2D4438] text-white flex items-center justify-between border-b border-[#3D5A4A]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#E0B47F]" />
              <h2 className="font-bebas text-2xl tracking-wider text-[#FAF6ED]">
                SHOPPING CART ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#82C79B] mx-auto" />
                <h3 className="font-bebas text-2xl text-gray-900">
                  ORDER INQUIRY PREPARED FOR COOPERATIVE SALES!
                </h3>
                <p className="text-sm font-barlow text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Your order details have been prepared for Koperasi Marangkai official WhatsApp at <strong>+62 896-9057-1731</strong> / <strong>081223741112</strong>.
                </p>
                <button
                  onClick={() => {
                    setOrderSubmitted(false);
                    onClearCart();
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#2D4438] hover:bg-[#3D5B4A] text-white rounded-lg font-barlow font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
                >
                  DONE & CLOSE
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EBF2EC] text-[#2D4438] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bebas text-xl text-gray-800">YOUR CART IS EMPTY</h3>
                <p className="text-xs text-gray-500 font-barlow max-w-xs mx-auto">
                  Select any of our authentic Meratus Excelsa coffee offerings from the Store or Product Showcase.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl border border-gray-100 bg-[#FAF9F5] flex gap-3.5 items-center justify-between"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bebas text-base text-gray-900 truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-xs text-[#2D4438] font-barlow font-medium">
                          {item.product.priceFormatted} • {item.product.weight}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-bold hover:bg-gray-300 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold font-barlow min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-bold hover:bg-gray-300 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Buyer Details Form */}
                <div className="pt-4 border-t border-gray-200 space-y-3 text-xs font-barlow">
                  <h4 className="font-bebas text-lg text-gray-800 tracking-wider">
                    DIRECT ORDER INFORMATION
                  </h4>
                  <div>
                    <label className="block text-gray-600 mb-1 font-medium">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Smith"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#82C79B] text-xs bg-white text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1 font-medium">Shipping Address & City</label>
                    <input
                      type="text"
                      placeholder="e.g. 12 Coffee Roasters Way, Jakarta / International"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#82C79B] text-xs bg-white text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1 font-medium">Order Notes (Grind or Whole Bean)</label>
                    <input
                      type="text"
                      placeholder="Whole bean or custom filter/espresso grind"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#82C79B] text-xs bg-white text-gray-800"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && !orderSubmitted && (
            <div className="p-6 bg-[#F7F5EE] border-t border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-barlow text-sm text-gray-600">Order Subtotal:</span>
                <span className="font-bebas text-2xl text-[#2D4438] font-bold">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-barlow leading-relaxed">
                *Dispatched directly from Koperasi Marangkai facility in Tapin, South Kalimantan. Freight charges confirmed according to destination and shipping carrier.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => handleWhatsAppCheckout('6289690571731')}
                  className="w-full py-3 px-4 bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors shadow cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#82C79B]" />
                  <span>CHECKOUT VIA WHATSAPP (+62 896-9057-1731)</span>
                </button>
                <button
                  onClick={() => handleWhatsAppCheckout('6281223741112')}
                  className="w-full py-2.5 px-4 bg-[#EBF2EC] hover:bg-[#DCE8DF] text-[#2D4438] border border-[#B6D1BE] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#2D4438]" />
                  <span>CHECKOUT VIA WHATSAPP (081223741112)</span>
                </button>
                <button
                  onClick={onClearCart}
                  className="w-full text-center text-xs text-gray-500 hover:text-red-500 transition-colors py-1 font-barlow cursor-pointer"
                >
                  Empty Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
