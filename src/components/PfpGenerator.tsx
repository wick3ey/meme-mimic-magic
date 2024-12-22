import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download } from 'lucide-react';

export const PfpGenerator = () => {
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
      baseImage.src = "/lovable-uploads/f037e1a9-0059-4f84-9a1e-d4983e1fda16.png";
      
      baseImage.onload = () => {
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'lou-pfp.png';
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
    <div className="max-w-lg mx-auto p-2 sm:p-4 space-y-4 sm:space-y-6 animate-bounce">
      <div 
        ref={containerRef}
        className="relative w-full aspect-square bg-[#DC2626] bg-opacity-10 rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-[#DC2626] shadow-[4px_4px_0px_0px_rgba(220,38,38,0.3)] hover:scale-105 transition-transform duration-300"
      >
        <img 
          src="/lovable-uploads/cb294248-ea1d-48e6-980d-2b80f1ab9adf.png" 
          alt="lou base" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4 sm:space-y-6 bg-[#DC2626] bg-opacity-10 p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 sm:border-4 border-[#DC2626] shadow-[4px_4px_0px_0px_rgba(220,38,38,0.3)] hover:scale-105 transition-transform duration-300">
        <Button 
          onClick={handleDownload}
          className="w-full gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white border-2 sm:border-4 border-[#1F2937] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300 text-lg sm:text-xl font-bold"
        >
          <Download className="w-5 h-5 sm:w-6 sm:h-6" />
          Download PFP
        </Button>
      </div>
    </div>
  );
};