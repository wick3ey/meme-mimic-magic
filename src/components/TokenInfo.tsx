import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TokenInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 relative z-20">
      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Contract Address</h3>
        <p className="text-sm break-all">5DQSDg6SGkbsbykq4mQstpcL4d5raEHc6rY7LgBwpump</p>
      </Card>

      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Chart</h3>
        <div className="flex flex-col gap-2">
          <a 
            href="https://www.dextools.io/app/en/token/lou?t=1734866919683"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Dextools
          </a>
          <a 
            href="https://dexscreener.com/solana/47hs9pp9f5thzhgkhaehfpywsz8wb1r2wrros9becgjz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Dexscreener
          </a>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Total Supply</h3>
        <p className="text-sm">100,000,000</p>
      </Card>

      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Tax</h3>
        <p className="text-sm">0% Buy / 0% Sell</p>
      </Card>
    </div>
  );
};

export default TokenInfo;