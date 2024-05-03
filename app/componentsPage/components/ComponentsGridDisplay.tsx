import React from "react";
import ComponentGridCard from "./ComponentGridCard";
import NavbarImg from '@/public/components/Navbar.png';

interface Props {}

function ComponentsGridDisplay(props: Props) {
  const {} = props;

  const dummyData = [
    {
      imageLink: NavbarImg,
      componentName: "Navbar",
    },
    {
      imageLink: NavbarImg,
      componentName: "Footer",
    },
    {
      imageLink: NavbarImg,
      componentName: "Cards",
    },
    {
      imageLink: NavbarImg,
      componentName: "Signin",
    },
    {
      imageLink: NavbarImg,
      componentName: "Signup",
    },
    {
      imageLink: NavbarImg,
      componentName: "Input",
    }
  ];
  

  return (
    <div className="flex flex-col justify-start items-start w-full mb-12">
      <h2 className="mb-12 md:text-4xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
        Components
      </h2>
      <section className="w-[90%] place-content-center mx-auto grid md:grid-cols-3 md:gap-20 gap-12">
        {
            dummyData.map((data, index) => (
                <ComponentGridCard key={index} imageLink={data.imageLink} componentName={data.componentName} />
            ))
        }
      </section>
    </div>
  );
}

export default ComponentsGridDisplay;
