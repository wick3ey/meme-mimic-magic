import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFD700] relative overflow-hidden">
      {/* Browser-style header */}
      <div className="max-w-4xl mx-auto bg-[#FFF8DC] rounded-t-lg mt-4 p-2 border-2 border-black flex items-center">
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Timmi.com</h1>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-4xl mx-auto bg-[#FFD700] p-8 border-x-2 border-b-2 border-black">
        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white border-2 border-black p-4 rounded-lg">
            <h2 className="text-[#4169E1] text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              TOTAL SUPPLY
            </h2>
            <p className="text-3xl font-bold text-center">1,000,000,000</p>
          </Card>

          <Card className="bg-white border-2 border-black p-4 rounded-lg">
            <h2 className="text-[#4169E1] text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              TOKEN ADDRESS
            </h2>
            <p className="text-xl font-bold text-center">BXXMD.....8TMYS</p>
          </Card>
        </div>

        {/* Buy button */}
        <button className="w-full max-w-md mx-auto block bg-[#4169E1] text-white text-3xl font-bold py-4 px-8 rounded-lg mb-8 hover:bg-[#3158D3] transition-colors border-2 border-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          BUY TIMMI
        </button>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
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
      <div className="absolute left-4 top-1/4 transform -translate-y-1/2">
        <div className="bg-white border-2 border-black p-2 rounded rotate-[-5deg]">
          <p className="text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            "I choose RICH"
          </p>
        </div>
      </div>

      <div className="absolute right-4 top-3/4 transform -translate-y-1/2">
        <div className="bg-white border-2 border-black p-2 rounded rotate-[5deg]">
          <p className="text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            I Took the RED PILL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;