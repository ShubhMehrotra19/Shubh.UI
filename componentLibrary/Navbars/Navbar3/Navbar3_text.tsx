import React from 'react';

interface Props {}

function Navbar1_text(props: Props) {
    const {} = props;

    const code = `
// I have used Next.js Image component for the profile picture. You can use any other image component or an img tag as per your requirement.

import React from "react";
import Image from "next/image";

function Navbar3() {
  let navElems = [
    {
      navElement: "Products",
      href: "#",
    },
    {
      navElement: "Solutions",
      href: "#",
    },
    {
      navElement: "Services",
      href: "#",
    },
    {
      navElement: "Configure",
      href: "#",
    },
  ];

  return (
    <nav className="w-full flex justify-between items-center">
        <h2 className="font-bold text-black cursor-pointer">Shubh.UI</h2>
        <div className="flex justify-center items-center gap-5 text-sm">
          {navElems.map((item, index) => (
            <a
              className="text-black font-medium cursor-pointer hover:scale-[102%] hover:text-slate-900 active:scale-95 transition-all duration-300 ease-in-out"
              key={index}
              href={item.href}
            >
              {item.navElement}
            </a>
          ))}
        </div>
      <div className="flex justify-center items-center gap-5">
       <input type="text" className="pl-1 pr-3 py-2 placeholder:text-slate-500 border-2 border-slate-800 rounded-md text-slate-800 font-normal" placeholder="Enter here..." />
        <Image src='https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' height={40} width={40} className="inline-block h-10 w-10 rounded-full object-contain object-center cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar3;

    

    
`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Navbar1_text;
