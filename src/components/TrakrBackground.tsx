import { Award, Heart, Star, Trophy, Medal } from 'lucide-react';

const TrakrBackground = () => {
  return (
    <div className="relative max-w-6xl mx-auto my-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[#1A1F2C] rounded-3xl transform -rotate-1"></div>
      <div className="absolute inset-0 bg-black rounded-3xl transform rotate-1"></div>
      
      {/* Main content container */}
      <div className="relative bg-[#1A1F2C] rounded-3xl p-8 sm:p-12 border-4 border-black">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-center text-white"
            style={{ letterSpacing: '2px' }}>
          TRAKR'S STORY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Training & Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Trophy className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Elite Training</h3>
              </div>
              <p className="text-gray-300">
                Trained in the prestigious Canadian police K-9 program, Trakr mastered advanced search and rescue 
                techniques, excelling in both urban and wilderness environments. His exceptional intelligence and 
                dedication made him stand out among his peers.
              </p>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Honors & Awards</h3>
              </div>
              <p className="text-gray-300">
                Beyond his 9/11 recognition, Trakr received multiple commendations for his service, including the 
                'Extraordinary Service to Humanity' award and was inducted into the Purina Animal Hall of Fame 
                for his lifetime achievements.
              </p>
            </div>
          </div>

          {/* Impact & Influence */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Global Impact</h3>
              </div>
              <p className="text-gray-300">
                Trakr's story inspired changes in search and rescue protocols worldwide. His success demonstrated 
                the vital role of highly trained K-9 units in disaster response, leading to increased investment 
                in K-9 training programs globally.
              </p>
            </div>
          </div>

          {/* Personal Life */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Beyond Service</h3>
              </div>
              <p className="text-gray-300">
                Known for his gentle demeanor off-duty, Trakr was beloved by his community in Halifax. He participated 
                in numerous public demonstrations and youth programs, helping to bridge the gap between law enforcement 
                and the community.
              </p>
            </div>
          </div>

          {/* Scientific Legacy */}
          <div className="col-span-1 md:col-span-2 group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Medal className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Scientific Breakthrough</h3>
              </div>
              <p className="text-gray-300 text-lg">
                In 2008, Trakr was selected as one of five dogs to be cloned by BioArts International due to his 
                exceptional abilities and service record. This groundbreaking project aimed to preserve and study 
                the genetics behind his extraordinary capabilities, making him a pioneer in both rescue operations 
                and scientific advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrakrBackground;