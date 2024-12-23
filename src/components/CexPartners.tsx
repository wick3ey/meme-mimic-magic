import { ExternalLink } from "lucide-react";

const CexPartners = () => {
  const partners = [
    {
      name: "MEXC",
      logo: "/lovable-uploads/55d47fe8-5ca9-40ac-b704-8d424098dbfb.png",
      url: "https://www.mexc.com/exchange/LOU_USDT"
    },
    {
      name: "Gate.io",
      logo: "/lovable-uploads/0beaceb6-5b6c-4289-adc3-0663386467cb.png",
      url: "https://www.gate.io/pilot/solana/lou-lou"
    },
    {
      name: "Bitmart",
      logo: "/lovable-uploads/c35652bf-dbdc-48f3-a179-28d3a829dacd.png",
      url: "https://www.bitmart.com/trade/en-US?symbol=LOU_USDT",
      customSize: "h-24 sm:h-32" // Further increased size for Bitmart
    },
    {
      name: "XT",
      logo: "/lovable-uploads/123e5201-e00b-4957-a16c-b13e2ec20966.png",
      url: "https://www.xt.com/en/trade/lou_usdt"
    },
    {
      name: "KCEX",
      logo: "/lovable-uploads/0bad1a07-f141-4729-8ad5-caa849a1af76.png",
      url: "https://www.kcex.com/exchange/LOU_USDT?_from=search"
    },
    {
      name: "LBANK",
      logo: "/lovable-uploads/479fecbf-6102-41f1-bcde-195007bb78b7.png",
      url: "https://www.lbank.com/trade/loui_usdt",
      customSize: "h-20 sm:h-24" // Increased size for LBANK
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
              <div className="w-full h-20 sm:h-24 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={partner.customSize || "h-16 sm:h-20 object-contain"}
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