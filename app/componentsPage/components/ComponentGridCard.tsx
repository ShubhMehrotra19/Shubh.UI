import Image from "next/image";
import Link from "next/link";
import React from "react";

function ComponentGridCard({ componentName, imageLink }: any) {
  function openComponent() {
    console.log("Component Opened");
  }

  return (
    <>
      <div className="md:h-[380px] md:w-[360px] h-[300px] w-[260px] rounded-md p-2 gap-5 bg-stone-50 hover:shadow-md hover:scale-[100.5%] cursor-pointer flex flex-col justify-center items-center border-2 border-slate-300 transition-all duration-300 ease-in-out">
        <Link href={`/componentsPage/${componentName}`}>
          <Image
            src={imageLink}
            alt=""
            height={180}
            width={360}
            className="rounded-sm hover:scale-[102%] active:scale-95 transition-all ease-in-out duration-300"
          />
        </Link>
        <div className="flex flex-col justify-start items-start w-full gap-3">
          <h3 className="text-black font-semibold text-xl mb-1">
            {componentName} Component
          </h3>
          <Link href={`/componentsPage/${componentName}`} className="w-full">
            {" "}
            <button
              type="submit"
              onClick={openComponent}
              className="text-white rounded-md w-full py-2 bg-slate-900 hover:cursor-pointer hover:bg-slate-800 active:scale-95 transition-all duration-300 ease-in-out"
            >
              visit component
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ComponentGridCard;
