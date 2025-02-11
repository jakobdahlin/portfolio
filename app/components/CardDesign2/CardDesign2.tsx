import { FC } from 'react';
import { Check, X } from 'lucide-react';

const CardDesign1: FC = () => {
  return (
<div className="max-w-md w-full h-full rounded-3xl overflow-hidden shadow-xl shadow-black/30
bg-gradient-to-bl from-blue-600 to-teal-200 mb-2 mx-4">
      <h2 className="text-center text-white font-bold text-2xl mt-6">SUBSCRIPTION</h2>

      <div className="relative flex items-center justify-center my-6">
        <div className="w-52 h-52 bg-white/10 rounded-full shadow-2xl shadow-black/20 
        border-2 border-white/20 relative flex items-center justify-center">
          <p className="text-4xl text-white">$14.99</p>
          <p className="absolute top-32 text-sm text-white">PER MONTH</p>
        </div>
      </div>

      <div className="px-6 text-white text-center text-sm space-y-4">
  <div className="flex items-center justify-center">
    <div className="flex items-center max-w-xs w-full hover:scale-110 duration-300 transform">
      <Check className="w-9 h-9 text-white mr-2 flex-shrink-0" />
      <span className="text-left">Lorem ipsum dolor sit adipisicing elit.</span>
    </div>
  </div>
  <div className="flex items-center justify-center">
    <div className="flex items-center max-w-xs w-full hover:scale-110 duration-300 transform">
      <Check className="w-9 h-9 text-white mr-2 flex-shrink-0" />
      <span className="text-left">Soluta magnam reiciendis</span>
    </div>
  </div>
  <div className="flex items-center justify-center">
    <div className="flex items-center max-w-xs w-full hover:scale-110 duration-300 transform">
      <X className="w-9 h-9 text-white mr-2 flex-shrink-0" />
      <span className="text-left">Lorem ipsum dolor sit amet elit.</span>
    </div>
  </div>
</div>


<div className="flex items-center justify-between mt-6">
  <button className="bg-white/20 pointer shadow-xl shadow-black/20 text-white 
  font-bold border-white/20 border-2
  hover:bg-white/30 active:bg-white/50 
  px-14 py-3 rounded-full duration-100 transform w-full mx-6 mb-8">
  <p className="text-2xl text-white hover:scale-110 px-10 duration-300 transform">Buy</p>
  </button>
</div>


    </div>
    
  );
};

export default CardDesign1;