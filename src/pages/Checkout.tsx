import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: '15'
  });

  if (cart.length === 0 && !orderConfirmed) {
    navigate('/menu');
    return null;
  }

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
    clearCart();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-soft-gray flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-vital-green mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-charcoal mb-4">Order Confirmed!</h1>
          <div className="bg-sunrise-orange-50 border border-sunrise-orange-200 rounded-lg p-4 mb-6">
            <p className="text-sunrise-orange-800 font-semibold">Demo Only</p>
            <p className="text-sunrise-orange-700 text-sm mt-1">
              This is a demonstration order. No actual pickup or payment has been processed.
            </p>
          </div>
          <p className="text-charcoal-600 mb-6">
            Your order would be ready for pickup in approximately {formData.pickupTime} minutes.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/menu')}
              className="w-full bg-vital-green text-white py-3 rounded-lg font-semibold hover:bg-vital-green-700 transition-colors"
            >
              Order More
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-charcoal-100 text-charcoal py-3 rounded-lg font-semibold hover:bg-charcoal-200 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-gray py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Pickup Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                    Pickup Time
                  </label>
                  <select
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                  </select>
                </div>

                <div className="pt-4">
                  <div className="bg-soft-gray rounded-lg p-4 mb-4">
                    <div className="flex items-center text-charcoal-600 mb-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Pickup Only - No Delivery</span>
                    </div>
                    <p className="text-sm text-charcoal-600">
                      123 Wellness Way, Healthy City, HC 12345
                    </p>
                  </div>

                  <div className="bg-sunrise-orange-50 border border-sunrise-orange-200 rounded-lg p-4 mb-4">
                    <p className="text-sunrise-orange-800 font-semibold text-sm">Payment Section (Demo)</p>
                    <p className="text-sunrise-orange-700 text-xs mt-1">
                      This is a visual demonstration only. No payment will be processed.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-vital-green text-white py-4 rounded-lg font-semibold hover:bg-vital-green-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Complete Demo Order
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-charcoal">{item.name}</h3>
                      <p className="text-sm text-charcoal-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-charcoal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-charcoal pt-2 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
