import Carousel from "./carousel"
import { alumniData } from "./data"

export default function Page() {
  return (
    <div className="relative top-20 py-14">
      <div className="relative max-w-7xl mx-auto px-4 pb-14 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-800">Notable <span className="text-[#BA0A0A]">Alumni</span></h2>
          <p className="mt-4 text-xl font-medium text-zinc-700 italic">From Our Campus to the World</p>
        </div>
        <Carousel alumnis={alumniData} />
      </div>
    </div>
  )
}