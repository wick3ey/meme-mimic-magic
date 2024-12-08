import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFD700] relative overflow-hidden">
      {/* Browser-style header */}
      <div className="max-w-4xl mx-auto bg-[#FFF8DC] rounded-t-lg mt-4 p-2 border-2 border-black flex items-center animate-bounce">
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4169E1] to-[#87CEEB] text-transparent bg-clip-text" 
              style={{ 
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000',
                WebkitTextStroke: '1px black'
              }}>
            Timmi.com
          </h1>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-4xl mx-auto bg-[#FFD700] p-8 border-x-2 border-b-2 border-black">
        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-2 border-black p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-[#4169E1] text-2xl font-bold mb-2 text-center animate-pulse" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000'
                }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-3xl font-bold text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              1,000,000,000
            </p>
          </Card>

          <Card className="bg-white border-2 border-black p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-[#4169E1] text-2xl font-bold mb-2 text-center animate-pulse" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000'
                }}>
              TOKEN ADDRESS
            </h2>
            <p className="text-xl font-bold text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              BXXMD.....8TMYS
            </p>
          </Card>
        </div>

        {/* Buy button */}
        <button 
          className="w-full max-w-md mx-auto block bg-[#4169E1] text-white text-3xl font-bold py-4 px-8 rounded-lg mb-8 hover:bg-[#3158D3] transition-all duration-300 border-4 border-black transform hover:scale-110 hover:rotate-1 animate-bounce" 
          style={{ 
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '2px 2px 0px #000',
            boxShadow: '4px 4px 0px #000'
          }}>
          BUY TIMMI
        </button>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto text-center mb-8 animate-fade-in">
          <p className="text-lg transform hover:scale-105 transition-transform duration-300" 
             style={{ 
               fontFamily: 'Comic Sans MS, cursive',
               textShadow: '1px 1px 0px rgba(0,0,0,0.2)'
             }}>
            Crafted purely for fun, $TIMMI doesn't come with any real value or financial guarantees. With no formal team or plan, this coin is just a playful addition to the crypto scene. Trade at your own risk. Join in the fun and jump into the world of $Timmi!
          </p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            ©2024 Timmi All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-4 top-1/4 transform -translate-y-1/2 animate-pulse">
        <div className="bg-white border-2 border-black p-2 rounded rotate-[-5deg] hover:rotate-[-8deg] transition-transform duration-300"
             style={{ boxShadow: '2px 2px 0px #000' }}>
          <p className="text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            "I choose RICH"
          </p>
        </div>
      </div>

      <div className="absolute right-4 top-3/4 transform -translate-y-1/2 animate-pulse">
        <div className="bg-white border-2 border-black p-2 rounded rotate-[5deg] hover:rotate-[8deg] transition-transform duration-300"
             style={{ boxShadow: '2px 2px 0px #000' }}>
          <p className="text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            I Took the RED PILL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;