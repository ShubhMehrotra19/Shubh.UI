"use client";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import WelcomePage from '@/components/welcome/page';
import Navbar from '@/components/navbar/Navbar';

interface Props {}

function Page(props: Props) {
  const [isWelcomeAnimationComplete, setIsWelcomeAnimationComplete] = useState(false);

  useEffect(() => {
    const welcomeAnimation = gsap.timeline();
    welcomeAnimation.fromTo("#welcome", { y: 0 }, { y: -2000, duration: 1.5, delay: 3, ease: "power4.in" })
                     .set("#welcome", { display: "none" })
                     .set("#content", { opacity: 0, display: "block" })
                     .to("#content", { opacity: 1, duration: 1.5, onComplete: () => setIsWelcomeAnimationComplete(true) });
  }, []);

  return (
    <div>
      <div id="welcome" style={{ display: isWelcomeAnimationComplete ? "none" : "block" }}>
        <WelcomePage />
      </div>
      <div id="content" style={{ opacity: isWelcomeAnimationComplete ? 1 : 0, display: isWelcomeAnimationComplete ? "block" : "none" }}>
        <Navbar />
        {/* Add other components here */}
      </div>
    </div>
  );
}

export default Page;
