import Link from "next/link";
import React from "react";

interface Props {}

function Footer2(props: Props) {
  const {} = props;

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <span className="text-xl text-black font-bold">Shubh.UI</span>
        <ul className="flex items-center gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="#" className="cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer2;
