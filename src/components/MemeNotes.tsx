import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MemeNotes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const howToBuySection = Array.from(document.querySelectorAll('h2'))
        .find(h2 => h2.textContent?.includes('HOW TO BUY'));
      const tokenInfoSection = document.querySelector('[data-section="token-info"]');
      
      if (howToBuySection && tokenInfoSection) {
        const howToBuyPosition = howToBuySection.getBoundingClientRect().top + window.scrollY;
        const tokenInfoPosition = tokenInfoSection.getBoundingClientRect().top + window.scrollY;
        
        // Only show notes when we're between the token info section and how to buy section
        setIsVisible(scrollPosition > tokenInfoPosition + 200 && scrollPosition < howToBuyPosition - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const notes = [
    {
      text: "I choose rich 💰",
      color: "bg-[#FEF7CD]",
      rotation: "-rotate-3",
      animation: "animate-float",
      delay: "delay-[0ms]",
      position: isMobile ? 
        { top: "15%", left: "5%", transform: "translateZ(0)" } : 
        { top: "20%", left: "5%", transform: "translateZ(0)" }
    },
    {
      text: "I take the red pill 💊",
      color: "bg-[#FFDEE2]",
      rotation: "rotate-2",
      animation: "animate-float",
      delay: "delay-[200ms]",
      position: isMobile ? 
        { top: "35%", right: "5%", transform: "translateZ(0)" } : 
        { top: "30%", right: "10%", transform: "translateZ(0)" }
    },
    {
      text: "lou is degenerate af 🦦",
      color: "bg-[#D3E4FD]",
      rotation: "-rotate-2",
      animation: "animate-float",
      delay: "delay-[400ms]",
      position: isMobile ? 
        { top: "55%", left: "8%", transform: "translateZ(0)" } : 
        { top: "50%", left: "15%", transform: "translateZ(0)" }
    },
    {
      text: "That's the cutest thing 🥰",
      color: "bg-[#FDE1D3]",
      rotation: "rotate-1",
      animation: "animate-float",
      delay: "delay-[600ms]",
      position: isMobile ? 
        { top: "75%", right: "10%", transform: "translateZ(0)" } : 
        { top: "70%", right: "20%", transform: "translateZ(0)" }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`
            absolute transform transition-all duration-700
            ${note.color} ${note.rotation} ${note.animation} ${note.delay}
            p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.25)]
            border-4 border-black
            opacity-0 
            ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-20'}
            text-black font-bold
            hover:scale-110 hover:z-[200] 
            transition-all duration-300 ease-in-out
            cursor-pointer pointer-events-auto
            backdrop-blur-sm bg-opacity-90
            ${activeNote === index ? 'scale-110 z-[200]' : ''}
            ${isMobile ? 'text-base max-w-[180px]' : 'text-xl max-w-[250px]'}
          `}
          style={{
            ...note.position,
            zIndex: activeNote === index ? 200 : 100 + index,
            boxShadow: activeNote === index 
              ? '12px 12px 0px rgba(0, 0, 0, 0.3)' 
              : '8px 8px 0px rgba(0, 0, 0, 0.25)',
          }}
          onClick={() => setActiveNote(activeNote === index ? null : index)}
          onMouseEnter={() => setActiveNote(index)}
          onMouseLeave={() => setActiveNote(null)}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default MemeNotes;