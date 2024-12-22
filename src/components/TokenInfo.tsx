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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 relative z-20">
      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-[#FEF7CD] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">TOKEN ADDRESS</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm break-all">B4FvDhN44LEmXa57ud1XcA4oPNFSfrotsnWwk5UMpump</p>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8"
            onClick={() => handleCopy("B4FvDhN44LEmXa57ud1XcA4oPNFSfrotsnWwk5UMpump")}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-[#FEC6A1] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">LIQUIDITY</h3>
        <p className="text-sm">LOCKED</p>
      </Card>

      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-[#F2FCE2] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">TOKEN SUPPLY</h3>
        <p className="text-sm">1 BILLION</p>
      </Card>

      <Card className="p-4 sm:p-6 border-2 sm:border-4 border-black bg-[#E5DEFF] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">CONTRACT</h3>
        <p className="text-sm">RENOUNCED</p>
      </Card>
    </div>
  );
};

export default TokenInfo;