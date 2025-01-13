import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PfpGenerator } from '@/components/PfpGenerator';
import TokenInfo from '@/components/TokenInfo';
import HowToBuy from '@/components/HowToBuy';
import MemeNotes from '@/components/MemeNotes';
import TrakrHistory from '@/components/TrakrHistory';
import TrakrBackground from '@/components/TrakrBackground';

const Index = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-[#E5DED3] relative overflow-hidden p-2 sm:p-4 border-2 sm:border-4 border-black">
      <MemeNotes />
      
      {/* Scrolling Banner */}
      <div className="w-full overflow-hidden bg-black py-2 border-y-2 border-black">
        <div className="animate-scroll whitespace-nowrap inline-block">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-white text-2xl sm:text-4xl font-bold px-4">$TRAKR</span>
          ))}
        </div>
      </div>

      {/* Browser Frame */}
      <div className="max-w-6xl mx-auto bg-white rounded-t-lg shadow-2xl border-2 sm:border-4 border-black">
        <div className="bg-gray-200 p-2 sm:p-3 rounded-t-lg border-b-2 sm:border-b-4 border-black flex items-center gap-2">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-2 sm:mx-4">
            <div className="bg-white rounded-md p-1 text-center text-xs sm:text-base border-2 border-black">
              trakrthedog.xyz
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#E5DED3] p-4 sm:p-8 min-h-[calc(100vh-4rem)] rounded-b-lg border-t-2 sm:border-t-4 border-black relative">
          <div className="fixed top-2 sm:top-4 right-2 sm:right-4 flex gap-2 sm:gap-4 z-50">
            <button 
              className="bg-white p-2 sm:p-3 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
            >
              <img 
                src="/lovable-uploads/dffee0b9-4010-4246-b01b-aa9d9d0649db.png" 
                alt="Twitter" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>
            <button 
              className="bg-white p-2 sm:p-3 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
            >
              <img 
                src="/lovable-uploads/58335b9a-c0a5-48e8-b516-701dec326399.png" 
                alt="Telegram" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>
          </div>

          {/* Header Section */}
          <div className="max-w-5xl mx-auto relative z-20">
            <div className="bg-white bg-opacity-20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 sm:border-4 border-black">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <img 
                  src="/lovable-uploads/5d4fa89e-9355-435b-be11-ef9723480b92.png" 
                  alt="trakr" 
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 sm:border-4 border-black subtle-float object-cover"
                />
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-black" 
                    style={{ letterSpacing: '4px' }}>
                  TRAKR
                </h1>
              </div>
            </div>
          </div>

          {/* Token Info Grid */}
          <TokenInfo />

          {/* Buy Button */}
          <div className="relative z-20 my-8 sm:my-12">
            <button 
              className="w-full max-w-md mx-auto block bg-green-500 hover:bg-green-600 text-white text-xl sm:text-4xl font-bold py-3 sm:py-6 px-4 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 border-2 sm:border-4 border-black transform hover:translate-y-[-8px] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              BUY $TRAKR
            </button>
          </div>

          {/* Trakr History Section */}
          <TrakrHistory />

          {/* Trakr Background Section */}
          <TrakrBackground />

          <div className="mt-8 sm:mt-16">
            <PfpGenerator />
          </div>

          {/* How to Buy Guide */}
          <HowToBuy />

          <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full pb-4 sm:pb-8 bg-transparent z-[9999] pointer-events-none">
            <div className="flex gap-3 sm:gap-6 pointer-events-auto">
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-white p-2 sm:p-4 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <img 
                  src="/lovable-uploads/fc2c072a-eda6-4bfb-bd3d-14a4f4eb89d4.png" 
                  alt="Frog"
                  className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                />
              </button>
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-white p-2 sm:p-4 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <img 
                  src="/lovable-uploads/218273dc-1c20-42fc-9bf8-4d600da8c768.png" 
                  alt="M Logo"
                  className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                />
              </button>
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-white p-2 sm:p-4 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <img 
                  src="/lovable-uploads/f3e0bce5-5786-4b5e-a551-8054d3dbf181.png" 
                  alt="Blue Logo"
                  className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                />
              </button>
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-white p-2 sm:p-4 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <img 
                  src="/lovable-uploads/e626dc6c-506b-4b4b-89e8-3c325ec8e314.png" 
                  alt="Owl"
                  className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Coming Soon Dialog */}
          <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
            <DialogContent className="bg-white border-2 sm:border-4 border-black rounded-xl sm:rounded-2xl max-w-[90vw] sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-black text-center">
                  We are not updated yet.. stay tuned! 🚀
                </DialogTitle>
              </DialogHeader>
              <div className="p-4 sm:p-6">
                <p className="text-lg sm:text-xl text-center text-black">
                  More exciting features are coming soon to enhance your experience!
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Index;
