import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

const responses = [
  "Grok is inspired by Elon Musk's AI assistant, bringing humor and intelligence to the crypto space! 🚀",
  "Our tokenomics are designed for long-term stability: 1 billion total supply, locked liquidity, and revoked contract.",
  "Grok combines meme culture with actual utility - we're not just another dog coin! 🤖",
  "The name Grok comes from Elon Musk's AI project, representing understanding at a deep, intuitive level.",
  "We have a strong community focus with regular AMAs and community events! 🎉",
  "Our smart contract has been audited and verified for maximum security.",
  "Liquidity is locked for 1 year to ensure trading stability.",
  "We're building a whole ecosystem around $GMAS, including NFTs and DeFi features.",
  "The team behind Grok is fully doxxed and committed to long-term success.",
  "We have partnerships with major crypto influencers and platforms.",
  "Our roadmap includes CEX listings and cross-chain expansion.",
  "Grok AI features will be integrated into our platform for unique utility.",
  "We have a dedicated marketing fund for sustainable growth.",
  "Zero team tokens - everything goes to the community and development.",
  "Regular burns are planned to maintain token value.",
  "We're developing AI-powered trading tools for our holders.",
  "Community governance will be implemented through DAO structure.",
  "Staking rewards are coming soon with attractive APY.",
  "We have a bug bounty program for security researchers.",
  "Regular technical updates and improvements are planned.",
  "Our team has experience from successful crypto projects.",
  "We're focused on organic growth rather than pump and dump.",
  "Transparency is key - all team activities are publicly announced.",
  "We have a dedicated support team available 24/7.",
  "Regular community polls guide our development direction.",
  "We're building partnerships in both crypto and AI sectors.",
  "Our marketing strategy focuses on long-term brand building.",
  "We have anti-bot measures in place for fair trading.",
  "Regular community contests with generous rewards.",
  "We're committed to educational content about crypto and AI."
];

const GrokAIChat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const simulateResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, getRandomResponse()]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full bg-[#1A1F2C] hover:bg-[#2A2F3C] border-4 border-black"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-[#1A1F2C] border-l-4 border-black">
        <SheetHeader>
          <SheetTitle className="text-white">Ask Grok AI</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col h-[calc(100vh-100px)]">
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((msg, index) => (
              <div key={index} className="bg-[#222222] p-4 rounded-xl text-white">
                {msg}
              </div>
            ))}
            {isTyping && (
              <div className="bg-[#222222] p-4 rounded-xl text-white">
                Typing...
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-700">
            <Button 
              onClick={simulateResponse}
              className="w-full bg-white text-black hover:bg-gray-100"
              disabled={isTyping}
            >
              Ask About Grok
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default GrokAIChat;