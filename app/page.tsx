"use client";
import WelcomePage from '@/components/welcome/page';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {}

function Page(props: Props) {
  const {} = props;
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const welcomePage = welcomeRef.current;
    if (welcomePage) {
      gsap.from(welcomePage, {
        y: 0,
        duration: 1.5,
      });
      gsap.to(welcomePage, {
        y: -2000,
        duration: 2,
        delay: 1.5,
        ease: 'power4.in',
      });
    }
  }, []);

  return (
    <>
    <div ref={welcomeRef}>
      <WelcomePage />
    </div>
    </>
  );
}

export default Page;
