import { Facebook, Instagram } from 'lucide-react';
import { RiTiktokLine } from "react-icons/ri";

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
              <li><a href="/about" className="hover:text-vital-green transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>832 W Lantana Rd</li>
              <li>Lantana, FL 33462</li>
              <li>(561) 255-4154</li>
              <li>demo@bestlifenutrition.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Best-life-nutrition-club/61573613227123/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vital-green transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bestlifenutrition__/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vital-green transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* Tiktok */}
              <a
                href="https://www.tiktok.com/@leonorgnehm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vital-green transition-colors"
              >
                <RiTiktokLine className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Best Life Nutrition Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
