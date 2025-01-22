'use client'
import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export default function Stats() {
  const [triggerAnimation, setTriggerAnimation] = useState(false)
  const mainRef = useRef(null)
  const stats = [
    { number: "500", label: "Active Players", prefix: "+" },
    { number: "15", label: "Pro Coaches", prefix: "+" },
    { number: "25", label: "Years Experience", prefix: "+" },
    { number: "100", label: "Dedication", prefix: "%" },
  ]
  useEffect(() => {
    function handleScroll() {
      if (mainRef.current) {
        const main = mainRef.current;
        const rect = main.getBoundingClientRect();

        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setTriggerAnimation(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])
  return (
    <div className="py-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-zinc-800">
      {stats.map((stat, index) => (
        <div key={index} className="text-center flex flex-col">
          <div className="text-3xl font-bold text-red-500 mb-2 gap-3">{triggerAnimation?<CountUp start={0} end={stat?.number} duration={3} />:0}
          </div>

          <div className="text-white">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}