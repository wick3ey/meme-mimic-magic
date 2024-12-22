<lov-code>
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PfpGenerator } from '@/components/PfpGenerator';
import TokenInfo from '@/components/TokenInfo';
import HowToBuy from '@/components/HowToBuy';
import MemeNotes from '@/components/MemeNotes';

const Index = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-[#ffbd59] relative overflow-hidden p-2 sm:p-4 border-2 sm:border-4 border-black">
      <MemeNotes />
      {/* Browser Frame */}
      <div className="max-w-6xl mx-auto bg-white rounded-t-lg shadow-2xl border-2 sm:border-4 border-black">
        <div className="bg-gray-200 p-2 rounded-t-lg border-b-2 sm:border-b-4 border-black flex items-center gap-2">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-2 sm:mx-4">
            <div className="bg-white rounded-md p-1 text-center text-sm sm:text-base border-2 border-black">
              lou.xyz
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#ffbd59] p-4 sm:p-8 min-h-[calc(100vh-4rem)] rounded-b-lg border-t-2 sm:border-t-4 border-black relative">
          <div className="fixed top-2 sm:top-4 right-2 sm:right-4 flex gap-2 sm:gap-4 z-50">
            <a 
              href="https://x.com/Loucoincto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 sm:p-3 rounded-full border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:transform hover:translate-y-[-4px] transition-all duration-300"
            >
              <img 
                src="/lovable-uploads/dffee0b9-4010-4246-b01b-aa9d9d0649db.png" 
                alt="Twitter" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a 
              href="https://t.me/Loucoincto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 sm:p-3 rounded-full border-2