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
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const menuIconRef = useRef(null);
  const navtlRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true,
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
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl2
      .from(
        ".lemon1",
        {
          rotate: "-90deg",
          left: "-100%",
          top: "110%",
        },
        "ca"
      )
      .from(
        "#cocacola",
        {
          rotate: "-90deg",
          top: "110%",
          left: "-100%",
        },
        "ca"
      )
      .from(
        ".lemon2",
        {
          rotate: "90deg",
          left: "100%",
          top: "110%",
        },
        "ca"
      )
      .from(
        "#pepsi",
        {
          rotate: "90deg",
          top: "110%",
          left: "100%",
        },
        "ca"
      )
      .to(
        "#orange-cut",
        {
          width: "18%",
          left: "42%",
          top: "204%",
        },
        "ca"
      )
      .to(
        "#fanta",
        {
          width: "35%",
          top: "210%",
          left: "33%",
        },
        "ca"
      );

    const navtl = gsap.timeline({ paused: true });

    navtl.to(".fullnav", {
      right: 0,
      duration: 0.6,
    });

    navtl.from(
      ".fullnav h4",
      {
        duration: 0.7,
        stagger: 0.3,
   
      }
    );
    
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
      navtlRef.current.reverse();
    }
  }; 
  return (
    <div
      id="main"
      className="w-screen h-screen bg-orange-600 overflow-x-hidden relative"
    >
      <nav className="fixed flex items-center justify-between w-full h-[10vh] p-0 px-[10vw] z-50">
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

      <div className="fullnav flex flex-col fixed top-0 right-[-40%] w-[40%] h-screen  z-50 justify-center align-center ">

      <i
          className="text-black text-[3vw] cursor-pointer absolute top-4 right-4"
          onClick={handleCloseClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </i>

        <h4 className="text-[7vw] font-bold"> Home</h4>
        <h4 className="text-[7vw] font-bold"> Products</h4>
        <h4 className="text-[7vw] font-bold"> Shop</h4>
        <h4 className="text-[7vw] font-bold"> Contact</h4>
      </div>

      <div className="first relative flex items-center justify-center w-full h-screen bg-gradient-to-br from-orange-400 to-orange-600">
        <h1 className="text-[25vw] text-white font-bold absolute">FANTA</h1>
        <img
          decoding="async"
          id="orange-cut"
          src={orangeCut}
          alt="Orange cut"
          className="absolute top-[10%] left-[32%] w-[15%] transition-all duration-500 ease-in-out"
        />
        <img
          decoding="async"
          id="fanta"
          src={fanta}
          alt="Fanta bottle"
          className="absolute w-[40%] transition-all duration-500 ease-in-out"
        />
        <img
          decoding="async"
          id="orange"
          src={orange}
          alt="Orange"
          className="absolute top-[55%] right-[30%] w-[20%] transition-all duration-500 ease-in-out"
        />
        <img
          decoding="async"
          id="leaf"
          src={leaf}
          alt="Leaf"
          className="absolute top-[10%] left-0 w-[18%] rotate-[60deg] transition-all duration-500 ease-in-out"
        />
        <img
          decoding="async"
          id="leaf2"
          src={leaf2}
          alt="Leaf 2"
          className="absolute top-[70%] left-[80%] w-[12%] rotate-[-90deg] transition-all duration-500 ease-in-out"
        />
        <img
          decoding="async"
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

      <div className="third relative flex items-center justify-center gap-[5vw] w-full h-screen bg-gradient-to-br from-orange-400 to-orange-600">
        <div className="relative flex flex-col items-center justify-center gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-[20px] bg-white">
          <img
            decoding="async"
            id="cocacola"
            src={cocacola}
            alt="Coca Cola"
            className="absolute top-[-15%] w-[60%] left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
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
            decoding="async"
            id="pepsi"
            src={pepsi}
            alt="Pepsi"
            className="absolute top-[-15%] w-[85%] left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
          />
          <h1 className="mt-[40vh] text-[3vw]">Pepsi</h1>
          <button className="text-white bg-orange-500 rounded-full border-none text-[1vw] py-[1vw] px-[2vw]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
