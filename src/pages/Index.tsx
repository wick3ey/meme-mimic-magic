import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PfpGenerator } from '@/components/PfpGenerator';
import TokenInfo from '@/components/TokenInfo';
import HowToBuy from '@/components/HowToBuy';
import MemeNotes from '@/components/MemeNotes';

const Index = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-[#ffbd59] relative overflow-hidden p-4 border-4 border-black">
      <MemeNotes />
      {/* Browser Frame */}
      <div className="max-w-6xl mx-auto bg-white rounded-t-lg shadow-2xl border-4 border-black">
        {/* Browser Top Bar */}
        <div className="bg-gray-200 p-2 rounded-t-lg border-b-4 border-black flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md p-1 text-center border-2 border-black">
              duffy.xyz
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#ffbd59] p-8 min-h-[calc(100vh-4rem)] rounded-b-lg border-t-4 border-black relative">
          <div className="fixed top-4 right-4 flex gap-4 z-50">
            <a 
              href="#" 
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
              href="#" 
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
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 border-4 border-black">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <img 
                  src="/lovable-uploads/f037e1a9-0059-4f84-9a1e-d4983e1fda16.png" 
                  alt="Duffy" 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black subtle-float"
                />
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight" 
                    style={{ letterSpacing: '4px' }}>
                  DUFFY
                </h1>
              </div>
            </div>
          </div>

          {/* Token Info Grid */}
          <TokenInfo />

          {/* Buy Button */}
          <div className="relative z-20 my-12">
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md mx-auto block bg-green-500 hover:bg-green-600 text-white text-3xl sm:text-4xl font-bold py-6 px-8 rounded-2xl transition-all duration-300 border-4 border-black transform hover:translate-y-[-8px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              BUY $DUFFY
            </a>
          </div>

          {/* PFP Generator Section */}
          <div className="mt-16">
            <PfpGenerator />
          </div>

          {/* How to Buy Guide */}
          <HowToBuy />
        </div>
      </div>

      {/* Bottom Icons - Now positioned absolute relative to the viewport */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 z-[100]">
        {[
          { src: "/lovable-uploads/fc2c072a-eda6-4bfb-bd3d-14a4f4eb89d4.png", alt: "Frog" },
          { src: "/lovable-uploads/218273dc-1c20-42fc-9bf8-4d600da8c768.png", alt: "M Logo" },
          { src: "/lovable-uploads/f3e0bce5-5786-4b5e-a551-8054d3dbf181.png", alt: "Blue Logo" },
          { src: "/lovable-uploads/e626dc6c-506b-4b4b-89e8-3c325ec8e314.png", alt: "Owl" }
        ].map((icon, index) => (
          <button
            key={index}
            onClick={() => setShowComingSoon(true)}
            className="bg-white p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
          >
            <img 
              src={icon.src} 
              alt={icon.alt}
              className="w-10 h-10 object-contain"
            />
          </button>
        ))}
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="bg-white border-4 border-black rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-black text-center">
              We are not updated yet.. stay tuned! 🚀
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <p className="text-xl text-center text-black">
              More exciting features are coming soon to enhance your experience!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;