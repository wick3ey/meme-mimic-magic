import { Award, Star, Crown, Brain } from 'lucide-react';

const TrakrBackground = () => {
  return (
    <div className="relative max-w-6xl mx-auto my-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[#1A1F2C] rounded-3xl transform rotate-1"></div>
      <div className="absolute inset-0 bg-black rounded-3xl transform -rotate-1"></div>
      
      {/* Main content container */}
      <div className="relative bg-[#1A1F2C] rounded-3xl p-8 sm:p-12 border-4 border-black">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-center text-white"
            style={{ letterSpacing: '2px' }}>
          TRAKR'S BACKGROUND
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Training & Skills */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Brain className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Training & Skills</h3>
              </div>
              <p className="text-gray-300">
                Trakr was trained in multiple disciplines including tracking, search and rescue, 
                and criminal apprehension. His exceptional intelligence and work ethic made him 
                stand out among his peers, mastering complex commands and scenarios with remarkable speed.
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
                <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
              </div>
              <p className="text-gray-300">
                Beyond his 9/11 heroics, Trakr received numerous commendations throughout his career. 
                He was inducted into the Purina Animal Hall of Fame and was recognized by various 
                law enforcement agencies for his exceptional service record.
              </p>
            </div>
          </div>

          {/* Notable Achievements */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Notable Achievements</h3>
              </div>
              <p className="text-gray-300">
                Throughout his career, Trakr participated in over 400 successful missions, 
                helping to locate missing persons, recover evidence, and apprehend suspects. 
                His work directly contributed to solving numerous high-profile cases in the 
                Halifax region.
              </p>
            </div>
          </div>

          {/* Historical Impact */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Crown className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Historical Impact</h3>
              </div>
              <p className="text-gray-300">
                Trakr's groundbreaking cloning in 2009 marked a significant milestone in both 
                veterinary science and search and rescue history. As the first search and rescue 
                dog to be cloned, he paved the way for preserving exceptional canine genetics 
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrakrBackground;