import React from "react";
import ComponentGridCard from "./ComponentGridCard";

interface Props {}

function ComponentsGridDisplay(props: Props) {
  const {} = props;

  const dummyData = [
    {
      imageLink:
        'https://images.pexels.com/photos/17815054/pexels-photo-17815054/free-photo-of-scenic-view-of-the-three-peaks-of-lavaredo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      componentName: "Navbar",
    },
    {
      imageLink:
        'https://images.pexels.com/photos/17815054/pexels-photo-17815054/free-photo-of-scenic-view-of-the-three-peaks-of-lavaredo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      componentName: "Footer",
    },
    {
      imageLink:
        'https://images.pexels.com/photos/17815054/pexels-photo-17815054/free-photo-of-scenic-view-of-the-three-peaks-of-lavaredo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      componentName: "Cards",
    },
    {
      imageLink:
        'https://images.pexels.com/photos/17815054/pexels-photo-17815054/free-photo-of-scenic-view-of-the-three-peaks-of-lavaredo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      componentName: "Signin",
    },
    {
      imageLink:
        'https://images.pexels.com/photos/17815054/pexels-photo-17815054/free-photo-of-scenic-view-of-the-three-peaks-of-lavaredo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      componentName: "Signup",
    },
    {
      imageLink:
        'https://images.pexels.com/photos/17815054/pexels-photo-17815054/free-photo-of-scenic-view-of-the-three-peaks-of-lavaredo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
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
