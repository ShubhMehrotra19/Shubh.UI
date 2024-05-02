import React from 'react';

interface Props {}

function Navbar1_text(props: Props) {
    const {} = props;

    const code = `
import React from 'react';

function Navbar1() {
    let navElems = [
        {
            navElement: "Products",
            href: '#'
        },
        {
            navElement: "Solutions",
            href: '#'
        },
        {
            navElement: "Services",
            href: '#'
        },
        {
            navElement: "Configure",
            href: '#'
        }
    ];

    return (
        <nav className='max-w-7xl mx-auto flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3'>
                <h2 className='font-bold text-black cursor-pointer'>Logo</h2>
                <div className='flex justify-center items-center gap-3'>
                    {navElems.map((item, index) => (
                        <a className='text-black font-medium cursor-pointer' key={index} href={item.href}>{item.navElement}</a>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <button className='w-fit px-4 py-1 border-2 border-black rounded-md text-black hover:bg-black hover:text-white hover:scale-[102%] active:scale-95 cursor-pointer'>Log in</button>
                <button className='w-fit px-4 py-1 border-2 border-black rounded-md bg-black text-white hover:text-black hover:bg-white hover:scale-[102%] active:scale-95 cursor-pointer'>Register</button>
            </div>
        </nav>
    );
}

export default Navbar1;
`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Navbar1_text;
