import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-min-screen bg-zinc-900">
      <div className="absolute inset-0">
      <div className="hidden sm:block relative w-full h-full">
          <Image
            src="/bg_main.png"
            alt="Hockey Training"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="block sm:hidden relative w-full h-full">
          <Image
            src="/bg_mobile.png"  
            alt="Hockey Training"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

      </div>
      
      {/* Content overlay */}
      <div className="relative container mx-auto px-10 pt-40 pb-20 min-h-screen flex flex-col items-center text-center justify-center">
        <div className="max-w-3xl">
          {/* <div className="inline-flex items-center rounded-full border border-red-400 bg-red-500 bg-opacity-10 px-3 py-1 text-sm text-red-300 backdrop-blur-sm mb-6">
            <span className="font-medium">Welcome to Optimum Hockey Academy</span>
          </div> */}
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Your next step of <span className="text-[#BA0A0A]">Hockey</span> development
          </h1>
      
          <p className="text-xl text-gray-300 max-w-2xl mb-10">California's premiere full time hockey academy focused on player development and student athlete success.
          </p>
          
          <div className="">
            <Button size="lg" className="bg-[#BA0A0A] hover:bg-red-500 text-white px-20">
              Get Started
            </Button>
          </div>
        </div>

        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

