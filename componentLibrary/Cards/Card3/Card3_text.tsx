import React from 'react';

interface Props {}

function Card3_text(props: Props) {
    const {} = props;

    const code = `

    <div className="flex flex-col items-center text-start cursor-pointer">
    <div className="flex w-full flex-col items-start justify-start rounded-md">
      <Image
        width={350}
        height={350}
        src="https://images.pexels.com/photos/17035125/pexels-photo-17035125/free-photo-of-moon-in-night-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="z-0 rounded-md object-cover hover:scale-[102%] transition-all duration-300 active:scale-95"
      />
      <div className="absolute inset-0 p-2">
        <h1 className="text-base font-semibold text-white">Shubh.UI</h1>
        <h6 className="text-sm text-white">
          Here is a sleek hardcoded UI for you
        </h6>
      </div>
    </div>
  </div>

`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Card3_text;
