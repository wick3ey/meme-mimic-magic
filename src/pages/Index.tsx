import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { PfpGenerator } from '@/components/PfpGenerator';

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

        {/* Main Content Area with New Background Color */}
        <div className="bg-[#FF7F7F] p-8 min-h-[calc(100vh-4rem)] rounded-b-lg border-t-0">
          {/* Header Section */}
          <div className="max-w-5xl mx-auto relative z-20">
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <img 
                  src="/lovable-uploads/f57b3600-380e-4999-8a73-c2fb9b3d9138.png" 
                  alt="Grokmas" 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] animate-bounce-slow"
                />
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight animate-float text-white" 
                    style={{ 
                      textShadow: '8px 8px 0px rgba(0,0,0,0.4)',
                      letterSpacing: '4px'
                    }}>
                  GROKMAS
                </h1>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 mt-8">
            <div className="bg-white bg-opacity-20 border-4 border-black p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center animate-float text-white" 
                  style={{ 
                    textShadow: '6px 6px 0px rgba(0,0,0,0.4)',
                    letterSpacing: '2px'
                  }}>
                TOTAL SUPPLY
              </h2>
              <p className="text-4xl sm:text-5xl font-bold text-center text-white" 
                 style={{ 
                   textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                 }}>
                1,000,000,000
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

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto relative z-20">
            <div className="bg-white bg-opacity-20 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-4px] transition-all duration-300">
              <p className="text-xl sm:text-2xl text-center text-black font-bold" 
                 style={{ 
                   lineHeight: '1.6',
                   textShadow: '2px 2px 0px rgba(255,255,255,0.5)',
                 }}>
                $GROKMAS is fully community-driven and thrives on good vibes and memes. There's no team, no roadmap—just a group of people having fun together. Remember, it's not financial advice; it's just pure entertainment and chaos in coin form!
              </p>
            </div>
          </div>

          {/* PFP Generator Section */}
          <div className="mt-16">
            <PfpGenerator />
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