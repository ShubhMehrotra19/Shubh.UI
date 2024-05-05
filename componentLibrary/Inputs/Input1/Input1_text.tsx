import React from 'react';

interface Props {}

function Input1_text(props: Props) {
    const {} = props;

    const code = `
    
    "use client";
    import gsap from "gsap";
    import { useEffect, useState } from "react";
    import search from '@/public/icons/search.png';
    import Image from 'next/image';
    
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
        <div className="flex justify-center items-center">
            <Image src={search} alt="search" height={30} width={30} />
            <input
              type="search"
              onClick={toggleSearchClick}
              className={"search pl-[36px] rounded-full flex justify-center items-center border-2 py-2 px-5 $\{
                isClicked ? "focus" : "Search-pointer"
              }"}

              // use backticks instead of "" for string interpolation in the above line

              placeholder="search.."
            />
        </div>
      );
    }
    
`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Input1_text;
