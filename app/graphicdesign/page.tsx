"use client";

import '../globals.css';
import React from 'react';
import Graphiccard from '../components/graphiccard/graphiccard';


function Page() {
    return ( 
      <main>
  
      <section>
      <div className="flex justify-center">
        <Graphiccard />
      </div>
      </section>
      <p className="text-neutral-700 text-center py-4">Copyright © 2025 Jakob Dahlin</p>
      
    </main>
    );
  }
  
  export default Page;