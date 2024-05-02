// import React, { useState } from 'react';

// interface ComponentLayoutProps {
//     componentHeading: string;
// }

// function ComponentLayout({ componentHeading }: ComponentLayoutProps, componentProp: JSX.Element, ComponentCode: JSX.Element) {
//     const [isClicked, setIsClicked] = useState(false);

//     function clickedFuncCode() {
//         setIsClicked(true);
//     }

//     function clickedFuncPreview() {
//         setIsClicked(false);
//     }

//     return (
//         <div className='flex flex-col gap-3 w-full'>
//             <div className='flex justify-between items-center'>
//                 <h2 className='font-semibold text-xl text-black'>{componentHeading}</h2>
//                 <div className='flex justify-center items-center gap-3'>
//                     <button onClick={clickedFuncPreview} className='rounded-nd bg-white text-black font-normal w-fit px-3 py-1 cursor-pointer active:scale-95'>Preview</button>
//                     <button onClick={clickedFuncCode} className='rounded-nd text-white bg-black font-normal w-fit px-3 py-1 cursor-pointer active:scale-95'>Code</button>
//                 </div>
//             </div>
//             {isClicked ? <ViewCode componentCode={<ComponentCode />} /> : <PreviewComponentLayout componentProp={<ComponentProp />} />}
//         </div>
//     );
// }

// const PreviewComponentLayout = ({ componentProp }: { componentProp: JSX.Element }) => (
//     <div className='w-full border-2 border-slate-300 rounded-md flex justify-center items-center px-3'>
//         {componentProp}
//     </div>
// );

// const ViewCode = ({ componentCode }: { componentCode: JSX.Element }) => (
//     <div className='w-full p-3 flex items-start justify-start bg-black rounded-md text-slate-100'>
//         {componentCode}
//     </div>
// );

// const ComponentProp = () => <div>Preview Component</div>;

// const ComponentCode = () => <div>Code Component</div>;

// export default ComponentLayout;
