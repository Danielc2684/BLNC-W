import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { membershipTiers } from '../mockData';

export default function Memberships() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleJoin = (tierId: string) => {
    setSelectedTier(tierId);
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="bg-berry-pink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Membership Plans</h1>
          <p className="text-xl text-berry-pink-100">
            Choose the perfect plan for your wellness journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map(tier => (
            <div
              key={tier.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 ${
                tier.popular ? 'ring-4 ring-berry-pink' : ''
              }`}
            >
              {tier.popular && (
                <div className="bg-berry-pink text-white text-center py-2 font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-vital-green">${tier.price}</span>
                  <span className="text-charcoal-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-vital-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleJoin(tier.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-berry-pink text-white hover:bg-berry-pink-700'
                      : 'bg-soft-gray text-charcoal hover:bg-charcoal-100'
                  }`}
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-charcoal-600">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Flexible Commitment</h3>
              <p>Month-to-month membership with no long-term contracts. Cancel anytime.</p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Exclusive Events</h3>
              <p>Access to member-only workshops, fitness classes, and nutrition seminars.</p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Community Support</h3>
              <p>Join a community of like-minded individuals on their wellness journey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Expert Guidance</h3>
              <p>Access to certified nutritionists and wellness coaches.</p>
            </div>
          </div>
        </div>
      </div>

      {selectedTier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Demo Confirmation</h2>
            <div className="bg-berry-pink-50 border border-berry-pink-200 rounded-lg p-4 mb-6">
              <p className="text-berry-pink-800 font-semibold">
                Thank you for your interest in our {membershipTiers.find(t => t.id === selectedTier)?.name}!
              </p>
              <p className="text-berry-pink-700 text-sm mt-2">
                This is a demonstration only. No actual membership has been created or charged.
              </p>
            </div>
            <button
              onClick={() => setSelectedTier(null)}
              className="w-full bg-berry-pink text-white py-3 rounded-lg font-semibold hover:bg-berry-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
