import { Card, CardContent } from "@/components/ui/card"
import { HopIcon as Hockey, Trophy, Calendar, Users } from 'lucide-react'

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-red-100 hover:border-red-200 transition-colors duration-300">
      <CardContent className="pt-6">
        <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-600">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function Features({ title, subtitle, features }) {
  const iconMap = {
    Hockey: <Hockey className="h-6 w-6 text-red-600" />,
    Trophy: <Trophy className="h-6 w-6 text-red-600" />,
    Calendar: <Calendar className="h-6 w-6 text-red-600" />,
    Users: <Users className="h-6 w-6 text-red-600" />,
  }

  return (
    <section className="py-24 px-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">{title}</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

