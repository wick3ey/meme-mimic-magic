import { ExternalLink } from "lucide-react";

const CexPartners = () => {
  const partners = [
    {
      name: "MEXC",
      logo: "/lovable-uploads/92af570a-3f52-45d7-a15b-d21492910d35.png",
      url: "https://www.mexc.com/"
    },
    {
      name: "Gate.io",
      logo: "/lovable-uploads/67a6faaf-2575-4041-b82d-5011400a44af.png",
      url: "https://www.gate.io/"
    },
    {
      name: "Bitmart",
      logo: "/lovable-uploads/8a03f679-f64c-479b-a1f0-b32b0bf403bb.png",
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
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 sm:h-16 object-contain"
              />
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