import { CreditCard } from 'lucide-react';

const HowToBuy = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 bg-[#1A1F2C] rounded-2xl p-8 border-4 border-black">
      <h2 className="text-4xl font-bold mb-8 text-center text-white"
          style={{ letterSpacing: '2px' }}>
        HOW TO BUY $GMAS
      </h2>
      
      <div className="space-y-8">
        <a 
          href="https://www.binance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#222222] rounded-xl p-6 border-4 border-black hover:transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <CreditCard className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-bold text-white">
              Step 1: Get SOL from a CEX
            </h3>
          </div>
          <p className="text-lg text-white">
            Purchase SOL from your preferred exchange (Binance, Coinbase, etc.). Make sure to buy enough to cover your desired $GMAS purchase plus transaction fees.
          </p>
        </a>

        <a 
          href="https://phantom.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#222222] rounded-xl p-6 border-4 border-black hover:transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/d44fc485-8fb1-4420-b06c-1371e06d90a7.png" 
              alt="Phantom" 
              className="w-8 h-8"
            />
            <h3 className="text-2xl font-bold text-white">
              Step 2: Transfer to Phantom
            </h3>
          </div>
          <p className="text-lg text-white">
            Download Phantom Wallet, create an account, and copy your wallet address. Withdraw your SOL from the exchange to your Phantom wallet address.
          </p>
        </a>

        <div className="bg-[#222222] rounded-xl p-6 border-4 border-black hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/7f7adf79-509e-4fb7-9a8c-1a577975196e.png" 
              alt="Grokmas" 
              className="w-8 h-8"
            />
            <h3 className="text-2xl font-bold text-white">
              Step 3: Swap for $GMAS
            </h3>
          </div>
          <p className="text-lg text-white">
            Open Phantom app, tap the swap feature, and either search for "$GMAS" or paste the token address. Enter the amount of SOL you want to swap, review the transaction, and confirm!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;