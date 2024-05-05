import Image from 'next/image'
import React from 'react'

interface Props {}

function Authentication1(props: Props) {
    const {} = props

    return (
        <div className='w-full flex justify-center items-center'>
            <Image src='/images/Auth1.png' alt='' height={600} width={1000} />
        </div>
    )
}

export default Authentication1
