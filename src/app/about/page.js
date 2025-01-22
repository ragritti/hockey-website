import FacilitySection from "./facility-section"
import LeadershipSection from "./leaders-section"

export default function FacilitiesPage() {
  return (
    <div className="relative top-20">
      <FacilitySection />
      <div className="flex justify-center items-center p-8">
        <div className="w-3/4 h-0.5 bg-zinc-700 shadow-xl  "></div>
      </div>
      <LeadershipSection />
    </div>

  )
}