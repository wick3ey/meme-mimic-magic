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

  const fullAddress = "7KXNmTBWVE3uwYsTiKQJHCQksmZiiQh8z8Ehmnmupump";
  const shortAddress = "7KXN...pump";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 relative z-20">
      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#FEF7CD] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-black">TOKEN ADDRESS</h3>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm break-all">{shortAddress}</p>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-6 w-6 sm:h-8 sm:w-8"
            onClick={() => handleCopy(fullAddress)}
          >
            <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </Card>

      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#FEC6A1] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-black">LIQUIDITY</h3>
        <p className="text-xs sm:text-sm">LOCKED</p>
      </Card>

      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#F2FCE2] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-black">TOKEN SUPPLY</h3>
        <p className="text-xs sm:text-sm">1 BILLION</p>
      </Card>

      <Card className="p-3 sm:p-6 border-2 sm:border-4 border-black bg-[#E5DEFF] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-black">CONTRACT</h3>
        <p className="text-xs sm:text-sm">RENOUNCED</p>
      </Card>
    </div>
  );
};

export default TokenInfo;