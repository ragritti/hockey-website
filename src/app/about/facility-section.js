'use client'
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from 'react';

const facilityData = [
  {
    title: "Great Park Ice & FivePoints Arena",
    features: [
      "4 rinks (3 NHL, 1 Olympic)",
      "2,500 seat arena",
      "Anaheim Ducks Practice Facility",
      "Largest ice facility in California",
    ],
    image: "/about_1.png",
  },
  {
    title: "Optimum Academic Classrooms",
    features: [
      "3 onsite classrooms at Great Park Ice",
      "Small group academics",
      "Classes instructed by onsite California Accredited Teachers",
      "Partnered with Epic Charter Schools",
    ],
    image: "/about_2.png",
  },
];

export default function FacilitySection() {
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    // Observe content sections
    contentRefs.current.forEach((content) => {
      if (content) {
        observer.observe(content);
      }
    });

    // Observe images
    imageRefs.current.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      contentRefs.current.forEach((content) => {
        if (content) {
          observer.unobserve(content);
        }
      });
      imageRefs.current.forEach((image) => {
        if (image) {
          observer.unobserve(image);
        }
      });
    };
  }, []);

  return (
    <section className="py-14 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-20 text-zinc-800">
        Our <span className='text-[#BA0A0A]'>World-Class</span> Facilities
      </h2>
      <div className="space-y-24">
        {facilityData.map((facility, facilityIndex) => (
          <div key={facilityIndex}>
            <div className={`grid md:grid-cols-2 gap-12 items-center `}>
            <div 
                ref={(el) => (imageRefs.current[facilityIndex] = el)}
                className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl opacity-0 translate-y-10 transition-all duration-700 ease-out delay-400"
              >
                <img
                  src={facility.image}
                  alt={`${facility.title} Interior`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div 
                ref={(el) => (contentRefs.current[facilityIndex] = el)}
                className="group opacity-0 translate-y-10 transition-all duration-700 ease-out"
              >
                <div className="h-full flex flex-col justify-center">
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-8 text-zinc-700">
                      {facility.title}
                    </h3>
                    <ul className="space-y-6">
                      {facility.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-4 text-zinc-700"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-[#BA0A0A]" />
                          <span className="text-lg font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}