import { useState } from 'react';
import { Twitter, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { PfpGenerator } from '@/components/PfpGenerator';

const Index = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const fullAddress = "2jqmPF7p4TjAfVwHoxxgNzTGW89VBT3GN3vTDG2zpump";
  const displayAddress = `${fullAddress.slice(0, 4)}...${fullAddress.slice(-4)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    toast.success("Token address copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative overflow-hidden p-4">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-[#222222] rounded-2xl mt-8 p-6 sm:p-8 border-4 border-[#403E43] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <img 
              src="/lovable-uploads/f57b3600-380e-4999-8a73-c2fb9b3d9138.png" 
              alt="Grokmas" 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#403E43] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow"
            />
            <h1 className="text-5xl sm:text-7xl font-bold text-[#8B5CF6] tracking-tight animate-float" 
                style={{ 
                  WebkitTextStroke: '3px black',
                  textShadow: '6px 6px 0px rgba(0,0,0,0.2)',
                }}>
              GROKMAS
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-4 sm:p-8 mt-8 relative z-20">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-[#222222] border-4 border-[#403E43] p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-3xl sm:text-4xl font-bold mb-4 text-center animate-float" 
                style={{ 
                  WebkitTextStroke: '2px black',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-center text-[#8B5CF6]" 
               style={{ 
                 WebkitTextStroke: '2px black',
                 textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
               }}>
              1,000,000,000
            </p>
          </div>

          <div className="bg-[#222222] border-4 border-[#403E43] p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-3xl sm:text-4xl font-bold mb-4 text-center animate-float" 
                style={{ 
                  WebkitTextStroke: '2px black',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                }}>
              TOKEN ADDRESS
            </h2>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl sm:text-2xl font-bold text-center text-[#8B5CF6] cursor-pointer" 
                 onClick={handleCopyAddress}
                 style={{ 
                   WebkitTextStroke: '1px black',
                   textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                 }}>
                {displayAddress}
              </p>
              <button 
                onClick={handleCopyAddress}
                className="bg-[#8B5CF6] text-white px-4 py-2 rounded-lg hover:bg-[#7C3AED] transition-colors text-sm font-bold border-2 border-[#403E43] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Buy Button */}
        <div className="relative z-20 mb-12">
          <a 
            href="https://pump.fun/coin/2jqmPF7p4TjAfVwHoxxgNzTGW89VBT3GN3vTDG2zpump"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md mx-auto block bg-[#8B5CF6] text-white text-3xl sm:text-4xl font-bold py-6 px-8 rounded-2xl hover:bg-[#7C3AED] transition-all duration-300 border-4 border-[#403E43] transform hover:translate-y-[-8px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow" 
            style={{ 
              WebkitTextStroke: '2px black',
              textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
            }}>
            BUY $GMAS
          </a>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto relative z-20">
          <div className="bg-[#222222] border-4 border-[#403E43] rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300">
            <p className="text-xl sm:text-2xl text-center text-[#8B5CF6]" 
               style={{ 
                 lineHeight: '1.6',
                 textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
               }}>
              $GROKMAS is fully community-driven and thrives on good vibes and memes. There's no team, no roadmap—just a group of people having fun together. Remember, it's not financial advice; it's just pure entertainment and chaos in coin form!
            </p>
          </div>
        </div>

        {/* PFP Generator Section */}
        <div className="mt-16">
          <PfpGenerator />
        </div>

        {/* Social Links */}
        <div className="fixed bottom-8 right-8 z-30 flex gap-4">
          <a 
            href="https://x.com/peachcatso"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#222222] p-3 rounded-full border-4 border-[#403E43] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300"
          >
            <Twitter className="w-8 h-8 text-[#8B5CF6]" />
          </a>
          <a 
            href="https://t.me/peachcatso"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#222222] p-3 rounded-full border-4 border-[#403E43] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8 text-[#8B5CF6]" />
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="fixed left-8 top-[30%] z-10 hidden lg:block">
          <div className="bg-[#222222] border-4 border-[#403E43] p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-12deg] animate-bounce-slow">
            <p className="text-2xl text-[#8B5CF6] font-bold">
              🎅 Grok Power! 
            </p>
          </div>
        </div>

        <div className="fixed right-8 top-[70%] z-10 hidden lg:block">
          <div className="bg-[#222222] border-4 border-[#403E43] p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[12deg] animate-float">
            <p className="text-2xl text-[#8B5CF6] font-bold">
              🎄 Grok to the Moon!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 relative z-20">
        <p className="text-xl text-[#8B5CF6] font-bold">
          ©2024 Grokmas. All Rights Reserved.
        </p>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="bg-[#222222] border-4 border-[#403E43] rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-[#8B5CF6] text-center">
              Coming Soon! 🚀
            </DialogTitle>
          </DialogHeader>
          <p className="text-xl text-center text-[#8B5CF6]">
            Stay tuned! Our social channels are launching soon.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;