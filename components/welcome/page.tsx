"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

interface Props {}

function Page(props: Props) {
    const {} = props;
    const [displayedWord, setDisplayedWord] = useState<string | null>(null);
    const words = ['Welcome', 'to', 'Shubh.UI', '🚀'];

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayedWord(words[currentIndex]);
            currentIndex++;
            if (currentIndex === words.length) {
                clearInterval(intervalId); 
            }
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='h-screen w-screen bg-black text-xl font-semibold text-white flex justify-center items-center'>
            {displayedWord}
        </div>
    );
}

export default Page;

