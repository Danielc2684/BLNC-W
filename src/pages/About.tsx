import { Heart, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-soft-gray">
      <div className="bg-vital-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-vital-green-100">
            Empowering healthier lifestyles, one shake at a time
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Our Story</h2>
          <div className="prose prose-lg text-charcoal-600 space-y-4">
            <p>
              Best Life Nutrition Club was founded with a simple mission: to make healthy living accessible,
              delicious, and fun for everyone. We believe that nutrition shouldn't be complicated or boring,
              and that wellness is best achieved together.
            </p>
            <p>
              What started as a small neighborhood nutrition shop has grown into a thriving community hub
              where people come not just for amazing shakes and energy teas, but for the support, education,
              and motivation to live their best lives.
            </p>
            <p>
              Every product we offer is carefully crafted with premium ingredients, designed to fuel your
              body and delight your taste buds. But we're more than just a nutrition club – we're a community
              committed to helping each other succeed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vital-green-100 text-vital-green rounded-full mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Our Mission</h3>
            <p className="text-charcoal-600">
              To inspire and support individuals in achieving their wellness goals through quality nutrition
              and community connection.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vital-green-100 text-vital-green rounded-full mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Our Vision</h3>
            <p className="text-charcoal-600">
              A world where everyone has access to the nutrition, knowledge, and support they need to live
              their healthiest, most vibrant life.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vital-green-100 text-vital-green rounded-full mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Our Community</h3>
            <p className="text-charcoal-600">
              A supportive, inclusive space where members motivate each other, celebrate wins, and grow
              together on their wellness journeys.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Quality First</h3>
              <p className="text-charcoal-600">
                We use only premium, carefully sourced ingredients in every product we serve.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Education & Empowerment</h3>
              <p className="text-charcoal-600">
                We provide the knowledge and tools you need to make informed nutrition choices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Community Connection</h3>
              <p className="text-charcoal-600">
                We foster a welcoming environment where everyone belongs and supports each other.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Results-Driven</h3>
              <p className="text-charcoal-600">
                We're committed to helping you achieve real, sustainable results in your wellness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
