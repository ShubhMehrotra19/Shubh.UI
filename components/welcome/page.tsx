"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

interface Props {}

function Page(props: Props) {
    const {} = props;
    const [displayedWord, setDisplayedWord] = useState<string | null>(null);
    const words = ['We', 'make', 'React', 'Components', 'easy', 'for', 'you', '🚀'];

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayedWord(words[currentIndex]);
            currentIndex++;
            if (currentIndex === words.length) {
                clearInterval(intervalId); 
            }
        }, 350);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='h-screen w-screen bg-black text-4xl font-semibold text-white flex justify-center items-center'>
            {displayedWord}
        </div>
    );
}

export default Page;

