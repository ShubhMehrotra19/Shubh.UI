"use client";
import React, { useState } from "react";
import Footer from "@/components/LandingPageComponents/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Navbar1 from "@/componentLibrary/Navbars/Navbar1/Navbar1";
import Navbar1_text from "@/componentLibrary/Navbars/Navbar1/Navbar1_text";
import Navbar2 from "@/componentLibrary/Navbars/Navbar2/Navbar2";
import Navbar2_text from "@/componentLibrary/Navbars/Navbar2/Navbar2_text";
import Navbar3 from "@/componentLibrary/Navbars/Navbar3/Navbar3";
import Navbar3_text from "@/componentLibrary/Navbars/Navbar3/Navbar3_text";
import Navbar4 from "@/componentLibrary/Navbars/Navbar4/Navbar4";
import Navbar4_text from "@/componentLibrary/Navbars/Navbar4/Navbar4_text";
import Button1 from "@/componentLibrary/Buttons/Button1/Button1";
import Button1_text from "@/componentLibrary/Buttons/Button1/Button1_text";
import Button2 from "@/componentLibrary/Buttons/Button2/Button2";
import Button2_text from "@/componentLibrary/Buttons/Button2/Button2_text";
import Button3 from "@/componentLibrary/Buttons/Button3/Button3";
import Button3_text from "@/componentLibrary/Buttons/Button3/Button3_text";
import Input1 from "@/componentLibrary/Inputs/Input1/Input1";
import Input1_text from "@/componentLibrary/Inputs/Input1/Input1_text";
import Input2 from "@/componentLibrary/Inputs/Input2/Input2";
import Input2_text from "@/componentLibrary/Inputs/Input2/Input2_text";
import Input3 from "@/componentLibrary/Inputs/Input3/Input3";
import Input3_text from "@/componentLibrary/Inputs/Input3/Input3_text";
import Authentication1 from "@/componentLibrary/Authentication/Auth1/Authentication1";
import Authentication1_text from "@/componentLibrary/Authentication/Auth1/Authentication1_text";
import Authentication2 from "@/componentLibrary/Authentication/Auth2/Authentication2";
import Authentication2_text from "@/componentLibrary/Authentication/Auth2/Authentication2_text";
import Card1 from "@/componentLibrary/Cards/Card1/Card1";
import Card1_text from "@/componentLibrary/Cards/Card1/Card1_text";
import Card2 from "@/componentLibrary/Cards/Card2/Card2";
import Card2_text from "@/componentLibrary/Cards/Card2/Card2_text";
import Card3 from "@/componentLibrary/Cards/Card3/Card3";
import Card3_text from "@/componentLibrary/Cards/Card3/Card3_text";
import Footer1 from "@/componentLibrary/Footer/Footer1/Footer1";
import Footer1_text from "@/componentLibrary/Footer/Footer1/Footer1_text";
import Footer2 from "@/componentLibrary/Footer/Footer2/Footer2";
import Footer2_text from "@/componentLibrary/Footer/Footer2/Footer2_text";
import Footer3 from "@/componentLibrary/Footer/Footer3/Footer3";
import Footer3_text from "@/componentLibrary/Footer/Footer3/Footer3_text";

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
    <div className="flex flex-col gap-3 w-full mb-32">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-xl text-black">{componentHeading}</h2>
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={clickedFuncPreview}
            className={`rounded-md font-normal w-fit px-3 py-1 cursor-pointer active:scale-95 border-2 transition-all duration-300 ease-in-out ${
              isClicked ? "text-teal-800 bg-white hover:border-teal-800 hover:scale-[102%]" : "text-white bg-teal-800"
            }`}
          >
            Preview
          </button>
          <button
            onClick={clickedFuncCode}
            className={`rounded-md font-normal w-fit px-3 py-1 cursor-pointer active:scale-95 border-2 transition-all duration-300 ease-in-out ${
              isClicked ? "text-white bg-teal-800" : "text-blue-00 bg-white hover:border-teal-800 hover:scale-[102%]"
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
  <div className="w-full border-2 border-slate-300 rounded-md flex justify-center items-center px-5 py-12">
    {componentProp}
  </div>
);

const ViewCode = ({ componentCode }: { componentCode: JSX.Element }) => (
  <div className="w-full p-3 flex items-start justify-start bg-black rounded-md text-slate-100 overflow-x-scroll" style={{scrollbarWidth: 'none'}}>
    {componentCode}
  </div>
);


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
          key: "Navbar2",
          componentProp: <Navbar2 />,
          ComponentCode: <Navbar2_text />,
        },
        {
          key: "Navbar3",
          componentProp: <Navbar3 />,
          ComponentCode: <Navbar3_text />,
        },
        {
          key: "Navbar4",
          componentProp: <Navbar4 />,
          ComponentCode: <Navbar4_text />,
        },
      ],
    },
    {
      key: "Footer",
      components: [
        
      ],
    },
    {
      key: "Button",
      components: [
        {
          key: "Button1",
          componentProp: <Button1 />,
          ComponentCode: <Button1_text />,
        },
        {
          key: "Button2",
          componentProp: <Button2 />,
          ComponentCode: <Button2_text />,
        },
        {
          key: "Button3",
          componentProp: <Button3 />,
          ComponentCode: <Button3_text />,
        },
      ],
    },
    {
      key: "Input",
      components: [
        {
          key: "Input1",
          componentProp: <Input1 />,
          ComponentCode: <Input1_text />,
        },
        {
          key: "Input2",
          componentProp: <Input2 />,
          ComponentCode: <Input2_text />,
        },
        {
          key: "Input3",
          componentProp: <Input3 />,
          ComponentCode: <Input3_text />,
        }
      ],
    },
    {
      key: "Authentication",
      components: [
        {
          key: "Auth1",
          componentProp: <Authentication1 />,
          ComponentCode: <Authentication1_text />,
        },
        {
          key: "Auth2",
          componentProp: <Authentication2 />,
          ComponentCode: <Authentication2_text />,
        }
      ],
    },
    {
      key: "Cards",
      components: [
        {
          key: "Card1",
          componentProp: <Card1 />,
          ComponentCode: <Card1_text />,
        },
        {
          key: "Card2",
          componentProp: <Card2 />,
          ComponentCode: <Card2_text />,
        },
        {
          key: "Card3",
          componentProp: <Card3 />,
          ComponentCode: <Card3_text />,
        }
      ],
    },
    {
      key: "Footer",
      components: [
        {
          key: "Footer1",
          componentProp: <Footer1 />,
          ComponentCode: <Footer1_text />,
        },
        {
          key: "Footer2",
          componentProp: <Footer2 />,
          ComponentCode: <Footer2_text />,
        },
        {
          key: "Footer3",
          componentProp: <Footer3 />,
          ComponentCode: <Footer3_text />,
        }
      ]
    }
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


