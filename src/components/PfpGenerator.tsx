import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const PfpGenerator = () => {
  const [selectedHat, setSelectedHat] = useState<string>('hat1');
  const [position, setPosition] = useState({ x: 50, y: 0 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleGeneratePfp = () => {
    setShowControls(true);
    toast.success("Hat added! Adjust position and size.");
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <div className="relative w-full aspect-square bg-white rounded-xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Base image (cat) */}
        <img 
          src="/lovable-uploads/e110e57f-74f5-4210-9cb5-a9a071ff1ade.png" 
          alt="Cat base" 
          className="w-full h-full object-cover"
        />
        
        {/* Hat overlay */}
        {showControls && (
          <img 
            src={selectedHat === 'hat1' ? "/lovable-uploads/8a03f679-f64c-479b-a1f0-b32b0bf403bb.png" : "/lovable-uploads/92af570a-3f52-45d7-a15b-d21492910d35.png"}
            alt="Hat"
            className="absolute pointer-events-none"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
              width: '150px',
              height: 'auto',
            }}
          />
        )}
      </div>

      <div className="space-y-6 bg-white p-6 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {!showControls ? (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center">Choose Hat</h3>
            <RadioGroup 
              defaultValue="hat1" 
              onValueChange={(value) => setSelectedHat(value)}
              className="flex justify-center gap-8"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hat1" id="hat1" />
                <Label htmlFor="hat1">WIF</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hat2" id="hat2" />
                <Label htmlFor="hat2">Santa Hat</Label>
              </div>
            </RadioGroup>
            <Button 
              onClick={handleGeneratePfp} 
              className="w-full"
            >
              Generate PFP
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">X-Position</h4>
              <Slider
                value={[position.x]}
                onValueChange={(value) => setPosition(prev => ({ ...prev, x: value[0] }))}
                min={0}
                max={100}
                step={1}
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Y-Position</h4>
              <Slider
                value={[position.y]}
                onValueChange={(value) => setPosition(prev => ({ ...prev, y: value[0] }))}
                min={0}
                max={100}
                step={1}
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Size</h4>
              <Slider
                value={[scale * 100]}
                onValueChange={(value) => setScale(value[0] / 100)}
                min={50}
                max={150}
                step={1}
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Rotation</h4>
              <Slider
                value={[rotation]}
                onValueChange={(value) => setRotation(value[0])}
                min={-180}
                max={180}
                step={1}
              />
            </div>

            <Button 
              onClick={() => setShowControls(false)} 
              variant="outline" 
              className="w-full"
            >
              Start Over
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};