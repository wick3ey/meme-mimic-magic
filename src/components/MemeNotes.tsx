import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MemeNotes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const notes = [
    {
      text: "I choose rich",
      color: "bg-[#FEF7CD]",
      rotation: "-rotate-3",
      animation: "animate-float",
      delay: "delay-[0ms]",
      position: isMobile ? 
        { top: "15%", left: "5%" } : 
        { top: "20%", left: "10%" }
    },
    {
      text: "I take the red pill",
      color: "bg-[#FFDEE2]",
      rotation: "rotate-2",
      animation: "animate-float",
      delay: "delay-[200ms]",
      position: isMobile ? 
        { top: "35%", right: "5%" } : 
        { top: "30%", right: "15%" }
    },
    {
      text: "Duffy is degenerate af",
      color: "bg-[#D3E4FD]",
      rotation: "-rotate-2",
      animation: "animate-float",
      delay: "delay-[400ms]",
      position: isMobile ? 
        { bottom: "45%", left: "8%" } : 
        { bottom: "35%", left: "18%" }
    },
    {
      text: "That's the cutest thing",
      color: "bg-[#FDE1D3]",
      rotation: "rotate-1",
      animation: "animate-float",
      delay: "delay-[600ms]",
      position: isMobile ? 
        { bottom: "25%", right: "10%" } : 
        { bottom: "45%", right: "20%" }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`
            absolute transform transition-all duration-1000
            ${note.color} ${note.rotation} ${note.animation} ${note.delay}
            p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.25)]
            border-4 border-black
            opacity-0 ${isVisible ? 'opacity-100' : ''}
            text-black font-bold
            hover:scale-110 transition-transform cursor-default
            backdrop-blur-sm bg-opacity-90
            ${isMobile ? 'text-base max-w-[180px]' : 'text-xl max-w-[250px]'}
          `}
          style={{
            ...note.position,
            zIndex: 100 + index,
            transform: `${note.rotation} translateY(${index * 5}px)`,
            boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default MemeNotes;