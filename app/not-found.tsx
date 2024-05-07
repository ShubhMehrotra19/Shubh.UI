import React from 'react'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <section className='h-screen max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
            <h1 className='font-bold text-9xl'>Not Found</h1>
            <p className='text-slate-500 text-base font-semibold'>Looks like you Navigated to the wrong route 😅</p> 
        </section>
    )
}

export default Page
