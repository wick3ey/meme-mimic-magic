import { useEffect, useState } from 'react';

const MemeNotes = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      position: { top: "15%", left: "5%" }
    },
    {
      text: "I take the red pill",
      color: "bg-[#FFDEE2]",
      rotation: "rotate-2",
      animation: "animate-float",
      delay: "delay-[200ms]",
      position: { top: "35%", right: "8%" }
    },
    {
      text: "Duffy is degenerate af",
      color: "bg-[#D3E4FD]",
      rotation: "-rotate-2",
      animation: "animate-float",
      delay: "delay-[400ms]",
      position: { bottom: "25%", left: "12%" }
    },
    {
      text: "That's the cutest thing",
      color: "bg-[#FDE1D3]",
      rotation: "rotate-1",
      animation: "animate-float",
      delay: "delay-[600ms]",
      position: { bottom: "40%", right: "15%" }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`
            absolute transform transition-all duration-1000
            ${note.color} ${note.rotation} ${note.animation} ${note.delay}
            p-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]
            border-2 border-black
            opacity-0 ${isVisible ? 'opacity-100' : ''}
            text-black font-bold text-lg
            hover:scale-110 transition-transform cursor-default
          `}
          style={{
            ...note.position,
            zIndex: 10,
            maxWidth: '200px',
            transform: `${note.rotation} translateY(${index * 5}px)`,
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
          }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default MemeNotes;