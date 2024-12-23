import { ExternalLink } from "lucide-react";

const CexPartners = () => {
  const partners = [
    {
      name: "MEXC",
      logo: "/lovable-uploads/55d47fe8-5ca9-40ac-b704-8d424098dbfb.png",
      url: "https://www.mexc.com/"
    },
    {
      name: "Gate.io",
      logo: "/lovable-uploads/0beaceb6-5b6c-4289-adc3-0663386467cb.png",
      url: "https://www.gate.io/"
    },
    {
      name: "Bitmart",
      logo: "/lovable-uploads/c35652bf-dbdc-48f3-a179-28d3a829dacd.png",
      url: "https://www.bitmart.com/"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16 sm:mt-24 relative z-20">
      <div className="bg-white bg-opacity-20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 sm:border-4 border-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-black">CEX Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 sm:p-6 rounded-xl border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center gap-4"
            >
              <div className="w-full h-20 sm:h-28 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`object-contain ${partner.name === "Bitmart" ? "w-32 sm:w-44" : "h-16 sm:h-24"}`}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl">{partner.name}</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CexPartners;