import React from 'react';
import "./globals.css";
import Welcomecard from './components/welcomeintro/welcomeintro';


function Page() {

  const currentYear = new Date().getFullYear();

  return ( 
  <main>

    <section>
    <div className="flex justify-center">
      <Welcomecard />
    </div>
    </section>
    <p className="text-neutral-700 text-center py-4">Copyright © {currentYear} Jakob Dahlin</p>
    </main>


  );
}

export default Page;