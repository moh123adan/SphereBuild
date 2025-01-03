import Image from "next/image";
import Link from "next/link";

export default function Keyask() {
  return (
    <div id="keyask" className="min-h-screen mt-16 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          KEYASK project
          <div className="h-1 w-24 bg-yellow-400 mt-2"></div>
        </h1>

        <div className="space-y-6">
          <p className="text-gray-700">
            In 2014, the Hydro Constructors Limited Partnership began laying the
            groundwork for this new 695-megawatt powerhouse. As the centerpiece
            of The Keeyask Generation Project's seven turbine units will provide
            enough renewable energy to power 400,000 homes.
          </p>

          <p className="text-gray-700">
            It is formed in partnership with Montana-based Barnard Construction
            Company and Canadian contractor EllisDon. The Keeyask project
            involves massive cast-in-place concrete structures—chiefly a
            spillway and the powerhouse structure—totaling more than 345,000
            cubic yards (330,000 cubic meters).
          </p>

          <div className="relative h-80 w-full my-8">
            <Image
              src="/images/pro1.png"
              alt="Keeyask project turbine structure"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <p className="text-gray-700">
            Our work also includes about 1.4 miles (2.2 kilometers) of
            earth-filled dams and 14 miles (23 kilometers) of earthen dikes. The
            consortium is currently constructing cofferdams that will be pumped
            out to create dry work areas for the powerhouse, the spillway, and
            other structures.
          </p>

          <div className="mt-8">
            <Link href="/projects">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black uppercase text-sm font-semibold px-6 py-2">
                Back to projects
              </button>
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-12">
            © 2012 by Sphere Constructions.
          </p>
        </div>
      </div>
    </div>
  );
}
