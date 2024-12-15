import { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const TokenInfo = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const fullAddress = "0x1234567890abcdef1234567890abcdef12345678"; // placeholder address
  
  const displayAddress = `${fullAddress.slice(0, 4)}...${fullAddress.slice(-4)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Token address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 stagger-fade-in">
      <div className="bg-white bg-opacity-20 border-2 sm:border-4 border-black p-4 sm:p-8 rounded-xl sm:rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white"
            style={{ letterSpacing: '2px' }}>
          TOKEN ADDRESS
        </h2>
        <div className="flex items-center justify-center gap-2">
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-center text-white break-all">
            {displayAddress}
          </p>
          <button
            onClick={handleCopy}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Copy token address"
          >
            {copied ? 
              <CheckCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> : 
              <Copy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            }
          </button>
        </div>
      </div>

      <div className="bg-white bg-opacity-20 border-2 sm:border-4 border-black p-4 sm:p-8 rounded-xl sm:rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white"
            style={{ letterSpacing: '2px' }}>
          LIQUIDITY
        </h2>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-center text-white break-words">
          LOCKED
        </p>
      </div>

      <div className="bg-white bg-opacity-20 border-2 sm:border-4 border-black p-4 sm:p-8 rounded-xl sm:rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white"
            style={{ letterSpacing: '2px' }}>
          TOKEN SUPPLY
        </h2>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-center text-white break-words">
          1 BILLION
        </p>
      </div>

      <div className="bg-white bg-opacity-20 border-2 sm:border-4 border-black p-4 sm:p-8 rounded-xl sm:rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white"
            style={{ letterSpacing: '2px' }}>
          CONTRACT
        </h2>
        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-center text-white">
          RENOUNCED
        </p>
      </div>
    </div>
  );
};

export default TokenInfo;