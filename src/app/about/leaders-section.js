'use client'
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from 'react';

const leadershipData = [
    {
      name: "Alex Kim",
      title: "Director of Hockey Operations",
      role: "Co-Founder",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder_1-LDVqd0GtHn2alN7ula71Rlm7O8QVkN.png",
      achievements: [
        "11 year professional hockey in AHL, ECHL, Europe and Asia",
        "7 years as head coach of Jr Ducks 16U AAA program",
        "Advanced to USA Hockey National Tournament in 4 of last 5 years",
      ],
    },
    {
      name: "Craig Johnson",
      title: "Director of Hockey Development",
      role: "Co-Founder",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder_2-2odDvCKoXxEDAu55uyEcvOhA8Y9kae.png",
      achievements: [
        "14 year professional hockey in NHL",
        "1994 USA Olympian",
        "2023-2024 Anaheim Ducks Assistant Coach",
      ],
    },
];

export default function LeadershipSection() {
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-zinc-800">
      Our <span className='text-[#BA0A0A]'>Leadership </span>Team
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {leadershipData.map((leader, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <Card className="h-full transition-all p-4 duration-300 rounded-3xl hover:shadow-2xl hover:shadow-red-200 bg-zinc-800 ">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="overflow-hidden rounded-full mb-6 border-4 border-white shadow-lg">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-48 h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-zinc-200">{leader.name}</h3>
                  <p className="text-[#BA0A0A] font-medium text-xl mb-2 text-center">{leader.title}</p>
                  <p className="text-zinc-600 mb-4 text-lg">{leader.role}</p>
                  <ul className="space-y-3">
                    {leader.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 text-zinc-300"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#BA0A0A] flex-shrink-0" />
                        <span className="text-lg">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}