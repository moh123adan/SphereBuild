import Image from 'next/image'

const clients = [
  {
    name: "TIPOX",
    logoUrl: "/placeholder.svg?height=60&width=120"
  },
  {
    name: "EXCIPIA",
    logoUrl: "/placeholder.svg?height=60&width=120"
  },
  {
    name: "Vide",
    logoUrl: "/placeholder.svg?height=60&width=120"
  },
  {
    name: "DEHOTEL",
    logoUrl: "/placeholder.svg?height=60&width=120"
  },
  {
    name: "UMBER & CO",
    logoUrl: "/placeholder.svg?height=60&width=120"
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

