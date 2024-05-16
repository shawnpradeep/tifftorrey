import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex justify-start h-screen">
      <div className="p-14">
        <h1 className="text-[74px] font-semibold mb-8 mt-20">about 位</h1>
        <p className="text-lg pl-2 opacity-80 mb-3 w-[40vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur{" "}
          <span className="underline underline-offset-4">
            <Link href={"https://uga.edu"} target="_blank">
              sint occaecat cupidatat
            </Link>
          </span>{" "}
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      <div className="z-10 m-4 mr-5 flex gap-5 absolute top-1 right-1 opacity-80 text-md">
        <span className="font-bold cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out">
          about
        </span>
        <span className="cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out">
          research
        </span>
        <span className="cursor-pointer hover:opacity-70 transition-opacity duration-200 ease-in-out">
          contact
        </span>
      </div>

      <div className="p-14 flex gap-1 absolute bottom-1 left-1">
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
        id="about"
        src="/tifftorrey/about_blob.svg"
        alt="blob"
        className="wiggle2 absolute right-32 top-20 w-[700px]"
      ></img>
    </div>
  );
}

export default About;
