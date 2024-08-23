import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import orangeCut from "./assets/orange2.png";
import fanta from "./assets/fanta.png";
import orange from "./assets/orange.webp";
import leaf from "./assets/leaf.webp";
import leaf2 from "./assets/leaf2.png";
import cocacola from "./assets/cocacola.png";
import pepsi from "./assets/pepsi.png";
import coconutleaf from "./assets/coconoutleaf.png";
import lemon from "./assets/lemon.webp";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const menuIconRef = useRef(null);
  const navtlRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".second",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(
      "#fanta",
      {
        top: "120%",
        left: "0%",
      },
      "orange"
    )
      .to(
        "#orange-cut",
        {
          top: "160%",
          left: "23%",
        },
        "orange"
      )
      .to(
        "#orange",
        {
          width: "15%",
          top: "160%",
          right: "10%",
        },
        "orange"
      )
      .to(
        "#leaf",
        {
          top: "110%",
          rotate: "130deg",
          left: "70%",
        },
        "orange"
      )
      .to(
        "#leaf2",
        {
          top: "110%",
          rotate: "130deg",
          left: "0%",
        },
        "orange"
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl2
      // .from(
      //   ".lemon1",
      //   {
      //     rotate: "-90deg",
      //     left: "-100%",
      //     top: "110%",
      //   },
      //   "ca"
      // )
      // .from(
      //   "#cocacola",
      //   {
      //     rotate: "-90deg",
      //     top: "110%",
      //     left: "-100%",
      //   },
      //   "ca"
      // )
      // .from(
      //   ".lemon2",
      //   {
      //     rotate: "90deg",
      //     left: "100%",
      //     top: "110%",
      //   },
      //   "ca"
      // )
      // .from(
      //   "#pepsi",
      //   {
      //     rotate: "90deg",
      //     top: "110%",
      //     left: "100%",
      //   },
      //   "ca"
      // )

      .to(
        "#orange-cut",
        {
          left: "40%",
          top: "200%",
        },
        "ca"
      )
      .to(
        "#fanta",
        {
          top: "208%",
          left: "30%",
        },
        "ca"
      );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        start: "0% 50%",
        end: "20% 15%",
        scrub: true,
        // markers: true,
      },
    });

    tl3
      .to(
        ".lemon1",
        {
          rotate: "-90deg",
          left: "9%",
          top: "0%",
        },
        "ca"
      )
      .to(
        "#cocacola",
        {
          rotate: "0deg",
          top: "-20%",
          left: "22%",
        },
        "ca"
      )
      .to(
        ".lemon2",
        {
          rotate: "90deg",
          right: "9%",
          top: "0%",
        },
        "ca"
      )
      .to(
        "#pepsi",
        {
          rotate: "0deg",
          top: "-20%",
          left: "50%",
        },
        "ca"
      );

    const navtl = gsap.timeline({ paused: true });

    navtl.to(".fullnav", {
      right: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });

    navtl.to(".fullnav h4", {
      duration: 0.5,
      stagger: 0.3,
      right: "0%",
      opacity: 1,
    });

    navtlRef.current = navtl;
  }, []);

  const handleMenuClick = () => {
    console.log(menuIconRef.current);

    if (navtlRef.current) {
      navtlRef.current.play();
    }
  };
  const handleCloseClick = () => {
    if (navtlRef.current) {
      navtlRef.current.timeScale(1).reverse(); // Play in reverse at double speed
    }
  };

  return (
    <div id="main" className="w-screen  bg-orange-600 overflow-hidden relative">
      <nav className="fixed flex items-center justify-between w-full h-[10vh] p-0 px-[10vw] z-50 font-bold">
        <a href="#" className="text-white text-[1vw] no-underline">
          ABHISHEK
        </a>
        <div className="flex gap-[3vw]">
          <a href="#" className="text-white text-[1vw] no-underline">
            Home
          </a>
          <a href="#" className="text-white text-[1vw] no-underline">
            Products
          </a>
          <a href="#" className="text-white text-[1vw] no-underline">
            Shop
          </a>
          <a href="#" className="text-white text-[1vw] no-underline">
            Contact
          </a>
        </div>
        <i
          className="text-white text-[2vw] cursor-pointer"
          ref={menuIconRef}
          onClick={handleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </i>
      </nav>

      <div className="fullnav flex flex-col fixed top-0 right-[-40%] w-[40%] h-screen  z-50 justify-center align-center pl-6">
        <i
          className="text-black text-[3vw] cursor-pointer absolute top-4 right-4 "
          onClick={handleCloseClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 "
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </i>

        <h4 className="text-[7vw] relative right-[-30%] opacity-0 font-bold">
          {" "}
          Home
        </h4>
        <h4 className="text-[7vw] relative right-[-30%] opacity-0 font-bold">
          {" "}
          Products
        </h4>
        <h4 className="text-[7vw] relative right-[-30%] opacity-0 font-bold">
          {" "}
          Shop
        </h4>
        <h4 className="text-[7vw] relative right-[-30%] opacity-0 font-bold">
          {" "}
          Contact
        </h4>
      </div>

      <div className="first relative flex items-center justify-center w-full h-screen bg-gradient-to-br from-orange-400 to-orange-600">
        <h1 className="text-[25vw] text-white font-bold absolute">FANTA</h1>
        <img
          id="orange-cut"
          src={orangeCut}
          alt="Orange cut"
          className="absolute top-[10%] left-[32%] w-[20%] transition-all duration-500 ease-in-out z-10"
        />
        <img
          id="fanta"
          src={fanta}
          alt="Fanta bottle"
          className="absolute w-[40%] transition-all duration-500 ease-in-out z-20"
        />
        <img
          id="orange"
          src={orange}
          alt="Orange"
          className="absolute top-[55%] right-[30%] w-[20%] transition-all duration-500 ease-in-out"
        />
        <img
          id="leaf"
          src={leaf}
          alt="Leaf"
          className="absolute top-[10%] left-0 w-[18%] rotate-[60deg] transition-all duration-500 ease-in-out"
        />
        <img
          id="leaf2"
          src={leaf2}
          alt="Leaf 2"
          className="absolute top-[70%] left-[80%] w-[12%] rotate-[-90deg] transition-all duration-500 ease-in-out"
        />
        <img
          id="leaf3"
          src={coconutleaf}
          alt="Coconut leaf"
          className="absolute top-[10%] right-0 w-[20%] transition-all duration-500 ease-in-out"
        />
      </div>

      <div className="second flex w-full h-screen bg-[#4d231c]">
        <div className="flex flex-col items-center justify-center gap-[5vh] w-1/2 h-full">
          {/* Left side content here */}
        </div>
        <div className="flex flex-col items-center justify-center gap-[5vh] w-1/2 h-full">
          <h1 className="text-white text-[5vw]">Flavour Updated</h1>
          <p className="text-white text-[1vw] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
        </div>
      </div>

      <div className="third relative flex items-center justify-center gap-[5vw] w-full h-screen bg-gradient-to-br from-orange-400 to-orange-600 pt-10">
        <div className="relative flex flex-col items-center justify-center gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
          <img
            id="cocacola"
            src={cocacola}
            alt="Coca Cola"
            className="absolute top-[30%] w-[60%] left-[-30%] transform-translate-x-1/2 transition-all duration-500 ease-in-out rotate-[-35deg] z-20"
          />
          <h1 className="mt-[40vh] text-[3vw]">CocaCola</h1>
          <button className="text-white bg-orange-500 rounded-full border-none text-[1vw] py-[1vw] px-[2vw]">
            Buy Now
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
          <h1 className="mt-[40vh] text-[3vw]">Fanta</h1>
          <button className="text-white bg-orange-500 rounded-full border-none text-[1vw] py-[1vw] px-[2vw]">
            Buy Now
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
          <img
            id="pepsi"
            src={pepsi}
            alt="Pepsi"
            className="absolute top-[50%] w-[85%] right-[-100%] transform -translate-x-1/2 transition-all duration-500 ease-in-out rotate-[35deg] z-20"
          />
          <h1 className="mt-[40vh] text-[3vw]">Pepsi</h1>
          <button className="text-white bg-orange-500 rounded-full border-none text-[1vw] py-[1vw] px-[2vw]">
            Buy Now
          </button>
        </div>

        <img
          className="lemon1 absolute top-[70%] left-[10%] w-[24%] transition-all duration-500 ease-in-out"
          src={lemon}
          alt="Lemon 1"
        />
        <img
          className="lemon2 absolute right-[-10%] top-[70%] w-[24%] transition-all duration-500 ease-in-out"
          src={lemon}
          alt="Lemon 2"
        />
      </div>
    </div>
  );
}
