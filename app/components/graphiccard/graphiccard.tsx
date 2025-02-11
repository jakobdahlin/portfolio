"use client";

import React from 'react';
import '@fontsource/kumbh-sans/400.css';
import '@fontsource/kumbh-sans/700.css';
import Backgroundcard from '../backgroundcard/backgroundcard';
import Carousel from '../carousel/carousel';
import Image from 'next/image';


interface CardProps {
    className?: string;
  } 

const settings = {
    dots: true, 
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeeed: 2000,
    cssEase: "linear"
};

const Graphiccard: React.FC<CardProps> = ({ className }) => {
    return (
        <Backgroundcard>
        <div className="container mx-auto z-10">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* ROLLING LOGOS */}
            <div className="py-2 px-3 col-span-12 lg:col-span-12 border-neutral-700 border 
  lg:rounded-2xl md:rounded-2xl transition-all duration-300 shadow-neutral-900 
  md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
  lg:hover:shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4">
  
  <h2 className="text-white font-bold text-center">Buttons</h2>
  
  <div className="w-full px-4">
    <Carousel />
  </div>
</div>
      
            {/* BUTTONS 2/3 */}
            <div className="col-span-12 lg:col-span-8 p-3 border-neutral-700 border md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl lg:rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold text-left">Business Cards</h2>
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/35aovj3t7jdg6xu668rg8/bc1.jpg?rlkey=1d4auzmpj605jpprja6r0kqh1&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/h5z0tswptf72d7svfkm5i/bc4.jpg?rlkey=2k4xfkpw6c1f0xfpgbmjaz106&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/ug45p6hbveqoqi3087rpf/bc7.jpg?rlkey=02nmdj841hghqlwoeup8sl6j0&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/6qts4zl9yfi3fpgafb1nk/bc8.jpg?rlkey=bn04krpxh609yo8xu3fwnrkhe&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/n4tjwemxu45lwzgavc0zs/bc3.jpg?rlkey=arrg9b7ykea6xcrbacmc9b9fn&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/big9nxjm9bqxssr95pai4/bc2.jpg?rlkey=pfcxbh4xt7nwyhrexqsdvg40f&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/qu30eh3btzzgkv6igq16g/bc5.jpg?rlkey=dg27yilr8aylsrer61bli04b0&raw=1" alt="businesscard" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/0egy7it5ke8ip4w8xg4z6/bc6.jpg?rlkey=16okbat57n5rb3psehzxjgypf&raw=1" alt="businesscard" />
              </div>
            </div>
      
            {/* TYPOGRAPHY 1/3 */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Letterheads</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/cncqj3pazbx0iz4denrs5/letterhead2.jpg?rlkey=lf3ymy5tktxy9gayv674z2yq2&raw=1" alt="letterhead2" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/ry152fbkip73peaero88p/letterhead3.jpg?rlkey=k9punyibib1x8bu6x32eqiy8i&raw=1" alt="letterhead3" />
              </div>
            </div>
      
            {/* ENVELOPES */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Envelopes</h2>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/4yfn5i2plxhoxt4ms6shh/envelope1.jpg?rlkey=g4s2mr2nkpaap3kdpdrztv47p&raw=1" alt="envelope1" />
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/ix9w8r9cv1nii1gaazgw7/envelope2.jpg?rlkey=giusxse8vumfugexk7f15scil&raw=1" alt="envelope2" />
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/enhap2vyrlfeq49742urg/envelope3.jpg?rlkey=z67jzcbn5l56ezv1naq7x1doc&raw=1" alt="envelope3" />
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/f10f769awifj14sjnbyeh/envelope4.jpg?rlkey=n8frhsl91soql03ufc5kyhkxj&raw=1" alt="envelope4" />
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/r4n93qz0qosnsd2nrbj8u/envelope5.jpg?rlkey=n6s8dv3r6t1dkxuzwc10h0raj&raw=1" alt="envelope5" />
              </div>
            </div>

            {/* OTHER CONTENT */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Menues</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/j5hordg1tx0eirjurzqoh/MENU1.jpg?rlkey=lreq56ltr3qquxlq9knha3boq&raw=1" alt="menu1" />
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/8trug8vqdqugm941dtfu1/MENU2.jpg?rlkey=0r4ydb5x5uqmihnzvlpluk3fn&raw=1" alt="menu2" />
              </div>
            </div>
      
            {/* OTHER CONTENT */}
            <div className="col-span-12 lg:col-span-4 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Brochures</h2>
              <div className="grid grid-cols-1 gap-4 lg:flex-wrap">
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/rkoo3auou2xyz8eew4ax6/brochure1.png?rlkey=lfzgn9oo1q77l948xqa4bskpr&raw=1" alt="nyc-palette" />
              <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/2dy3rgsadecc6zs1dbr4z/brochure2.png?rlkey=lk6bcfxeh10ukqhufdbhkgw07&raw=1" alt="nyc-palette" />
              </div>
            </div>

            <div className="py-2 px-3 col-span-12 lg:col-span-12 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
            <h2 className="text-white font-bold text-left">Album Covers</h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:flex-wrap">
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/jer2zscsqnohxkw1qp2tq/album1.png?rlkey=lo51vq8p0zbfrrl237fevlhxn&raw=1" alt="album1" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/11o8krvdt9r4bmjnc939c/album2.png?rlkey=eyvxrh0o4vhmtwrrbs9oy78ch&raw=1" alt="album2" />
                <img className="w-full h-auto" src="https://www.dropbox.com/scl/fi/py9bopox96a6403hzsovj/album3.png?rlkey=7pwdswy0ct9rscp32o14g6k7l&raw=1" alt="album3" />

                
              </div>
            </div>
      
            {/* COLOR PALETTES */}
            <div className="col-span-12 lg:col-span-12 lg:row-span-3 p-3 border-neutral-700 border lg:rounded-2xl md:rounded-2xl 
            transition-all duration-300 shadow-neutral-900 md:hover:border-neutral-500 md:hover:shadow-lg lg:hover:border-neutral-500 
            lg:hover:shadow-lg rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-white font-bold">Color Palettes</h2>
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:flex-wrap">
                <img className="w-full h-auto rounded-xl" src="https://www.dropbox.com/scl/fi/ydw9uju8quvvyxd8tzpzb/1.png?rlkey=u4yz291h4ctbxte97ct893jt3&raw=1" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="https://www.dropbox.com/scl/fi/7sps8h9xb5ps8w4cdd31k/2.png?rlkey=m3kal0uev9mlnd11f7y6xpr1c&raw=1" alt="costarica-palette" />
                <img className="w-full h-auto rounded-xl" src="https://www.dropbox.com/scl/fi/ge6w2wl5sqarne00pagrl/3.png?rlkey=ettnsb3v8oerqlbk7yjp2iclg&raw=1" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="https://www.dropbox.com/scl/fi/dnk1xp9aovkw984xfszqy/4.png?rlkey=oiewdpzih3cmx5ghaw8v1491y&raw=1" alt="costarica-palette" />
                <img className="w-full h-auto rounded-xl" src="https://www.dropbox.com/scl/fi/sx9jrqz523tkpotpo65fc/5.png?rlkey=ck1gbuydtluucdxei5mq9xnpq&raw=1" alt="nyc-palette" />
                <img className="w-full h-auto rounded-xl" src="https://www.dropbox.com/scl/fi/f6ogq4870yzh5qzp2fsdi/6.png?rlkey=dwtojoeamtiu27h84an1o4dnu&raw=1" alt="costarica-palette" />
              </div>
            </div>
          </div>
        </div>
      </Backgroundcard>
      
  )
  };

export default Graphiccard;