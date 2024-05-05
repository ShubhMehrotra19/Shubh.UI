import React from 'react';

interface Props {}

function Button1_text(props: Props) {
    const {} = props;

    const code = `
    import React from "react";

    interface Props {}
    
    function Button1(props: Props) {
      const {} = props;
    
      return (
        <div className="w-full flex justify-center items-center gap-12">
          {/* Button 1 */}
          <button className="px-8 py-3 w-fit bg-black text-white font-semibold rounded-md hover:scale-[102%] hover:bg-slate-800 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out">
            Button
          </button>
          {/* Button 2 */}
          <button className="px-5 py-2 w-fit bg-black text-white font-semibold rounded-md hover:scale-[102%] hover:bg-slate-800 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out">
            Button
          </button>
          {/* Button 3 */}
          <button className="px-4 py-2 w-fit bg-black text-white text-sm font-semibold rounded-md hover:scale-[102%] hover:bg-slate-800 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out">
            Button
          </button>
          {/* Button 4 */}
          <button className="px-3 py-1 w-fit bg-black text-white text-sm font-semibold rounded-md hover:scale-[102%] hover:bg-slate-800 active:scale-95 cursor-pointer transition-all duration-300 ease-in-out">
            Button
          </button>
        </div>
      );
    }
    
    export default Button1;
    
    
    
`;

    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    );
}

export default Button1_text;
