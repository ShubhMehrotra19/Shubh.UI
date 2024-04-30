/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import gs from '@/public/images/gettingStarted.png'

interface Props {}

function Content(props: Props) {
    const {} = props

    return (
        <div className="flex flex-col justify-start items-start mx-auto md:px-0 px-5 max-w-7xl mt-12">
        <h2 className="mb-4 md:text-4xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
          Getting Started
        </h2>
        <p className="mx-auto md:mx-0 max-w-5xl text-left text-slate-400 md:text-xl text-sm leading-relaxed mb-5">
          We offer developers a seamless starting point for crafting
          stunning interfaces with ease. Designed to streamline the development
          process, We provide a rich selection of customizable
          components, allowing developers to effortlessly build responsive and
          visually appealing websites. With our intuitive design and
          straightforward integration, getting started with our component library is a
          breeze. Whether you're a seasoned developer or just starting out,
          our comprehensive documentation and code examples make it easy
          to dive in and start building right away. Plus, with <span className="text-blue-600 font-bold py-1 px-1 bg-blue-500/30 rounded-md">no npm packages</span> or 
          dependencies to worry about, developers can enjoy the flexibility
          to tailor components to suit their project's unique requirements. From
          buttons and forms to navigation bars and cards, We empower
          developers to bring their ideas to life with confidence and
          efficiency. So why wait? Jumpstart your next project with us and
          unlock a world of possibilities for creating <span className="text-blue-600 font-bold py-1 px-1 bg-blue-500/30 rounded-md">beautiful interfaces</span> that
          stand out from the crowd.
        </p>
        <div className="w-full flex justify-end items-end mb-36">
            <Image className="-mt-24" src={gs} alt="" height={500} width={500} />
        </div>
        <div className='flex flex-col mb-36'>
        <h2 className="mb-8 md:text-4xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
          Who can use Shubh.UI?
        </h2>
        <p className="mx-auto md:mx-0 max-w-5xl text-left text-slate-400 md:text-xl text-sm leading-relaxed mb-8">
            Anyone who wants to build a beautiful, responsive website can use Shubh.UI, the only prerequisite is a basic understanding of HTML, CSS, and JavaScript.
            The code-snippets in Shubh.UI compile use of easy <span className='text-slate-800 font-bold'>JSX syntax</span>, which is a JavaScript extension that allows you to write HTML-like code in your JavaScript files.
            For styling, the language used is <span className='text-slate-800 font-bold'>Tailwind CSS</span>, which is a utility-first CSS framework that allows you to build custom designs without having to write any CSS.
            Shubh.UI is designed to be <span className='text-blue-600 font-semibold'>beginner-friendly</span>, with a <span className='text-blue-600 font-semibold'>simple and intuitive UI</span> that makes it easy to create stunning interfaces without any prior experience.
        </p>
        <div className=' max-w-7xl flex justify-start items-start'>
            <button type="button" className='px-8 py-2 rounded-md bg-black text-white hover:scale-[102%] active:scale-95 transition-all duration-300 ease-in-out cursor-pointer'>Explore!</button>
        </div>
        </div>
      </div>
    )
}

export default Content
