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
      delay: "delay-[0ms]"
    },
    {
      text: "I take the red pill",
      color: "bg-[#FFDEE2]",
      rotation: "rotate-2",
      animation: "animate-float",
      delay: "delay-[200ms]"
    },
    {
      text: "Duffy is degenerate af",
      color: "bg-[#D3E4FD]",
      rotation: "-rotate-2",
      animation: "animate-float",
      delay: "delay-[400ms]"
    },
    {
      text: "That's the cutest thing",
      color: "bg-[#FDE1D3]",
      rotation: "rotate-1",
      animation: "animate-float",
      delay: "delay-[600ms]"
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`
            absolute transform transition-all duration-1000
            ${note.color} ${note.rotation} ${note.animation} ${note.delay}
            p-4 rounded-lg shadow-lg border-2 border-black
            opacity-0 ${isVisible ? 'opacity-100' : ''}
            text-black font-bold text-lg
          `}
          style={{
            top: `${15 + (index * 5)}%`,
            left: `${5 + (index * 2)}%`,
            zIndex: 10,
            maxWidth: '200px',
            transform: `${note.rotation} translateY(${index * 10}px)`,
          }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default MemeNotes;