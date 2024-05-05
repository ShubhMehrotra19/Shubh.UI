import React from "react";

interface Props {}

function Input2(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <p className="font-semibold text-black text-sm">Enter Value</p>
      <input
        type="text"
        className="px-4 py-2 rounded-md placeholder:text-slate-500 border-2 border-black"
        placeholder="Enter value"
      />
    </div>
  );
}

export default Input2;
