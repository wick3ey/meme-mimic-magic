import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFD700] relative overflow-hidden" style={{
      backgroundImage: "radial-gradient(circle at 10% 20%, rgba(0,0,0,0.05) 5%, transparent 5%)",
      backgroundSize: "30px 30px"
    }}>
      {/* Browser-style header */}
      <div className="max-w-4xl mx-auto bg-[#FFF8DC] rounded-lg mt-4 p-2 border-4 border-black flex items-center relative"
           style={{
             boxShadow: "8px 8px 0px #000",
             transform: "rotate(-0.5deg)"
           }}>
        <div className="flex space-x-2 absolute left-4">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold" 
              style={{ 
                fontFamily: 'Comic Sans MS, cursive',
                color: '#4169E1',
                WebkitTextStroke: '2px black',
                textShadow: '4px 4px 0px #000'
              }}>
            Timmi.com
          </h1>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-4xl mx-auto bg-[#FFD700] p-8 relative">
        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-4 border-black p-6 rounded-xl transform hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: "8px 8px 0px #000",
                  transform: "rotate(-1deg)"
                }}>
            <h2 className="text-[#4169E1] text-3xl font-bold mb-2 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '2px black',
                  textShadow: '4px 4px 0px #000'
                }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-4xl font-bold text-center" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1px black'
               }}>
              1,000,000,000
            </p>
          </Card>

          <Card className="bg-white border-4 border-black p-6 rounded-xl transform hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: "8px 8px 0px #000",
                  transform: "rotate(1deg)"
                }}>
            <h2 className="text-[#4169E1] text-3xl font-bold mb-2 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '2px black',
                  textShadow: '4px 4px 0px #000'
                }}>
              TOKEN ADDRESS
            </h2>
            <p className="text-xl font-bold text-center break-all" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1px black'
               }}>
              BXXMD....8TMYS
            </p>
          </Card>
        </div>

        {/* Buy button */}
        <button 
          className="w-full max-w-md mx-auto block bg-[#4169E1] text-white text-4xl font-bold py-6 px-8 rounded-xl mb-12 hover:bg-[#3158D3] transition-all duration-300 border-4 border-black transform hover:scale-105 hover:rotate-1" 
          style={{ 
            fontFamily: 'Comic Sans MS, cursive',
            WebkitTextStroke: '2px white',
            textShadow: '4px 4px 0px #000',
            boxShadow: '8px 8px 0px #000'
          }}>
          BUY TIMMI
        </button>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-xl" 
             style={{ 
               fontFamily: 'Comic Sans MS, cursive',
               color: '#000',
               lineHeight: '1.6'
             }}>
            Crafted purely for fun, $TIMMI doesn't come with any real value or financial guarantees. With no formal team or plan, this coin is just a playful addition to the crypto scene. Trade at your own risk. Join in the fun and jump into the world of $Timmi!
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            ©2024 Timmi All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-4 top-1/4 transform -translate-y-1/2 -rotate-12">
        <div className="bg-white border-4 border-black p-4 rounded-xl"
             style={{ boxShadow: "6px 6px 0px #000" }}>
          <p className="text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            "I choose RICH"
          </p>
        </div>
      </div>

      <div className="absolute right-4 top-3/4 transform -translate-y-1/2 rotate-12">
        <div className="bg-white border-4 border-black p-4 rounded-xl"
             style={{ boxShadow: "6px 6px 0px #000" }}>
          <p className="text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            I Took the RED PILL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;