import '../globals.css';
import React from 'react';
import Backgroundcard from '../components/backgroundcard/backgroundcard';
import Aboutcard from '../components/aboutcard/Aboutcard';


function Page() {
    return ( 
    <main>
  
      <section>
      <div className="flex justify-center">
       <Backgroundcard>
       <Aboutcard />
       </Backgroundcard>
      </div>
      </section>
      <p className="text-neutral-700 text-center py-4">Copyright © 2025 Jakob Dahlin</p>
      
      </main>
  
  
    );
  }
  
  export default Page;