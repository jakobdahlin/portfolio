import React from 'react';
import "./globals.css";
import Welcomecard from './components/welcomeintro/welcomeintro';


function Page() {
  return ( 
  <main>

    <section>
    <div className="flex justify-center">
      <Welcomecard />
    </div>
    </section>
    <p className="text-neutral-700 text-center py-4">Copyright © 2025 Jakob Dahlin</p>
    </main>


  );
}

export default Page;