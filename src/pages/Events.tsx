import { useState } from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { events } from '../mockData';

export default function Events() {
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const handleRegister = (eventId: string) => {
    setRegisteredEvent(eventId);
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="bg-sunrise-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Community Events</h1>
          <p className="text-xl text-sunrise-orange-100">
            Join our wellness community for workshops, workouts, and more
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-sunrise-orange-100 text-sunrise-orange rounded-xl p-6 text-center w-32">
                    <Calendar className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">{event.name}</h3>
                  <p className="text-charcoal-600 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-charcoal-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.spots} spots available
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Best Life Nutrition Club
                    </div>
                  </div>

                  <button
                    onClick={() => handleRegister(event.id)}
                    className="bg-sunrise-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-sunrise-orange-700 transition-all transform hover:scale-105"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Why Attend Our Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Learn & Grow</h3>
              <p className="text-charcoal-600">
                Gain knowledge from certified nutritionists and wellness experts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Connect</h3>
              <p className="text-charcoal-600">
                Meet like-minded individuals on their wellness journey.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Stay Motivated</h3>
              <p className="text-charcoal-600">
                Get inspired and stay accountable to your health goals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Members First</h3>
              <p className="text-charcoal-600">
                Members get priority registration and exclusive event access.
              </p>
            </div>
          </div>
        </div>
      </div>

      {registeredEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Registration Confirmed</h2>
            <div className="bg-sunrise-orange-50 border border-sunrise-orange-200 rounded-lg p-4 mb-6">
              <p className="text-sunrise-orange-800 font-semibold">
                You're signed up for {events.find(e => e.id === registeredEvent)?.name}!
              </p>
              <p className="text-sunrise-orange-700 text-sm mt-2">
                This is a demonstration only. No actual event registration has been processed.
              </p>
            </div>
            <button
              onClick={() => setRegisteredEvent(null)}
              className="w-full bg-sunrise-orange text-white py-3 rounded-lg font-semibold hover:bg-sunrise-orange-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
