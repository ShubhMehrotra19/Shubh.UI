"use client";
import Navbar1 from "@/componentLibrary/Navbars/Navbar1/Navbar1";
import Navbar1_text from "@/componentLibrary/Navbars/Navbar1/Navbar1_text";
import Footer from "@/components/LandingPageComponents/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

function ComponentLayout({
  componentHeading,
  componentProp,
  ComponentCode,
}: {
  componentHeading: string;
  componentProp: JSX.Element;
  ComponentCode: JSX.Element;
}) {
  const [isClicked, setIsClicked] = useState(false);

  function clickedFuncCode() {
    setIsClicked(true);
  }

  function clickedFuncPreview() {
    setIsClicked(false);
  }

  return (
    <div className="flex flex-col gap-3 w-full mb-24">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl text-black">{componentHeading}</h2>
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={clickedFuncPreview}
            className={`rounded-md font-normal w-fit px-3 py-1 cursor-pointer active:scale-95 border-2 transition-all duration-300 ease-in-out ${
              isClicked ? "text-black bg-white hover:border-blue-600 hover:scale-[102%]" : "text-white bg-blue-600"
            }`}
          >
            Preview
          </button>
          <button
            onClick={clickedFuncCode}
            className={`rounded-md font-normal w-fit px-3 py-1 cursor-pointer active:scale-95 border-2 transition-all duration-300 ease-in-out ${
              isClicked ? "text-white bg-blue-600" : "text-blue-00 bg-white hover:border-blue-600 hover:scale-[102%]"
            }`}
          >
            Code
          </button>
        </div>
      </div>
      {isClicked ? <ViewCode componentCode={ComponentCode} /> : <PreviewComponentLayout componentProp={componentProp} />}
    </div>
  );
}

const PreviewComponentLayout = ({ componentProp }: { componentProp: JSX.Element }) => (
  <div className="w-full border-2 border-slate-300 rounded-md flex justify-center items-center p-3">
    {componentProp}
  </div>
);

const ViewCode = ({ componentCode }: { componentCode: JSX.Element }) => (
  <div className="w-full p-3 flex items-start justify-start bg-black rounded-md text-slate-100 h-[600px] overflow-scroll" style={{scrollbarWidth: 'none'}}>
    {componentCode}
  </div>
);

const ComponentProp = () => <div>Preview Component</div>;

const ComponentCode = () => <div>Code Component</div>;

function Page({ params }: { params: { component: string } }) {
  const componentArray = [
    {
      key: "Navbar",
      components: [
        {
          key: "Navbar1",
          componentProp: <Navbar1 />,
          ComponentCode: <Navbar1_text />,
        },
        {
          key: "Navbar1",
          componentProp: <Navbar1 />,
          ComponentCode: <Navbar1_text />,
        },
        {
          key: "Navbar1",
          componentProp: <Navbar1 />,
          ComponentCode: <Navbar1_text />,
        },
        // Add other Navbar components as needed
      ],
    },
    {
      key: "Footer",
      components: [
        {
          key: "Footer1",
          componentProp: <Navbar1 />,
          ComponentCode: <Navbar1_text />,
        },
        {
          key: "Navbar1",
          componentProp: <Navbar1 />,
          ComponentCode: <Navbar1_text />,
        },
        {
          key: "Navbar1",
          componentProp: <Navbar1 />,
          ComponentCode: <Navbar1_text />,
        },
        // Add other Footer components as needed
      ],
    },
  ];

  // Filter componentArray based on params.component
  const filteredComponents = componentArray.filter(item => item.key === params.component);

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="mb-4 md:text-4xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl font-heading mt-12">
          {params.component} Component
        </h2>
        <p className="mx-auto md:mx-0 max-w-5xl text-left text-slate-400 md:text-xl text-sm mb-24">
          Welcome to the {params.component} component page! This is where you
          can find all the information you need to get started with this
          component. Just,{" "}
          <span className="text-blue-600 font-bold">Copy-Paste</span> your
          chosen component code in your project!
        </p>
        {filteredComponents.map(({ components }) => (
          <div key={params.component}>
            {components.map(({ key: componentKey, componentProp, ComponentCode }) => (
              <ComponentLayout
                key={componentKey}
                componentHeading={componentKey}
                componentProp={componentProp}
                ComponentCode={ComponentCode}
              />
            ))}
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Page;


