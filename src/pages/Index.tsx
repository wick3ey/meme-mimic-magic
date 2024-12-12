import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3] to-[#FEC6A1] relative overflow-hidden">
      {/* Header - Adjusted padding and positioning */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-xl mt-8 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform-none">
          <div className="flex items-center justify-center gap-4 relative">
            <img 
              src="/lovable-uploads/67a6faaf-2575-4041-b82d-5011400a44af.png" 
              alt="Peachcat" 
              className="w-16 h-16 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#F97316]" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1.5px black',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
                }}>
              PEACHCAT
            </h1>
          </div>
        </div>
      </div>

      {/* Main content - Improved spacing and responsiveness */}
      <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10">
        {/* Info boxes - Added proper spacing and mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-4 border-black p-6 rounded-xl transform-none hover:translate-y-[-4px] transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-2xl md:text-3xl font-bold mb-2 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1px black',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-center text-[#F97316]" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1px black',
                 textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
               }}>
              1,000,000,000
            </p>
          </Card>

          <Card className="bg-white border-4 border-black p-6 rounded-xl transform-none hover:translate-y-[-4px] transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-2xl md:text-3xl font-bold mb-2 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1px black',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                }}>
              TOKEN ADDRESS
            </h2>
            <p className="text-lg md:text-xl font-bold text-center break-all text-[#F97316]" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1px black',
                 textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
               }}>
              BXXMD....8TMYS
            </p>
          </Card>
        </div>

        {/* Buy button - Improved visibility and responsiveness */}
        <div className="relative z-20 mb-12">
          <button 
            className="w-full max-w-md mx-auto block bg-[#F97316] text-white text-2xl md:text-4xl font-bold py-4 md:py-6 px-8 rounded-xl hover:bg-[#EA580C] transition-all duration-300 border-4 border-black transform-none hover:translate-y-[-4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
            style={{ 
              fontFamily: 'Comic Sans MS, cursive',
              WebkitTextStroke: '1px black',
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            }}>
            BUY $PEACHCAT
          </button>
        </div>

        {/* Disclaimer - Improved readability and spacing */}
        <div className="max-w-2xl mx-auto relative z-20">
          <div className="bg-white border-4 border-black rounded-xl p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg md:text-xl text-center" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 color: '#1A1F2C',
                 lineHeight: '1.6'
               }}>
              $PEACHCAT is a meme coin with no intrinsic value or financial expectations. 
              There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
            </p>
          </div>
        </div>

        {/* Decorative elements - Repositioned to avoid overlap */}
        <div className="hidden md:block absolute left-[-50px] top-[20%] transform -translate-y-1/2 z-0">
          <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-12deg] animate-bounce">
            <p className="text-xl text-[#F97316]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              🍑 Peach Power! 
            </p>
          </div>
        </div>

        <div className="hidden md:block absolute right-[-50px] bottom-[10%] transform -translate-y-1/2 z-0">
          <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[12deg] animate-float">
            <p className="text-xl text-[#F97316]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              😺 Meow to the Moon!
            </p>
          </div>
        </div>
      </div>

      {/* Footer - Added proper spacing */}
      <div className="text-center pb-8 pt-4 relative z-10">
        <p className="text-lg text-[#1A1F2C]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          ©2024 Peachcat. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;