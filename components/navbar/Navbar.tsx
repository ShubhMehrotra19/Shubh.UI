import Image from 'next/image'
import React from 'react'
import logo from '@/public/images/logo.png'

interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <div className='h-[50px] mx-auto max-w-6xl border-b-2 border-b-slate-500 py-3 px-2 flex justify-between items-center'>
            <Image src={logo} alt='logo' width={100} height={40} />
            <div className='flex justify-center items-center gap-3'>
                <p className='font-medium text-base'>Getting Started</p>
                <p className='font-medium text-base'>Components</p>
            </div>
        </div>
    )
}

export default Navbar
