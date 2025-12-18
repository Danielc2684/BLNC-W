import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Best Life <span className="text-vital-green">Nutrition Club</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Fuel your best life with healthy shakes, energy teas, and a supportive wellness community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/menu" className="hover:text-vital-green transition-colors">Menu</a></li>
              <li><a href="/memberships" className="hover:text-vital-green transition-colors">Memberships</a></li>
              <li><a href="/events" className="hover:text-vital-green transition-colors">Events</a></li>
              <li><a href="/about" className="hover:text-vital-green transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact (Demo)</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Wellness Way</li>
              <li>Healthy City, HC 12345</li>
              <li>(555) 123-4567</li>
              <li>demo@bestlifenutrition.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-vital-green transition-colors">
                <Facebook className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-vital-green transition-colors">
                <Instagram className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-vital-green transition-colors">
                <Twitter className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-sunrise-orange-900/30 border border-sunrise-orange-700/50 rounded-lg p-4 mb-6">
            <p className="text-sunrise-orange-100 text-sm text-center">
              <strong>Demo Disclaimer:</strong> This website is a demonstration only. All products, pricing, memberships, and ordering flows are simulated for presentation purposes and are not real.
            </p>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Best Life Nutrition Club. All rights reserved. Demo Version.
          </p>
        </div>
      </div>
    </footer>
  );
}
