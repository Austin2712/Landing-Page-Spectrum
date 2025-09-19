"use client";

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline/next';

export const CallToAction = () => {
  return (
<div className="bg-black flex flex-col lg:flex-row items-center text-white py-[48px] sm:py-[64px] min-h-screen">
  <div className="container max-w-4xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Text Content Section */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-8">
          Presented by Binary Brigades
        </h2>
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-white/70">Aprajita Ranjan</p>
          <p className="text-lg sm:text-xl text-white/70">Priyanshu Paul</p>
          <p className="text-lg sm:text-xl text-white/70">Ayush Kamal</p>
          <p className="text-lg sm:text-xl text-white/70">Ibrahim Salat</p>
        </div>
      </div>
      
      {/* Spline 3D Model Section */}
{/* Spline 3D Model Section - Bigger container */}
<div className="flex-[1.5] w-full h-[900px] lg:h-[1000px]">
  {/* <Spline scene="https://prod.spline.design/bxqHLScA5S0DS02F/scene.splinecode" /> */}
</div>

    </div>
  </div>
</div>

  );
};

export default CallToAction;
