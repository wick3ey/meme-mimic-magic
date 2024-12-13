import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

const responses = [
  "Grokmas is inspired by Elon Musk's AI assistant, bringing humor and intelligence to the crypto space! 🚀",
  "Our tokenomics are designed for long-term stability: 1 billion total supply, locked liquidity, and revoked contract.",
  "Grokmas combines Elon's favorite AI with Christmas meme magic! 🎄",
  "The name Grokmas comes from Elon Musk's AI project + Christmas, representing the perfect holiday pump!",
  "We have major influencers lined up to promote Grokmas! 🎉",
  "Our smart contract has been audited and verified for maximum security.",
  "Liquidity is permanently locked for maximum security and trust.",
  "We're launching aggressive marketing campaigns across all social platforms!",
  "The team is focused on getting Elon Musk's attention with this Christmas spin on Grok!",
  "We have partnerships with major crypto influencers and platforms in the works.",
  "Our roadmap includes multiple CEX listings and massive marketing pushes.",
  "We're targeting a $100M market cap through strategic partnerships and promotions.",
  "We have a dedicated marketing fund for sustainable growth.",
  "Zero team tokens - everything goes to marketing and development.",
  "Regular burns planned to maintain token value.",
  "We're implementing guerilla marketing tactics across social media.",
  "Community raids and trending campaigns are part of our strategy.",
  "We're listed on pump.fun with more exchanges coming!",
  "Regular technical updates and improvements planned.",
  "Our team has experience from successful meme token launches.",
  "We're focused on viral marketing and community growth.",
  "Transparency is key - all team activities are publicly announced.",
  "24/7 support team available in our Telegram.",
  "Regular community events and giveaways planned.",
  "Building strong partnerships in the meme token space.",
  "Marketing strategy focuses on maximum visibility and virality.",
  "Anti-bot measures in place for fair trading.",
  "Regular community contests with generous rewards.",
  "Join us in making Grokmas the biggest Christmas meme of 2023! 🎅",
  "We're running coordinated social media campaigns to catch Elon's attention!"
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
          <SheetTitle className="text-white">Ask Grokmas</SheetTitle>
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
              Ask About Grokmas
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default GrokAIChat;