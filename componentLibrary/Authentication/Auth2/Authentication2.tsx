/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

interface Props {}

function Authentication2(props: Props) {
    const {} = props

    return (
      <div className='w-full flex justify-center items-center'>
      <Image src='/images/Auth2.png' alt='' height={600} width={1000} />
      </div>
    )
}

export default Authentication2
