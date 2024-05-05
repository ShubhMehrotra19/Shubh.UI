import React from "react";
import ComponentGridCard from "./ComponentGridCard";
import NavbarImg from '@/public/components/Navbar.png';
import FooterImg from '@/public/components/Footer.png';
import CardImg from '@/public/components/Card.png';
import ButtonImg from '@/public/components/Button.png';
import InputImg from '@/public/components/Input.png';
import AuthenticationImg from '@/public/components/Authentication.png';

interface Props {}

function ComponentsGridDisplay(props: Props) {
  const {} = props;

  const dummyData = [
    {
      imageLink: NavbarImg,
      componentName: "Navbar",
    },
    {
      imageLink: FooterImg,
      componentName: "Footer",
    },
    {
      imageLink: CardImg,
      componentName: "Cards",
    },
    {
      imageLink: ButtonImg,
      componentName: "Button",
    },
    {
      imageLink: InputImg,
      componentName: "Input",
    },
    {
      imageLink: AuthenticationImg,
      componentName: "Authentication",
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
