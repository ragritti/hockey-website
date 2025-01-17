export default function Stats({stats}){
    
    return(
        <div className="py-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-zinc-800">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-white">{stat.label}</div>
            </div>
          ))}
        </div>
    )
}