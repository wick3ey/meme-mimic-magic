import { CreditCard } from 'lucide-react';

const HowToBuy = () => {
  return (
    <div className="relative max-w-6xl mx-auto mt-16 mb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[#1A1F2C] rounded-3xl transform -rotate-1"></div>
      <div className="absolute inset-0 bg-black rounded-3xl transform rotate-1"></div>
      
      {/* Main content container */}
      <div className="relative bg-[#1A1F2C] rounded-3xl p-8 sm:p-12 border-4 border-black">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-center text-white"
            style={{ letterSpacing: '2px' }}>
          HOW TO BUY $TRAKR
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-2"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <CreditCard className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Step 1</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Get SOL from CEX</h4>
              <p className="text-gray-300">
                Purchase SOL from your preferred exchange (Binance, Coinbase, etc.). Make sure to buy enough to cover your desired $TRAKR purchase plus transaction fees.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-2"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <img 
                    src="/lovable-uploads/d44fc485-8fb1-4420-b06c-1371e06d90a7.png" 
                    alt="Phantom" 
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">Step 2</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Transfer to Phantom</h4>
              <p className="text-gray-300">
                Download Phantom Wallet, create an account, and copy your wallet address. Withdraw your SOL from the exchange to your Phantom wallet.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-2"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <img 
                    src="/lovable-uploads/6293795d-cc8a-48bf-887b-ef864f87c142.png" 
                    alt="trakr" 
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">Step 3</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Swap for $TRAKR</h4>
              <p className="text-gray-300">
                Open Phantom app, tap the swap feature, and search for "$TRAKR" or paste the token address. Enter the amount of SOL you want to swap and confirm!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;