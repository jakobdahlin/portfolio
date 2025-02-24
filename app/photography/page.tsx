"use client";

import '../globals.css';
import InteriorGrid from "../components/interiorgrid";
import ExteriorGrid from "../components/exteriorgrid";
import CityscapeGrid from "../components/cityscapegrid";
import Backgroundcard from '../components/backgroundcard/backgroundcard';

export default function Home() {
  return (
    <Backgroundcard className="flex items-center justify-center mx-auto">
    <main className="text-center w-full mx-auto">
      <div className="w-full mb-10 mx-auto">
        <h2 className="text-white text-3xl mb-10">Interior</h2>
        <div className="mb-4 w-full"><InteriorGrid/></div>  {/* Ensure full width */}
        
        <h2 className="text-white text-3xl mb-10">Exterior</h2>
        <div className="mb-4 w-full"><ExteriorGrid/></div>

        <h2 className="text-white text-3xl mb-10">Cityscape</h2>
        <div className="mb-4 w-full"><CityscapeGrid/></div>
      </div>
    </main>
    </Backgroundcard>
  );
}
