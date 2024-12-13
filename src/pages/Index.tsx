import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { PfpGenerator } from '@/components/PfpGenerator';
import { CreditCard } from 'lucide-react';

const Index = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-[#FF7F7F] relative overflow-hidden p-4">
      {/* Browser Frame */}
      <div className="max-w-6xl mx-auto bg-white rounded-t-lg shadow-2xl border-2 border-black">
        {/* Browser Top Bar */}
        <div className="bg-gray-200 p-2 rounded-t-lg border-b-2 border-black flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md p-1 text-center border border-gray-300">
              grokmas.xyz
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#FF7F7F] p-8 min-h-[calc(100vh-4rem)] rounded-b-lg border-t-0">
          {/* Social Media Links */}
          <div className="fixed top-4 right-4 flex gap-4 z-50">
            <a 
              href="https://x.com/groksmas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
            >
              <img 
                src="/lovable-uploads/dffee0b9-4010-4246-b01b-aa9d9d0649db.png" 
                alt="Twitter" 
                className="w-8 h-8"
              />
            </a>
            <a 
              href="https://t.me/grokmass" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
            >
              <img 
                src="/lovable-uploads/58335b9a-c0a5-48e8-b516-701dec326399.png" 
                alt="Telegram" 
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Header Section */}
          <div className="max-w-5xl mx-auto relative z-20">
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <img 
                  src="/lovable-uploads/bf8c79ad-3850-422a-9eda-06b475f8bad3.png" 
                  alt="Grokmas" 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] animate-bounce-slow"
                />
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight animate-float text-white" 
                    style={{ 
                      textShadow: '6px 6px 0px rgba(0, 0, 0, 0.4)',
                      letterSpacing: '4px'
                    }}>
                  GROKMAS
                </h1>
              </div>
            </div>
          </div>

          {/* Token Address */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mt-8">
            <div className="bg-white bg-opacity-20 border-4 border-black p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center animate-float text-white" 
                  style={{ 
                    textShadow: '6px 6px 0px rgba(0, 0, 0, 0.4)',
                    letterSpacing: '2px'
                  }}>
                TOKEN ADDRESS
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-center text-white" 
                 style={{ 
                   textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                 }}>
                xxx
              </p>
            </div>
          </div>

          {/* Buy Button */}
          <div className="relative z-20 my-12">
            <a 
              href="https://pump.fun/coin/2jqmPF7p4TjAfVwHoxxgNzTGW89VBT3GN3vTDG2zpump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md mx-auto block bg-white text-black text-3xl sm:text-4xl font-bold py-6 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 border-4 border-black transform hover:translate-y-[-8px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow" 
              style={{ 
                textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
              }}>
              BUY $GMAS
            </a>
          </div>

          {/* PFP Generator Section */}
          <div className="mt-16">
            <PfpGenerator />
          </div>

          {/* How to Buy Guide */}
          <div className="max-w-4xl mx-auto mt-16 bg-[#1A1F2C] rounded-2xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
            <h2 className="text-4xl font-bold mb-8 text-center text-white"
                style={{ 
                  textShadow: 'none',
                  letterSpacing: '2px'
                }}>
              HOW TO BUY $GMAS
            </h2>
            
            <div className="space-y-8">
              <div className="bg-[#222222] rounded-xl p-6 border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white" style={{ textShadow: 'none' }}>
                    Step 1: Get SOL from a CEX
                  </h3>
                </div>
                <p className="text-lg text-white">
                  Purchase SOL from your preferred exchange (Binance, Coinbase, etc.). Make sure to buy enough to cover your desired $GMAS purchase plus transaction fees.
                </p>
              </div>

              <div className="bg-[#222222] rounded-xl p-6 border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/lovable-uploads/d44fc485-8fb1-4420-b06c-1371e06d90a7.png" 
                    alt="Phantom" 
                    className="w-8 h-8"
                  />
                  <h3 className="text-2xl font-bold text-white" style={{ textShadow: 'none' }}>
                    Step 2: Transfer to Phantom
                  </h3>
                </div>
                <p className="text-lg text-white">
                  Download Phantom Wallet, create an account, and copy your wallet address. Withdraw your SOL from the exchange to your Phantom wallet address.
                </p>
              </div>

              <div className="bg-[#222222] rounded-xl p-6 border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/lovable-uploads/7f7adf79-509e-4fb7-9a8c-1a577975196e.png" 
                    alt="Grokmas" 
                    className="w-8 h-8"
                  />
                  <h3 className="text-2xl font-bold text-white" style={{ textShadow: 'none' }}>
                    Step 3: Swap for $GMAS
                  </h3>
                </div>
                <p className="text-lg text-white">
                  Open Phantom app, tap the swap feature, and either search for "$GMAS" or paste the token address. Enter the amount of SOL you want to swap, review the transaction, and confirm!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-black text-center">
              Coming Soon! 🚀
            </DialogTitle>
          </DialogHeader>
          <p className="text-xl text-center text-black">
            Stay tuned! Our social channels are launching soon.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;