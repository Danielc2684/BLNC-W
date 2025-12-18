import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="bg-vital-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-vital-green-100">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
            <p className="text-charcoal-600 mb-8">
              Have questions about our products, memberships, or events? We're here to help!
              Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-vital-green" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-charcoal mb-1">Visit Us</h3>
                  <p className="text-charcoal-600">
                    123 Wellness Way<br />
                    Healthy City, HC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-vital-green" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
                  <p className="text-charcoal-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-vital-green" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-charcoal mb-1">Email Us</h3>
                  <p className="text-charcoal-600">demo@bestlifenutrition.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-vital-green" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-charcoal mb-1">Hours</h3>
                  <p className="text-charcoal-600">
                    Monday - Friday: 7:00 AM - 7:00 PM<br />
                    Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <MapPin className="w-12 h-12 mr-2" />
                <span className="text-lg">Map Placeholder</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-vital-green-100 text-vital-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent!</h3>
                <div className="bg-vital-green-50 border border-vital-green-200 rounded-lg p-4 mb-6">
                  <p className="text-vital-green-800 font-semibold">Thank you for reaching out!</p>
                  <p className="text-vital-green-700 text-sm mt-2">
                    This is a demonstration only. No actual message has been sent.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-vital-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-vital-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vital-green focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-vital-green text-white py-4 rounded-lg font-semibold hover:bg-vital-green-700 transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
