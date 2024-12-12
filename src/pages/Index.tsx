import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3] to-[#FEC6A1] relative overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl mt-8 p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform-none">
        <div className="flex space-x-2 absolute left-4">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
        </div>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/lovable-uploads/67a6faaf-2575-4041-b82d-5011400a44af.png" 
              alt="Peachcat" 
              className="w-16 h-16 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <h1 className="text-4xl font-bold text-[#F97316]" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1.5px black',
                }}>
              PEACHCAT
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-8 relative">
        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-4 border-black p-6 rounded-xl transform-none hover:translate-y-[-4px] transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-3xl font-bold mb-2 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1px black',
                }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-4xl font-bold text-center text-[#F97316]" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1px black'
               }}>
              1,000,000,000
            </p>
          </Card>

          <Card className="bg-white border-4 border-black p-6 rounded-xl transform-none hover:translate-y-[-4px] transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-3xl font-bold mb-2 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1px black',
                }}>
              TOKEN ADDRESS
            </h2>
            <p className="text-xl font-bold text-center break-all text-[#F97316]" 
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
          className="w-full max-w-md mx-auto block bg-[#F97316] text-white text-4xl font-bold py-6 px-8 rounded-xl mb-12 hover:bg-[#EA580C] transition-all duration-300 border-4 border-black transform-none hover:translate-y-[-4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
          style={{ 
            fontFamily: 'Comic Sans MS, cursive',
            WebkitTextStroke: '1px black',
          }}>
          BUY $PEACHCAT
        </button>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto bg-white border-4 border-black rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xl text-center" 
             style={{ 
               fontFamily: 'Comic Sans MS, cursive',
               color: '#1A1F2C',
               lineHeight: '1.6'
             }}>
            $PEACHCAT is a meme coin with no intrinsic value or financial expectations. 
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 top-1/4 transform -translate-y-1/2">
          <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-12deg]">
            <p className="text-xl text-[#F97316]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              🍑 Peach Power! 
            </p>
          </div>
        </div>

        <div className="absolute right-4 top-3/4 transform -translate-y-1/2">
          <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[12deg]">
            <p className="text-xl text-[#F97316]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              😺 Meow to the Moon!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8">
        <p className="text-lg text-[#1A1F2C]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          ©2024 Peachcat. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;