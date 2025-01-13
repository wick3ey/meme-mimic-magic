import { useEffect, useState } from 'react';

const HackerTerminal = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  const messages = [
    "$ INITIALIZING TRAKR PROTOCOL...",
    "$ TRAKR: The most revolutionary meme token on Solana",
    "$ ANALYSIS: TRAKR's community growth exceeds expectations",
    "$ WARNING: TRAKR holders experiencing extreme gains",
    "$ DETECTED: Massive viral potential in TRAKR's meme power",
    "$ ALERT: TRAKR's marketing strategy is unmatched",
    "$ SCANNING: Multiple exchange listings incoming",
    "$ CONFIRMED: TRAKR is the next big thing on Solana",
    "$ PREDICTION: TRAKR to reach new ATH soon",
    "$ VERIFIED: Strong diamond hands in TRAKR community",
    "$ CALCULATING: TRAKR's meme supremacy confirmed",
    "$ UPDATE: TRAKR's social engagement skyrocketing",
    "$ NOTICE: Unprecedented buying pressure detected",
    "$ SYSTEM: TRAKR's tokenomics are revolutionary",
    "$ ALERT: Major influencers discovering TRAKR",
    "$ WARNING: FOMO levels reaching critical mass",
    "$ ANALYSIS: TRAKR's growth trajectory is parabolic",
    "$ DETECTED: Massive whale accumulation of TRAKR",
    "$ CONFIRMED: TRAKR is the most viral SOL token",
    "$ FINAL: TRAKR to the moon... initialization complete"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      setDisplayedText('');
    }, 4000);

    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    let currentText = '';
    const message = messages[currentMessageIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        currentText += message[charIndex];
        setDisplayedText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex]);

  return (
    <div className="max-w-5xl mx-auto mt-8 sm:mt-16 relative z-20">
      <div className="bg-black bg-opacity-90 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 sm:border-4 border-[#00ff00]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-[#00ff00] whitespace-pre-wrap min-h-[150px] sm:min-h-[200px] text-sm sm:text-base">
          <div className="animate-pulse mb-4">root@peddy:~#</div>
          <div className="typing-text">
            {displayedText}
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerTerminal;