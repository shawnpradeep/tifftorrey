"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setInterval(() => {
      const face = document.getElementById("face") as HTMLImageElement;
      if (face) {
        let random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
        if (random >= 95) {
          face.src = "/tifftorrey/blob4.svg";
        } else {
          face.src = "/tifftorrey/blob3.svg";
        }
      }
    }, 500);
  }, []);

  return (
    <div className="flex items-center justify-start h-screen">
      <div className="p-10 -mt-10">
        <h1 className="text-[72px] font-semibold">
          tiffanie<span className="font-normal">torrey</span>
        </h1>
        <h2 className="text-xl pl-2 opacity-80 mb-3">
          ecologist, researcher, student at the university of georgia
        </h2>
        <h2 className="text-xl pl-2 opacity-80">
          生態学者、研究者、ジョージア大学の学生
        </h2>
      </div>

      <div className="z-10 m-4 mr-5 flex gap-5 absolute top-1 right-1 opacity-80 text-md">
        <span className="cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out">
          about
        </span>
        <span className="cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out">
          research
        </span>
        <span className="cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out">
          contact
        </span>
      </div>

      <div className="p-10 flex gap-1 absolute bottom-1 left-1">
        <a
          href="mailto:contact@shawnpradeep.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="email"
            src="/tifftorrey/icons/email.svg"
            alt="email"
            className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
          />
        </a>
        <a
          href="https://www.instagram.com/tifftorrey/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="instagram"
            src="/tifftorrey/icons/instagram.svg"
            alt="instagram"
            className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tiffanie-torrey-71168920b/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="linkedin"
            src="/tifftorrey/icons/linkedin.svg"
            alt="linkedin"
            className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
          />
        </a>
        <a
          href="https://www.github.com/shawnpradeep/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="github"
            src="/tifftorrey/icons/github.svg"
            alt="github"
            className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
          />
        </a>
        <a
          href="https://open.spotify.com/user/31pkkxs6a2cvhkfqfhkhqbazky6q?si=e4523d9874334541"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="spotify"
            src="/tifftorrey/icons/spotify.svg"
            alt="spotify"
            className="hover:opacity-70 transition-opacity duration-200 ease-in-out"
          />
        </a>
      </div>
      <img
        id="blob1"
        src="/tifftorrey/blob1.svg"
        alt="blob"
        className="wiggle absolute right-28 top-28"
      ></img>
      <img
        id="face"
        src="/tifftorrey/blob3.svg"
        alt="blob"
        className="wiggle absolute right-20 top-42"
      ></img>
    </div>
  );
}
