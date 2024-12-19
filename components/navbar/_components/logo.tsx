"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents mismatches by skipping render on the server

  return (
    <Link href="/" className="flex gap-0.5 items-center group">
      <svg
        width="27"
        height="27"
        className="w-fit inline-block transition-transform group-hover:rotate-[20deg] mr-1"
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)">
          <path
            fill="currentColor"
            d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"
          ></path>
        </g>
        <path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"></path>
        <g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)">
          <path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"></path>
        </g>
        <path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"></path>
        <path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"></path>
      </svg>
      <span className="scroll-m-20 text-2xl font-bold tracking-tight -mt-1">joko santoso</span>
    </Link>
  );
};

export default Logo;
