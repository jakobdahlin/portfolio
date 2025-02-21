import '../globals.css';
import React from 'react';
import Backgroundcard from '../components/backgroundcard/backgroundcard';
import Resume from '../components/resume';


function Page() {
    return ( 
    <main>
  
      <section>
      <div className="flex justify-center">
       <Backgroundcard>
       <div className="flex justify-center">
          <Resume />
        </div>
       </Backgroundcard>
      </div>
      </section>
      <p className="text-neutral-700 text-center py-4">Copyright © 2025 Jakob Dahlin</p>
      
      </main>
  
  
    );
  }
  
  export default Page;