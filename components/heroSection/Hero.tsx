import React from 'react'

interface Props {}

function Hero(props: Props) {
    const {} = props

    return (
        <section className="w-full px-6 pb-12 antialiased bg-white">
    <div className="mx-auto max-w-7xl flex flex-col justify-center items-center">
        <div className="container w-full pt-32 pb-8 mt-px text-left sm:px-4 md:text-center">
            <h1 className="text-3xl font-bold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:text-4xl md:text-7xl lg:text-8xl">Start Crafting Your <br className="hidden sm:block" /> Next Great Idea</h1>
            <div className="mx-auto mt-5 text-gray-400 md:mt-8 md:max-w-lg md:text-center md:text-xl">Simplifying the creation of landing pages, blog pages, application pages and so much more with (<span className='font-bold text-slate-600'>Tailwind CSS</span>) based components!</div>
        </div>
        <button className='font-semibold w-fit text-base rounded-full cursor-pointer border-2 hover:scale-[102%] px-8 py-3 hover:bg-white hover:border-slate-800 hover:text-slate-800 bg-slate-800 text-white active:scale-95 transition-all duration-200 ease-in-out'>Visit Components</button>
    </div>
</section>
    )
}

export default Hero
