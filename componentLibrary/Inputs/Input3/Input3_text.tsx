import React from 'react';

interface Props {}

function Input3_text(props: Props) {
    const {} = props;

    const code = `
            <input type="text" placeholder='Enter Text...' className='pl-3 pr-2 p-2 rounded-md placeholder:text-xm border-2 hover:border-black' />
`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Input3_text;
