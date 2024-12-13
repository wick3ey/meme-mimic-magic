import { useState, useRef } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download } from 'lucide-react';

export const PfpGenerator = () => {
  const [position, setPosition] = useState({ x: 50, y: 0 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!containerRef.current) return;

    try {
      const canvas = document.createElement('canvas');
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        toast.error("Unable to create canvas context");
        return;
      }

      const baseImage = new Image();
      baseImage.crossOrigin = "anonymous";
      baseImage.src = "/lovable-uploads/f57b3600-380e-4999-8a73-c2fb9b3d9138.png";
      
      baseImage.onload = () => {
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        
        // Create download link
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'grokmas-pfp.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast.success("Profile picture downloaded!");
      };
    } catch (error) {
      toast.error("Failed to download image");
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6 animate-bounce">
      <div 
        ref={containerRef}
        className="relative w-full aspect-square bg-[#DC2626] bg-opacity-10 rounded-xl overflow-hidden border-4 border-[#DC2626] shadow-[8px_8px_0px_0px_rgba(220,38,38,0.3)] hover:scale-105 transition-transform duration-300"
      >
        <img 
          src="/lovable-uploads/f57b3600-380e-4999-8a73-c2fb9b3d9138.png" 
          alt="Grokmas base" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6 bg-[#DC2626] bg-opacity-10 p-6 rounded-xl border-4 border-[#DC2626] shadow-[8px_8px_0px_0px_rgba(220,38,38,0.3)] hover:scale-105 transition-transform duration-300">
        <Button 
          onClick={handleDownload}
          className="w-full gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white border-4 border-[#1F2937] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300 text-xl font-bold"
        >
          <Download className="w-6 h-6" />
          Download PFP
        </Button>
      </div>
    </div>
  );
};