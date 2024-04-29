import React from 'react'

interface Props {}

function Creator(props: Props) {
    const {} = props

    return (
        <div className='flex flex-col items-end justify-end text-right max-w-7xl mx-auto mb-12'>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Hey There 👋🏽</h2>
            <div className='text-slate-400 text-base pl-96 mb-5'>
                Hi! I am <span className='text-slate-600 font-semibold'>Shubh Mehrotra.</span> I hope you liked my personal component library!
                I have made this with a lot of patience and love. I hope you find it useful and easy to use. If you have any suggestions or feedback, feel free to reach out to me on my socials. I would love to hear from you!
            </div>
            <div className='flex justify-center items-center gap-4'>
                <input type="email" placeholder='   Enter your email' className=' border-2 border-slate-300 rounded-full py-2 pl-3 pr-12' />
                <button className='rounded-full w-fit px-5 py-2 bg-black text-white font-medium hover:scale-[102%] active:scale-95 transition duration-300 ease-in-out' type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Creator
