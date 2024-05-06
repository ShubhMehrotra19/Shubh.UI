import Image from "next/image";
import React from "react";

interface Props {}

function Card1(props: Props) {
  const {} = props;

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-3 rounded-md bg-slate-700 p-2 border-2 cursor-pointer">
        <div className="flex flex-col justify-start items-start">
          <p className="text-base font-semibold text-slate-300">Shubh.UI</p>
          <p className="text-sm text-slate-500">Component Libary</p>
        </div>
        <Image
          src="https://images.pexels.com/photos/22858523/pexels-photo-22858523/free-photo-of-s-curve-chicago.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={300}
          width={300}
          className="h-[300px] w-[300px] rounded-md hover:scale-95"
        />
      </div>
    </>
  );
}

export default Card1;
