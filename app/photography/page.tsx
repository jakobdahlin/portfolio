"use client";

import '../globals.css';
import React, { useEffect, useState } from 'react';
import Backgroundcard from '../components/backgroundcard/backgroundcard';

export default function Page() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingDots, setLoadingDots] = useState(".");
  const [countdown, setCountdown] = useState(10);
  const [fadeOut, setFadeOut] = useState(false);

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

        setTimeout(() => setFadeOut(true), 9000);

        setTimeout(() => {
          setLoading(false);
        }, 10000);
      } catch (error) {
        console.error("Error fetching Cloudinary images:", error);
        setLoading(false);
      }
    }

    fetchImages();

    const dotsInterval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <main>
      <section className="w-full">
      {/* LOADING SCREEN WITH FADE-OUT BACKGROUND */}
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          } bg-black/75`}
        >
          {/* Animated Loading Text with Countdown */}
          <span className="text-white text-2xl flex justify-center items-center">
  <span className="tracking-wider">Loading</span>
  <span className="w-6 text-left">{loadingDots}</span>
</span>
          <span className="text-gray-400 text-lg mt-2">{`Generating random order... ${countdown}s`}</span>
        </div>
      )}
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
