import Image from "next/image";
import about from "../../public/images/about.png";

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="p-8 lg:p-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-4">ABOUT</h2>
              <div className="w-24 h-1 bg-[#F7C94B] mb-8"></div>

              <div className="space-y-6 text-gray-600">
                <p>
                  Sphere Constructions is a world-leading construction and
                  building services company that completes in excess of $5
                  billion worth of contracts annually, in every market sector
                  and across the globe. Over the last 69 years, we've grown from
                  being a general contractor to a multi-faceted company that can
                  deliver any aspect of a project.
                </p>

                <p>
                  Well known as an expert in "earth moving", it was no surprise
                  that we found success in site clearing operations. Various
                  locations, including the Antigonish Regional Mall site, the
                  Georgia Pacific Gypsum site in Port Hawkesbury, Louisiana
                  Pacific site at Point Tupper and the Burnside Industrial Park
                  site in Dartmouth, the new Dartmouth Crossing IKEA site, among
                  many others, have all benefited from our competency, skills
                  and meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto">
            <div className="absolute inset-0">
              <Image
                src={about}
                alt="Construction site with scaffolding"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
