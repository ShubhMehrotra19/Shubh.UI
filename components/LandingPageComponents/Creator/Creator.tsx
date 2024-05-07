"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface Props {}

function Creator(props: Props) {
  const {} = props;

  const form = useRef<HTMLFormElement>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form element not found");
      return;
    }

    emailjs
      .sendForm("service_5qwcdjk", "template_q2q2ikn", form.current, {
        publicKey: "YSJ6WnNGNzfTeoY0A",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error: any) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center md:items-end md:justify-end md:text-right text-center max-w-7xl mx-auto mb-44">
      <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
        Hey There 👋🏽
      </h2>
      <div className="text-slate-400 text-base px-5 md:pl-96 mb-5">
        Hi! I am{" "}
        <span className="text-slate-600 font-semibold">Shubh Mehrotra.</span> I
        hope you liked my personal component library! I have made this with a
        lot of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 font-semibold">
          patience and love
        </span>
        . I hope you find it useful and easy to use. If you have any{" "}
        <span className="font-semibold text-blue-600">
          suggestions or feedback
        </span>
        , feel free to reach out to me on my socials. I would love to hear from
        you 💖!
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex justify-center items-center gap-4"
      >
        <input
          type="email"
          placeholder="   Enter your email"
          name="user_email"
          className="input border-2 border-slate-300 rounded-full py-2 md:pl-3 pl-1 md:pr-12 pr-5"
        />
        <button onClick={handleClick}
          className={`rounded-full w-fit md:text-base text-sm md:px-5 px-3 py-2 bg-black text-white font-medium hover:scale-[102%] active:scale-95 transition duration-300 ease-in-out ${isClicked ? "bg-green-700" : "bg-black"}`}
          type="submit"
        >
          {isClicked ? "Sent! 🤍" : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Creator;
