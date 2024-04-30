/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ComponentsGridDisplay from './ComponentsGridDisplay'

interface Props {}

function Content(props: Props) {
    const {} = props

    return (
       <>
        <div className="flex flex-col justify-start items-start mx-auto md:px-0 px-5 max-w-7xl mt-12 mb-20">
        <div className=' mb-24'>
        <h2 className="mb-4 md:text-4xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
          Getting Started with Components
        </h2>
        <p className="mx-auto md:mx-0 max-w-5xl text-left text-slate-400 md:text-xl text-sm leading-relaxed mb-5">
          Below, you will get the list of all the components made with pure Tailwind CSS. 
          You can use these components in your project by just copying the code and pasting it in your project.
          Any kinds of alterations can be made to the components as per your requirements.
        </p>
        </div>
        <ComponentsGridDisplay />
        </div>
       </>
    )
}

export default Content
