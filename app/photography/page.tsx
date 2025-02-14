"use client";

import '../globals.css';
import React, { useEffect, useState } from 'react';
import Backgroundcard from '../components/backgroundcard/backgroundcard';

export default function Page() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/cloudinary");
        const data = await response.json();

        console.log("Fetched images:", data);

        if (data.resources) {
          let imageUrls = data.resources.map((img: any) => img.secure_url);

          for (let i = imageUrls.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
          }

          setImages(imageUrls);
        }
      } catch (error) {
        console.error("Error fetching Cloudinary images:", error);
      }
    }

    fetchImages();
  }, []);


  return (
    <main>
      <section className="w-full">
        <div className="flex justify-center">
          <Backgroundcard className="w-full max-w-none">
            <div className="columns-2 sm:columns-2 md:columns-4 lg:columns-6 xl:columns-7 gap-4 gap-y-4 w-full">
              {images.map((src, index) => (
              <div key={index} className="break-inside-avoid rounded-xl overflow-hidden">
              <img 
              className="w-full h-auto object-cover mb-4 rounded-xl" 
              src={src} 
              alt={`Image ${index}`} 
              />
              </div>
              ))}
            </div>
          </Backgroundcard>
        </div>
      </section>
    </main>
  );
}
