"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Input1() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const searchInput = document.querySelector(".search");
      if (searchInput && !searchInput.contains(event.target)) {
        setIsClicked(false);
        gsap.to(".search", {
          height: "40px",
          width: "40px",
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function toggleSearchClick() {
    setIsClicked(!isClicked);
    if (!isClicked) {
      gsap.from(".search", { height: "40px", width: "40px", duration: 0.5 });
      gsap.to(".search", {
        height: "40px",
        width: "300px",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }

  return (
    <>
      <div className="relative cursor-pointer flex justify-center items-center">
        <input
          type="search"
          className={`search pl-[36px] rounded-full flex justify-center items-center border-2 py-2 px-5 ${
            isClicked ? "focus" : "Search-pointer"
          }`}
          placeholder="Search.."
        />
        
          <div className="absolute inset-0 ">
          <CiSearch />
            </div>
      </div>
    </>
  );
}
