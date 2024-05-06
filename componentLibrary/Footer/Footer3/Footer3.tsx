import React from "react";
import Link from "next/link";

interface Props {}

function Footer3(props: Props) {
  const {} = props;

  return (
    <footer className="bg-white pt-4 xl:pt-8 w-full">
      <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl md:px-8">
        <ul className="flex flex-wrap justify-between pb-8 text-lg font-light px-8">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 text-md uppercase mb-4">
                Components
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Elements</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Forms</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Commerces</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Navigation</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 text-md uppercase mb-4">Contacts</h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Github</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Facebook</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Twitter</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 text-md uppercase mb-4">
                Customization
              </h2>
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Settings</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Themes</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">Plugins</Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800">
                  <Link href="#">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer3;
