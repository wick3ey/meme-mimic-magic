import { useState } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const WhaleWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const walletAddress = "14ax4jeSv53KTHAw4oHA2CvWFrQ7ntjoSn2F2g2FEZoG";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-4 py-2 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300 font-bold text-black"
      >
        🐋 WHALES donate
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-white p-4 rounded-xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] min-w-[280px] sm:min-w-[320px]">
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg cursor-pointer" onClick={handleCopy}>
            <p className="text-sm font-medium text-gray-800 break-all flex-1">{walletAddress}</p>
            <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhaleWidget;