import Image from 'next/image'

const clients = [
  {
    name: "EXCIPIA",
    logoUrl: "/images/logo5.png"
  },
  {
    name: "Vide",
    logoUrl: "/images/logo4.png"
  },
  {
    name: "DEHOTEL",
    logoUrl: "/images/logo3.png"
  },
  {
    name: "UMBER & CO",
    logoUrl: "/images/logo2.png"
  }
]

export default function Clients() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">CLIENTS</h2>
          <div className="w-24 h-1 bg-[#F7C94B] mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="w-40 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logoUrl}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

