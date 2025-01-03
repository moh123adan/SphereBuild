export default function Stats() {
    const stats = [
      {
        value: "2012",
        label: "Year Established"
      },
      {
        value: "206",
        label: "Projects Completed"
      },
      {
        value: "870",
        label: "Contractors Appointed"
      },
      {
        value: "26",
        label: "Awards Won"
      }
    ]
  
    return (
      <section className="bg-[#F7C94B] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#1F2937]">
                  {stat.label}
                </div>
                {/* Vertical divider for all except last item */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#1F2937]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  