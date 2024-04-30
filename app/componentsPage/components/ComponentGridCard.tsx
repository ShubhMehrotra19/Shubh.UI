import Image from 'next/image'
import React from 'react'

function ComponentGridCard({componentName, imageLink}: any) {

    return (
        <>
        <div className='md:h-[380px] md:w-[360px] h-[300px] w-[260px] rounded-md p-2 gap-5 bg-stone-50 hover:shadow-md hover:scale-[100.5%] cursor-pointer flex flex-col justify-center items-center border-2 border-slate-300 transition-all duration-300 ease-in-out'>
            <Image src={imageLink} alt="" height={180} width={360} className='rounded-sm hover:scale-[102%] active:scale-95 transition-all ease-in-out duration-300' />
            <div className='flex flex-col justify-start items-start w-full gap-3'>
            <h3 className='text-black font-bold mb-1'>{componentName} Component</h3>
            <button type="submit" className='text-white rounded-md w-full py-2 bg-slate-900 hover:cursor-pointer hover:bg-slate-800 active:scale-95 transition-all duration-300 ease-in-out'>visit component</button>
            </div>
        </div>
        </>
    )
}

export default ComponentGridCard
