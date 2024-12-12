const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1D3] via-[#FEC6A1] to-[#FFB088] relative overflow-hidden p-4">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-2xl mt-8 p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <img 
              src="/lovable-uploads/67a6faaf-2575-4041-b82d-5011400a44af.png" 
              alt="Peachcat" 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce"
            />
            <h1 className="text-5xl sm:text-6xl font-bold text-[#F97316] tracking-tight" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '2px black',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                }}>
              PEACHCAT
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-4 sm:p-8 mt-8 relative z-20">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-white border-4 border-black p-8 rounded-2xl transform-none hover:translate-y-[-8px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-3xl sm:text-4xl font-bold mb-4 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1.5px black',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
                }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-4xl sm:text-5xl font-bold text-center text-[#F97316]" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1.5px black',
                 textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
               }}>
              1,000,000,000
            </p>
          </div>

          <div className="bg-white border-4 border-black p-8 rounded-2xl transform-none hover:translate-y-[-8px] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[#8B5CF6] text-3xl sm:text-4xl font-bold mb-4 text-center" 
                style={{ 
                  fontFamily: 'Comic Sans MS, cursive',
                  WebkitTextStroke: '1.5px black',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
                }}>
              TOKEN ADDRESS
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-center break-all text-[#F97316]" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 WebkitTextStroke: '1px black',
                 textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
               }}>
              BXXMD....8TMYS
            </p>
          </div>
        </div>

        {/* Buy Button */}
        <div className="relative z-20 mb-12">
          <button 
            className="w-full max-w-md mx-auto block bg-[#F97316] text-white text-3xl sm:text-4xl font-bold py-6 px-8 rounded-2xl hover:bg-[#EA580C] transition-all duration-300 border-4 border-black transform-none hover:translate-y-[-8px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
            style={{ 
              fontFamily: 'Comic Sans MS, cursive',
              WebkitTextStroke: '1.5px black',
              textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            }}>
            BUY $PEACHCAT
          </button>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto relative z-20">
          <div className="bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300">
            <p className="text-xl sm:text-2xl text-center" 
               style={{ 
                 fontFamily: 'Comic Sans MS, cursive',
                 color: '#1A1F2C',
                 lineHeight: '1.6',
                 textShadow: '1px 1px 0px rgba(0,0,0,0.1)',
               }}>
              $PEACHCAT is a meme coin with no intrinsic value or financial expectations. 
              There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block fixed left-8 top-[30%] z-10">
          <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-12deg] animate-bounce">
            <p className="text-2xl text-[#F97316]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              🍑 Peach Power! 
            </p>
          </div>
        </div>

        <div className="hidden lg:block fixed right-8 bottom-[20%] z-10">
          <div className="bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[12deg] animate-float">
            <p className="text-2xl text-[#F97316]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              😺 Meow to the Moon!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 relative z-20">
        <p className="text-xl text-[#1A1F2C]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          ©2024 Peachcat. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;