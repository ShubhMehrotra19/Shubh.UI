import Image from 'next/image';
import React from 'react';

function Card() {


  return (
    <div>
         <Image src='/images/card.png' alt='' height={200} width={400} className='h-[200px] w-[400px] rounded-md hover:scale-95' />
         <p className='text-xs text-slate-400'>Image used instead of component due to technical issue</p>
    </div>
  );
}

export default Card;
