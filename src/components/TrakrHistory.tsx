import { Medal, Search, Heart, Baby } from 'lucide-react';

const TrakrHistory = () => {
  return (
    <div className="relative max-w-6xl mx-auto my-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[#1A1F2C] rounded-3xl transform -rotate-1"></div>
      <div className="absolute inset-0 bg-black rounded-3xl transform rotate-1"></div>
      
      {/* Main content container */}
      <div className="relative bg-[#1A1F2C] rounded-3xl p-8 sm:p-12 border-4 border-black">
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 text-center text-white"
            style={{ letterSpacing: '2px' }}>
          TRAKR'S LEGACY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hero Card - 9/11 Rescue */}
          <div className="col-span-1 md:col-span-2 group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Medal className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">World Trade Center Hero</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                On September 12, 2001, Trakr and his handler James Symington discovered Genelle Guzman, 
                the last survivor of the 9/11 attacks, buried under 30 feet of rubble at Ground Zero. 
                Time magazine later named Trakr one of history's most heroic animals.
              </p>
            </div>
          </div>

          {/* Early Career */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Search className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Police Career</h3>
              </div>
              <p className="text-gray-300">
                As part of the Halifax Regional Police from 1995, Trakr helped locate over $1 million in contraband
                and assisted in hundreds of arrests. His remarkable service was cut short in 2001 when he was
                prematurely retired.
              </p>
            </div>
          </div>

          {/* Later Years */}
          <div className="group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black h-full transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Legacy</h3>
              </div>
              <p className="text-gray-300">
                After his heroic service, Trakr moved to Los Angeles with Symington. Despite developing
                degenerative myelopathy, possibly from inhaling smoke at Ground Zero, his spirit remained
                unbroken until his passing in April 2009.
              </p>
            </div>
          </div>

          {/* Cloning */}
          <div className="col-span-1 md:col-span-2 group relative">
            <div className="absolute inset-0 bg-black rounded-2xl transform transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-[#222222] rounded-2xl p-6 border-4 border-black transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-xl border-2 border-black">
                  <Baby className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">A New Generation</h3>
              </div>
              <p className="text-gray-300 text-lg">
                In a groundbreaking development, Trakr's DNA was used to create five cloned puppies: 
                Trustt, Solace, Valor, Prodigy, and Deja Vu. These puppies were trained as search 
                and rescue dogs, continuing Trakr's noble legacy of service and heroism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrakrHistory;