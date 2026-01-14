import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { testimonials } from '../mockData';
import { imageList } from '../assets/insta_photos/images';

export default function Home() {

  // const instagramImages = [
  //   'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
  //   'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400'
  // ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-vital-green-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-charcoal mb-6">
              Best Life <span className="text-vital-green">Nutrition Club</span>
            </h1>
            <p className="text-xl lg:text-2xl text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Healthy Shakes • Energy Teas • Wellness Community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-vital-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vital-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-berry-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex text-sunrise-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-4">
            Follow Our Journey
          </h2>
          <p className="text-center text-charcoal-600 mb-12">@bestlifenutrition</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {imageList.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
              >
                <a href="https://www.instagram.com/bestlifenutrition__/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-vital-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl mb-8 text-vital-green-100">
            Join our community today and discover a healthier, more energized you.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-white text-vital-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
