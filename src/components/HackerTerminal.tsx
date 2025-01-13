import { useEffect, useState } from 'react';

const HackerTerminal = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const messages = [
    "$ INITIALIZING TRAKR PROTOCOL...",
    "$ ACCESSING CLASSIFIED FILES...",
    "$ DECRYPTING TRAKR MAINFRAME...",
    "$ ALERT: TRAKR's revolutionary algorithm detected",
    "$ SCANNING: Multiple viral coefficients identified",
    "$ WARNING: Unprecedented meme potential detected",
    "$ ANALYSIS: TRAKR community growth exceeding predictions",
    "$ ACCESSING: Top secret marketing initiatives",
    "$ INTERCEPTED: Major influencer communications",
    "$ ALERT: Massive social engagement detected",
    "$ CALCULATING: Viral trajectory parameters",
    "$ WARNING: Meme power levels critical",
    "$ DETECTED: Multiple exchange integration protocols",
    "$ SCANNING: Community sentiment analysis",
    "$ ALERT: Diamond hand levels exceeding limits",
    "$ PROCESSING: Tokenomics security audit",
    "$ NOTICE: Viral coefficient optimization complete",
    "$ WARNING: FOMO levels reaching critical mass",
    "$ FINAL VERIFICATION: TRAKR supremacy confirmed",
    "$ SYSTEM READY: Initiating launch sequence..."
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
      setDisplayedText('');
    }, 3000);

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
    <div className="h-screen w-full bg-black p-4 sm:p-8 overflow-hidden font-mono">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        <div className="flex-1 overflow-y-auto text-left">
          <div className="space-y-4">
            {messages.slice(0, currentMessageIndex + 1).map((msg, index) => (
              <div 
                key={index} 
                className={`text-[#00ff00] ${index === currentMessageIndex ? 'typing-text' : ''}`}
              >
                {index === currentMessageIndex ? displayedText : msg}
                {index === currentMessageIndex && showCursor && (
                  <span className="animate-pulse">▊</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-[#00ff00] pt-4">
          <div className="text-[#00ff00] animate-pulse">
            System Status: ACTIVE | Security Level: MAXIMUM | Protocol: ENCRYPTED
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerTerminal;