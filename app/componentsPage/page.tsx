"use client"
import Navbar from '@/components/navbar/Navbar'
import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Content from './components/Content';

interface Props {}

function Page(props: Props) {
    const {} = props

useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 800);
    });

    gsap.ticker.lagSmoothing(0);
},[])

    return (
        <>
        <Navbar />
        <Content />
        </>
    )
}

export default Page
