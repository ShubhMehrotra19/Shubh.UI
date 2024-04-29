import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo.png'
import Link from 'next/link'

interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <div className='h-[70px] mx-auto max-w-7xl border-b-2 border-b-slate-900 py-3 px-4 flex justify-between items-center mb-5'>
           <Link href='/'><div className='cursor-pointer'><Image src={logo} alt='logo' height={40} width={40} /></div></Link>
            <div className='flex justify-center items-center gap-5'>
                <Link href='/documentation'><button className='font-semibold w-fit text-sm cursor-pointer border-2 hover:scale-[102%] px-5 py-2 hidden md:block bg-slate-800 rounded-md text-white active:scale-95 transition-all duration-200 ease-in-out'>Getting Started</button></Link>
                <button className='font-semibold w-fit text-sm cursor-pointer border-2 hover:scale-[102%] px-5 py-2 bg-white border-slate-800 text-slate-800 hover:bg-slate-800 rounded-md hover:text-white active:scale-95 transition-all duration-200 ease-in-out'>Components</button>
            </div>
        </div>
    )
}

export default Navbar
