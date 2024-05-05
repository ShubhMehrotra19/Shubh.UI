"use client";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface Props {}

function Button3(props: Props) {
    const {} = props;

    const [isClicked, setIsClicked] = useState(false);

    function btnClicked() {
        setIsClicked(isClicked => !isClicked);
    }

    useEffect(() => {
        if (isClicked) {
            gsap.from('.notif', {
                y: -2000,
                x: 510,
                duration: 1,
                ease: 'Power4.easeOut',
            });

            gsap.to('.notif', {
                y: -400,
                x: 510,
                duration: 1,
                ease: 'Power4.easeOut',
            });
        }
    }, [isClicked]);

    return (
        <div className='w-full flex justify-center items-center'>
            <button onClick={btnClicked} className='px-8 py-3 w-fit bg-black text-white font-semibold rounded-md hover:scale-[102%] hover:bg-slate-800 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out'>
                Click me!
            </button>
            {isClicked && <NotifBtn />}
        </div>
    );
}

const NotifBtn = () => {
    return (
        <div className='notif w-fit px-8 py-2 bg-black text-white text-center rounded-md'>
            This component is Under Construction!
        </div>
    );
};

export default Button3;
