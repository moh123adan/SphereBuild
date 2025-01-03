import Image from "next/image";


interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Robert Wilson",
    position: "CEO",
    imageUrl: "/images/per1.png",
  },
  {
    name: "Erica Yonce",
    position: "VP Civil Engineering",
    imageUrl: "/images/per2.png",
  },
  {
    name: "Lia Malanga",
    position: "Director of Survey Team",
    imageUrl: "/images/per3.png",
  },
  {
    name: "Bryce Plantell",
    position: "Senior Architect",
    imageUrl: "/images/per4.png",
  },
  {
    name: "Li Wei",
    position: "Civil Engineer",
    imageUrl: "/images/per5.png",
  },
  {
    name: "Susan Saylor",
    position: "Archeologist",
    imageUrl: "/images/per6.png",
  },
];

export default function Team() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">
            OUR SENIOR TEAM
          </h2>
          <div className="w-24 h-1 bg-[#F7C94B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-100 aspect-[3/4] mb-4 overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-[#1F2937]">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
