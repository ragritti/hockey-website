import { Card } from "@/components/ui/card"
import Link from "next/link"


export default function AlumniCard({ alumni }) {
  return (
    <Card className="bg-red-50 rounded-2xl shadow-lg p-6 transition-all  duration-300 hover:shadow-2xl hover:shadow-red-200 h-full  ">
      <div className="flex flex-col items-center text-center">
        <div
          className={`relative mb-4 flex justify-center items-center overflow-auto min-w-48 h-72`}
        >
            <a href={alumni.profileUrl}>
          <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover rounded-lg" />
          </a>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-semibold text-[#BA0A0A] pb-2">{alumni.name}</h3>
        </div>
        {/* <p className="text-gray-500 mb-4">{alumni.achievements}</p> */}
        <div className="flex-grow overflow-y-auto max-h-54">
          <ul className="text-left text-zinc-700 mb-4 list-disc pl-6">
            {alumni.achievements.map((achievement, index) => (
              <li key={index} className="mb-2 ">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
