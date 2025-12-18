import { useState } from 'react';
import { Check, Package } from 'lucide-react';
import { subscriptionPlans } from '../mockData';

export default function Subscriptions() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="bg-vital-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Subscription Plans</h1>
          <p className="text-xl text-vital-green-100">
            Never run out of your favorites with recurring delivery
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {subscriptionPlans.map(plan => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-vital-green to-vital-green-600 p-6 text-white">
                <Package className="w-12 h-12 mb-3" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-vital-green-100">{plan.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-vital-green">${plan.price}</span>
                  <span className="text-charcoal-600 ml-2">{plan.frequency}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-vital-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className="w-full bg-vital-green text-white py-3 rounded-lg font-semibold hover:bg-vital-green-700 transition-all transform hover:scale-105"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
            How Subscriptions Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-vital-green-100 text-vital-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Choose Your Plan</h3>
              <p className="text-charcoal-600 text-sm">
                Select the subscription that fits your lifestyle and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-vital-green-100 text-vital-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Customize Items</h3>
              <p className="text-charcoal-600 text-sm">
                Pick your favorite flavors and adjust quantities as needed.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-vital-green-100 text-vital-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Enjoy & Save</h3>
              <p className="text-charcoal-600 text-sm">
                Get regular deliveries at a discounted rate. Pause or cancel anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-vital-green-50 border border-vital-green-200 rounded-xl p-6">
          <h3 className="font-semibold text-vital-green-900 mb-2">Subscription Benefits</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-vital-green-800 text-sm">
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 flex-shrink-0" />
              Save up to 15% on regular prices
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 flex-shrink-0" />
              Never run out of your favorites
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 flex-shrink-0" />
              Flexible scheduling options
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 flex-shrink-0" />
              Cancel or pause anytime
            </li>
          </ul>
        </div>
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Demo Confirmation</h2>
            <div className="bg-vital-green-50 border border-vital-green-200 rounded-lg p-4 mb-6">
              <p className="text-vital-green-800 font-semibold">
                Thank you for your interest in our {subscriptionPlans.find(p => p.id === selectedPlan)?.name}!
              </p>
              <p className="text-vital-green-700 text-sm mt-2">
                This is a demonstration only. No actual subscription has been created or charged.
              </p>
            </div>
            <button
              onClick={() => setSelectedPlan(null)}
              className="w-full bg-vital-green text-white py-3 rounded-lg font-semibold hover:bg-vital-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
