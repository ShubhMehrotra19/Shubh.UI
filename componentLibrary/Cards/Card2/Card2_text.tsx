import React from 'react';

interface Props {}

function Card2_text(props: Props) {
    const {} = props;

    const code = `

    <div style={cardStyle} className='p-6 flex-col bg-white max-w-80 rounded-sm items-start shadow-xl'>
    <div className='upper-part flex items-center gap-4 mb-3'>
      <Image className='rounded-full w-12 h-12 object-cover' src='https://images.pexels.com/photos/16549122/pexels-photo-16549122/free-photo-of-wooden-pier-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="img" height={48} width={48} />
      <div className='flex flex-col items-start'>
        <p className="text-center text-black text-xl font-bold font-['Poppins']">Shubh.UI</p>
        <p className="text-center text-black text-base font-semibold font-['Poppins']">🔥9.6</p>
      </div>
    </div>
    <div className='lower-part'>
      <p className="text-black text-base font-normal font-['Poppins']">
        A NextJs and Tailwind Based component library that offers a sleek and modern UI Component that can be used in any project.
      </p>
    </div>
  </div>

`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Card2_text;
