import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const TokenInfo = () => {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard!",
      duration: 2000
    });
  };

  const fullAddress = "XXX";
  const shortAddress = "XXX";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 relative z-20">
      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#1A1F2C] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-white">TOKEN ADDRESS</h3>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm break-all text-white">{shortAddress}</p>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-white/80"
            onClick={() => handleCopy(fullAddress)}
          >
            <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </Card>

      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#1A1F2C] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-white">LIQUIDITY</h3>
        <p className="text-xs sm:text-sm text-white">LOCKED</p>
      </Card>

      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#1A1F2C] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-white">TOKEN SUPPLY</h3>
        <p className="text-xs sm:text-sm text-white">1 BILLION</p>
      </Card>

      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#1A1F2C] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-white">CONTRACT</h3>
        <p className="text-xs sm:text-sm text-white">RENOUNCED</p>
      </Card>
    </div>
  );
};

export default TokenInfo;