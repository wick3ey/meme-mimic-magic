const TokenInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 stagger-fade-in">
      <div className="bg-white bg-opacity-20 border-4 border-black p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center fade-in-up" 
            style={{ letterSpacing: '2px' }}>
          TOKEN ADDRESS
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-center text-white">
          xxx
        </p>
      </div>

      <div className="bg-white bg-opacity-20 border-4 border-black p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center fade-in-up" 
            style={{ letterSpacing: '2px' }}>
          TOKEN SUPPLY
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-center text-white">
          1 BILLION
        </p>
      </div>

      <div className="bg-white bg-opacity-20 border-4 border-black p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center fade-in-up" 
            style={{ letterSpacing: '2px' }}>
          LIQUIDITY
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-center text-white">
          LOCKED
        </p>
      </div>

      <div className="bg-white bg-opacity-20 border-4 border-black p-8 rounded-2xl transform hover:translate-y-[-8px] transition-all duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center fade-in-up" 
            style={{ letterSpacing: '2px' }}>
          CONTRACT
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-center text-white">
          REVOKED
        </p>
      </div>
    </div>
  );
};

export default TokenInfo;