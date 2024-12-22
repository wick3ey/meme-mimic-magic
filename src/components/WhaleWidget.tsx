import { useState } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const WhaleWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const walletAddress = "14ax4jeSv53KTHAw4oHA2CvWFrQ7ntjoSn2F2g2FEZoG";

  const handleCopy = async (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Prevent event bubbling
    
    try {
      await navigator.clipboard.writeText(walletAddress);
      toast({
        title: "Copied!",
        description: "Wallet address copied to clipboard",
        duration: 2000,
      });
    } catch (err) {
      // Fallback for devices that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = walletAddress;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        toast({
          title: "Copied!",
          description: "Wallet address copied to clipboard",
          duration: 2000,
        });
      } catch (err) {
        toast({
          title: "Error",
          description: "Could not copy address. Please try manually copying.",
          duration: 2000,
        });
      }
      document.body.removeChild(textArea);
    }
  };

  const handleClickOutside = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-4 py-2 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300 font-bold text-black active:transform active:translate-y-0 touch-manipulation select-none"
      >
        🐋 WHALES donate
      </button>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-50 flex items-end sm:items-center justify-center px-4 touch-none"
          onClick={handleClickOutside}
          onTouchEnd={handleClickOutside}
        >
          <div className="bg-white p-4 rounded-xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] min-w-[280px] sm:min-w-[320px] mb-24 sm:mb-0 touch-auto">
            <div 
              className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg cursor-pointer active:bg-gray-200" 
              onClick={handleCopy}
              onTouchEnd={handleCopy}
              role="button"
              tabIndex={0}
            >
              <p className="text-sm font-medium text-gray-800 break-all flex-1 select-all">{walletAddress}</p>
              <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700 flex-shrink-0" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhaleWidget;