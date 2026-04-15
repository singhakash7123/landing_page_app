import BusinessUpgrade from "@/Components/HighLightsSection/BusinessUpgrade";
import Stats from "@/Components/StatsSection/Stats";
import Team from "@/Components/Team/Team";
import React from "react";
import teamInfo from "@/Data/Team";
import statsData from "@/Data/Stats";
import Office_team from "@/Images/About/Office_team.webp"
import Image from "next/image";
const page = () => {
  const renderStats = statsData?.map((item)=>{
    return <Stats key={item.number} number={item.number} text={item.text} />
  })

  const renderTeam = teamInfo?.map((item)=>{
    return <Team key={item.id} Name={item.Name} Role={item.Role} image={item.image} />
  })
    return (
    <main className=" px-4">
      <div className="min-h-[50vh] flex flex-col items-center justify-end text-center gap-y-4">
        <h2 className="w-full text-4xl lg:text-5xl font-bold max-w-2xl">
          Big Results for Small Businesses
        </h2>
        <p className=" w-full text-lg text-gray-500 max-w-xl">
          Driven by technology and a dedication to excellence, we help
          businesses succeed in the ever-evolving digital world.
        </p>
      </div>
      <div className="mt-20">
        <div className="w-full max-w-4xl aspect-square sm:aspect-2/1 bg-red-500 rounded-2xl mx-auto relative overflow-hidden">
        <Image src={Office_team} alt='office_work' fill className="object-center" sizes="(max-width:768px) 100vw
        (max-width:1200px) 60vw 40vw" priority />
        </div>
      </div>

      {/* statssection */}
      <div className="py-25 bg-[#faf8ff] mt-25">
        <h2 className="max-w-4xl text-5xl font-extrabold text-center tracking-wide leading-snug mx-auto">
          Our Outstanding Success Story Told Through Key Numbers
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-14 tracking-wide gap-y-8">
         {renderStats}
        </div>
      </div>

      <BusinessUpgrade />

      {/* teamsection */}
      <div className="mt-8">
        <h3 className="max-w-2xl text-4xl lg:text-5xl mx-auto text-center font-bold">
          We re a team focused on delivering results
        </h3>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {renderTeam}
        </div>
      </div>
    </main>
  );
};

export default page;
