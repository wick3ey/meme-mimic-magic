import { CreditCard } from 'lucide-react';

const HowToBuy = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 sm:mt-16 bg-[#1A1F2C] rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 sm:border-4 border-black">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-white"
          style={{ letterSpacing: '2px' }}>
        HOW TO BUY $peddy
      </h2>
      
      <div className="space-y-4 sm:space-y-8">
        <div className="block bg-[#222222] rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 sm:border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <CreditCard className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Step 1: Get SOL from a CEX
            </h3>
          </div>
          <p className="text-sm sm:text-lg text-white">
            Purchase SOL from your preferred exchange (Binance, Coinbase, etc.). Make sure to buy enough to cover your desired $peddy purchase plus transaction fees.
          </p>
        </div>

        <div className="block bg-[#222222] rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 sm:border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <img 
              src="/lovable-uploads/d44fc485-8fb1-4420-b06c-1371e06d90a7.png" 
              alt="Phantom" 
              className="w-5 h-5 sm:w-8 sm:h-8"
            />
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Step 2: Transfer to Phantom
            </h3>
          </div>
          <p className="text-sm sm:text-lg text-white">
            Download Phantom Wallet, create an account, and copy your wallet address. Withdraw your SOL from the exchange to your Phantom wallet address.
          </p>
        </div>

        <div className="bg-[#222222] rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 sm:border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <img 
              src="/lovable-uploads/aa9b430b-4b9e-4a38-9323-cfb7570e92ef.png" 
              alt="peddy" 
              className="w-5 h-5 sm:w-8 sm:h-8 rounded-full"
            />
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Step 3: Swap for $peddy
            </h3>
          </div>
          <p className="text-sm sm:text-lg text-white">
            Open Phantom app, tap the swap feature, and either search for "$peddy" or paste the token address. Enter the amount of SOL you want to swap, review the transaction, and confirm!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;