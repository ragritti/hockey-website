import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Features from "./components/features";
import Footer from "./components/footer";

export default function Home() {

  const featuresProps = {
    title: 'Why Choose Our Academy',
    subtitle: 'We provide comprehensive training programs designed to develop every aspect of your game',
    features: [
      {
        icon: 'Hockey',
        title: "Full Day Academy (Grades 4-12)",
        description: "Comprehensive academic and athletic training program for students in grades 4-12."
      },
      {
        icon: 'Trophy',
        title: "High Performance Training Program (HPTP)",
        description: "Elite-level training focused on developing advanced athletic skills."
      },
      {
        icon: 'Calendar',
        title: "California Charter School Partnership",
        description: "Academic collaboration with California charter schools for quality education."
      },
      {
        icon: 'Users',
        title: "Onsite Academic Teachers",
        description: "Dedicated teachers providing personalized academic support onsite."
      },
      {
        icon: 'Calendar',
        title: "College Exposure Camp",
        description: "Specialized camps to showcase athletes' talents to college recruiters."
      },
      {
        icon: 'Calendar',
        title: "Tournament Teams",
        description: "Competitive teams participating in regional and national tournaments."
      },
      {
        icon: 'Calendar',
        title: "Seasonal Development Camps",
        description: "Short-term camps to enhance skills and performance during the off-season."
      },

    ]
  }

  return (
    <div>
      <Hero/>
      <Stats/>
      <Features {...featuresProps}/>
    </div>
    
  );
}
