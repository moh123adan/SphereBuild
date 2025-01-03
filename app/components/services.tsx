import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 bg-gray-50">
        <h3 className="text-xl font-semibold text-[#1F2937] mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Preconstruction Planning",
      description:
        "Effective pre-construction services and planning is the cornerstone of a successful construction project. The Pioneer Approach to pre-construction is to serve both the Owner and Architect as a reliable source of current, complete, and accurate information. This enables the project team to make informed and well-grounded decisions relating to the balance of schedule, cost, and quality while considering not only the initial investment, but also the Life Cycle Cost implications.",
      imageUrl: "images/serv1.png",
    },
    {
      title: "Architectural Modelling",
      description:
        "The role of architectural model making in the architectural design process is irreplaceable. At present, architectural model is not only a presentation tool in the architect's toolbox, but also a creative product for everyone. Make an architectural model of the new house you just purchased, or the interior space the dream house you've recently designed.",
      imageUrl: "images/serv2.png",
    },
    {
      title: "Construction Management",
      description:
        "Construction Management is the planning, coordinating, and building of a project from conception to completion. This specialization is intended for Construction industry professionals, engineers, and architects looking to advance their careers. Students interested in learning about construction project management would also benefit from this specialization.",
      imageUrl: "images/serv3.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">SERVICES</h2>
          <div className="w-24 h-1 bg-[#F7C94B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
