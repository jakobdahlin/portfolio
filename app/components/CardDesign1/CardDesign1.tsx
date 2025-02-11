import { FC } from 'react';
import { Heart, StarHalf, Bath, BedDouble, User} from 'lucide-react';

const CardDesign1: FC = () => {
  return (
<div className="max-w-md rounded-3xl overflow-hidden bg-white mb-2 mx-2 shadow-xl shadow-black/30">
      <div className="relative">
        <img
          src="https://i.ibb.co/c0qkvpK/LDMANSION.jpg"
          alt="Beverly Hills Home"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-neutral-800/60 text-white text-sm px-3 py-1 rounded-full">
          1/23
        </span>
      </div>

      <div className="p-5 text-left">
      <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-neutral-900 mb-1">The Modern Beverly</h3>
          <Heart className="w-7 h-7 pointer text-sm text-neutral-800 hover:text-sky-400" />
        </div>
        <p className="text-neutral-600 text-md mb-2">Beverly Hills, California</p>

        <div className="flex justify-left items-center mb-2">
        <User className="w-6 h-6 pointer text-sm text-neutral-950" />
          <div className="pl-2 text-sm text-neutral-500 pr-2">8 Guests</div>
          <BedDouble className="w-6 h-6 pointer text-sm text-neutral-950" />
          <div className="pl-2 text-sm text-neutral-500 pr-2">4 Bed</div>
          <Bath className="w-6 h-6 pointer text-sm text-neutral-950" />
          <div className="pl-2 text-sm text-neutral-500 pr-2">6 Bath</div>
        </div>

        <div className="flex items-center justify-left">
        <StarHalf className="w-5 h-5 text-sm text-sky-400" />
        <div className="pl-1 text-md font-bold text-neutral-950">4.95</div>
        <div className="text-neutral-400 px-2">•</div>
        <div className="underline pointer text-sm">61 reviews</div>
        </div>

        <hr className="border-t-1 border-neutral-200 my-4" />
        <div className="flex items-center justify-between">
          <h3 className="text-md font-bold text-neutral-950">Ocean Views</h3>
        </div>
        <p className="text-neutral-600 text-sm">Guests love the sunset view</p>
        <hr className="border-t-1 border-neutral-200 my-4" />
        <div className="flex items-center justify-between">
          <h3 className="text-md font-bold text-neutral-950">Spacious Garage</h3>
        </div>
        <p className="text-neutral-600 text-sm">The garage easily fits four cars</p>

        <div className="flex items-center justify-between mt-6">

  <button className="bg-neutral-800 pointer shadow-lg shadow-neutral-600 text-white 
  px-14 py-3 rounded-2xl duration-100 transform
  hover:bg-neutral-700 hover:shadow-md hover:shadow-neutral-600 hover:scale-95 
  active:bg-neutral-600 active:shadow-sm active:shadow-neutral-600">
    Reserve
  </button>

  <div className="flex flex-col items-end">
    <div className="text-neutral-900 text-lg underline font-bold">$11,300</div>
    <div className="text-xs text-sky-400">May 10 - 17</div>
  </div>
</div>
        
      </div>
    </div>
  );
};

export default CardDesign1;