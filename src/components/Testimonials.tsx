import React from 'react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  gender?: 'male' | 'female';
}

const TestimonialsMarquee = () => {
  const { t } = useTranslation('testimonial');
  
  // Get testimonials from translation file
  const testimonials = t('testimonials', { returnObjects: true }) as Testimonial[];

  // Function to get local avatar image URL based on gender
  const getAvatarUrl = (gender?: 'male' | 'female') => {
    // Using local avatar images from the public folder
    const url = gender === 'male' 
      ? `/images/vecteezy_avatar-bearded-man_10967316.jpg`
      : `/images/femaleAvatar2.jpg`;
    
    console.log(`Avatar URL for ${gender}:`, url); // Debug log
    return url;
  };


  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
          {testimonials.concat(testimonials).map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 sm:p-6 mx-2 sm:mx-3 w-72 sm:w-80 md:w-96 lg:w-[420px] flex-shrink-0 min-h-[280px] flex flex-col justify-between">
              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-3 text-base sm:text-lg text-gray-900 leading-tight">{testimonial.title}</h3>

              {/* Quote - Main content area with proper line height and spacing */}
              <div className="flex-grow mb-4">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-normal">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Profile - Always at bottom */}
              <div className="flex items-center pt-3 border-t border-gray-100">
                {/* Avatar with image and fallback */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                  <img 
                    src={getAvatarUrl(testimonial.gender)} 
                    alt={`${testimonial.name} avatar`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => console.log(`Avatar loaded for ${testimonial.name}`)}
                    onError={(e) => {
                      console.log(`Avatar failed to load for ${testimonial.name}:`, e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Create a simple fallback div instead of React element
                      const fallbackDiv = document.createElement('div');
                      const initial = testimonial.name.charAt(0).toUpperCase();
                      const bgColor = testimonial.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500';
                      fallbackDiv.className = `w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg ${bgColor}`;
                      fallbackDiv.textContent = initial;
                      target.parentNode?.appendChild(fallbackDiv);
                    }}
                  />
                </div>
                <p className="font-medium text-gray-900 text-xs sm:text-sm">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation - Changed from 80s to 40s for faster animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsMarquee;