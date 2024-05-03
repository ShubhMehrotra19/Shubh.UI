import React from "react";

function Navbar2() {
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
      <div className="flex justify-center items-center gap-3">
        <button className="w-fit px-4 py-2 text-sm rounded-md text-black hover:bg-black hover:text-white hover:scale-[102%] active:scale-95 cursor-pointer transition-all duration-300 ease-in-out">
          Log in
        </button>
        <button className="w-fit px-4 py-2 text-sm border-2 border-black rounded-md bg-black text-white hover:scale-[102%] active:scale-95 cursor-pointer transition-all duration-300 ease-in-out">
          Sign Up Free
        </button>
      </div>
    </nav>
  );
}

export default Navbar2;
