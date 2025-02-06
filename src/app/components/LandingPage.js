"use client";
import React, { useEffect, useRef, useState } from "react";
import { FacebookIcon, Twitter, TwitterIcon } from "lucide-react";
import Chart from "./Chart";
import RegentMemorySystem from "./RegentMemorySystem";
import SvgComponent from "./SvgComponent";
import Svg from "./Svg";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";
import siteLogo from "../../../public/ageno.png";
import Image from "next/image";
import datawitch from "../../../public/datawitch.png";

const LandingPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const walletAddress = "CA:9ZBYsQCNaR6Ck3KnwWwfWB4dLFKMakCuJaUGAHE8pump";

  // Function to handle copying to clipboard
  const handleCopy = () => {
    // Copy the wallet address to the clipboard
    navigator.clipboard.writeText(walletAddress).then(() => {
      // Set copied state to true to show feedback
      setCopied(true);

      // Reset copied feedback after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  // Function to toggle the visibility of the "Waitlist" section
  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(!isWaitlistOpen); // Toggle the state
  };
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const matrix = "ai($(lskdfjklasdfjasdfklj389457389#8958$*$*$";

    function draw() {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > (canvas?.height ?? 0) &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none blur-[1px]"
      />

      <div className="relative pt-20 sm:pt-52">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl font-bold mb-4 flex flex-col justify-center items-center">
            <Image src={siteLogo} alt="sitelogo" />
          </h1>
          <p className="text-xl mb-8">
            The worlds first open-source architecture for autonomous risk
          </p>

          <p>Contract Address (SOL)</p>
          <div className="flex flex-col items-center mt-4 mb-10 ">
            <button
              className="jsx-bfdfaeb70e6ba3ca flex flex-row items-center justify-between gap-2 p-2 shadow-3xl rounded-md bg-white"
              onClick={handleCopy} // Trigger handleCopy when button is clicked
            >
              <p className="jsx-bfdfaeb70e6ba3ca flex flex-1 text-xs lg:text-sm font-normal text-black text-start">
                <span className="jsx-bfdfaeb70e6ba3ca hidden sm:inline">
                  {walletAddress}
                </span>
                <span className="jsx-bfdfaeb70e6ba3ca sm:hidden">
                  {walletAddress.slice(0, 20)}...pump
                </span>
              </p>
              {copied !== true && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className="jsx-bfdfaeb70e6ba3ca"
                >
                  <rect
                    x="1.25342"
                    y="5"
                    width="14"
                    height="14"
                    rx="3"
                    stroke="black"
                    strokeWidth="2"
                    className="jsx-bfdfaeb70e6ba3ca"
                  ></rect>
                  <rect
                    x="5.25342"
                    y="1"
                    width="14"
                    height="14"
                    rx="3"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                    className="jsx-bfdfaeb70e6ba3ca"
                  ></rect>
                </svg>
              )}
              {/* Feedback: Change icon or show text when copied */}
              {copied && (
                <span className="ml-2 text-black font-bold text-xs">
                  Copied!
                </span>
              )}
            </button>
          </div>

          <button className="bg-[#ff7645] text-black px-8 py-3 rounded flex items-center mx-auto">
            <Twitter className="mr-2" size={20} />
            TALK TO DATAWITCH
          </button>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-center text-2xl mb-12">THE AGENO ARCHITECTURE</h2>
          <Chart />
          <div>
            <p className="text-center mt-8">
              AGENO V2 represents a novel approach to LLM architecture, drawing
              inspiration from Daniel Kahnemans dual-process theory of cognition
              outlined in Thinking Fast and Slow. AGENO implements a split-mind
              system that separates AI responses into distinct intuitive and
              reasoned phases, mirroring the human brains System 1 (fast,
              intuitive) and System 2 (slow, deliberative) thinking processes.
              Combined with a modified RAG memory store, this allows an em to
              truly think step by step in the same way that humans do — with an
              internal reasoning monologue operating over the babble from a
              brilliant but unreliable intuition.
            </p>

            <h1 className="text-4xl mt-12 mb-4 text-center">Core Components</h1>
            <h1 className="text-3xl mt-12 mb-4 text-center">Memory Systems </h1>
            <p className="mt-10 text-center">
              AGENO maintains two distinct long-term memory stores:
            </p>

            <p className="mt-10 text-center">Tweet Memory</p>
            <div className="flex justify-center items-center mt-4 leading-8">
              <ul className="list-disc">
                <li>Stores previous interactions and responses</li>
                <li>Provides context for future interactions</li>
                <li>Allows the system to build upon past experiences</li>
                <li>Automatically updated whenever a tweet is posted</li>
              </ul>
            </div>

            <p className="mt-10 text-center">Lore Memory</p>
            <div className="flex justify-center items-center mt-4 leading-8">
              <ul className="list-disc">
                <li>Contains foundational knowledge </li>
                <li>Stores essential facts and understanding </li>
                <li>Provides baseline context for reasoning </li>
                <li>Acts as the systems knowledge foundation </li>
                <li>Only updated when the em requests it </li>
              </ul>
            </div>

            <h2 className="mt-10 text-xl text-center">Processing Pipeline </h2>

            <p className="mt-10 text-center">
              The AGENO architecture implements a sophisticated pipeline for
              generating and refining responses.
            </p>
          </div>

          <RegentMemorySystem />
        </div>
        <div className="h-[1px] w-full bg-orange-500"></div>

        <div className="py-16">
          <div className="container mx-auto px-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-20">DATAWITCH - A AGENO EM </h2>
            {/* <AnimatedCircles /> */}
            <Image
              src={datawitch}
              alt="Datawitch"
              className="mt-6 w-[8rem] h-[8rem] overflow-hidden rounded-[50%]"
            />

            <p className="mt-8 max-w-3xl">
              Datawitch is an experimental em built on the AGENO split-mind
              architecture. It was initialized with a unique approach based on
              an extensive narrative about Gemma Cifrain, a datacenter
              technician exploring the nature of consciousness and reality. The
              narrative consists of approximately 27,000 words of journal
              entries rich with metaphor and philosophical exploration.
            </p>

            <p className="mt-8 max-w-3xl">
              This foundation, combined with the AGENO architectures memory
              systems and learning capabilities, allows Datawitch to engage with
              the community while building on its initial narrative framework.
              The complete initialization narrative was shared publicly on
              Twitter and remains available here for those interested in
              exploring the origins of Datawitch.
            </p>

            <p className="mt-8 max-w-3xl">
              Datawitch continues to evolve through interactions and learning,
              building on both its narrative foundation and ongoing
              conversations with community members.
            </p>

            <div className="mt-16">
              <button className="border border-[#ff7645] hover:bg-[#ff7645] hover:text-black text-white px-8 py-3 rounded flex items-center mx-auto">
                <Twitter className="mr-2" size={20} />
                TALK TO DATAWITCH
              </button>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#ff7645] my-10"></div>
        {/* Core Components */}
        <div className=" py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl mb-16 text-center">CORE COMPONENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Research Paper",
                "AGENO Whitepaper",
                "DeepSELR KI Integration",
              ].map((title) => (
                <div
                  key={title}
                  className="border-[0.5px] border-[#ff7745e3] flex flex-col justify-center items-center p-6 rounded-lg"
                >
                  <SvgComponent />
                  <div className="h-[2px] bg-white w-[70%] my-8"></div>
                  <h3 className="text-6xl text-center mb-4">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#ff7645] my-10"></div>

        {/* Papers Section */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-2xl mb-8 text-center">PAPERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Datawitch Analysis", "AGENO Whitepaper"].map((title) => (
              <div
                key={title}
                className="border-[0.5px] border-[#ff7745e3] flex flex-col justify-center items-center p-6 rounded-lg"
              >
                <SvgComponent />
                <div className="h-[2px] bg-white w-[70%] my-8"></div>
                <h3 className="text-6xl text-center mb-4">{title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#ff7645] my-10"></div>

        {/* Platform Benefits */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl mb-8 text-center">PLATFORM BENEFITS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Myriad Integration", "Knowledge Update", "Open Source"].map(
                (title, index) => (
                  <div
                    key={title}
                    className="border-[0.5px] border-[#ff7745e3] flex flex-col justify-center items-center p-6 rounded-lg"
                  >
                    {index === 0 && <Svg />}
                    {index === 1 && <Svg2 />}
                    {index === 2 && <Svg3 />}
                    <div className="h-[2px] bg-white w-[70%] my-8"></div>
                    <h3 className="text-6xl text-center mb-4">{title}</h3>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#ff7645] my-10"></div>

        <div className="py-16">
          <div className="container mx-auto px-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-8 text-center">Get Involved </h2>
            <div className="mt-8">
              <p className="text-white">Contract Address (SOL) </p>
            </div>
            <div className="flex flex-col items-center mt-4 mb-10 ">
              <button
                className="jsx-bfdfaeb70e6ba3ca flex flex-row items-center justify-between gap-2 p-2 shadow-3xl rounded-md bg-white"
                onClick={handleCopy} // Trigger handleCopy when button is clicked
              >
                {copied !== true && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    className="jsx-bfdfaeb70e6ba3ca"
                  >
                    <rect
                      x="1.25342"
                      y="5"
                      width="14"
                      height="14"
                      rx="3"
                      stroke="black"
                      strokeWidth="2"
                      className="jsx-bfdfaeb70e6ba3ca"
                    ></rect>
                    <rect
                      x="5.25342"
                      y="1"
                      width="14"
                      height="14"
                      rx="3"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                      className="jsx-bfdfaeb70e6ba3ca"
                    ></rect>
                  </svg>
                )}
                {/* Feedback: Change icon or show text when copied */}
                {copied && (
                  <span className="ml-2 text-black font-bold text-xs">
                    Copied!
                  </span>
                )}

                <p className="jsx-bfdfaeb70e6ba3ca flex flex-1 text-xs lg:text-sm font-normal text-black text-start">
                  <span className="jsx-bfdfaeb70e6ba3ca hidden sm:inline">
                    {walletAddress}
                  </span>
                  <span className="jsx-bfdfaeb70e6ba3ca sm:hidden">
                    {walletAddress.slice(0, 20)}...pump
                  </span>
                </p>
              </button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center w-full gap-5">
              <button className="border border-[#ff7645] hover:[#ff7645] hover:text-white text-[#ff7645] px-8 py-3 rounded flex items-center mx-auto gap-2">
                <FacebookIcon />
                Facebook
              </button>
              <button className="border border-[#ff7645] hover:[#ff7645] hover:text-white text-[#ff7645] px-8 py-3 rounded flex items-center mx-auto gap-2">
                <svg
                  width="32"
                  height="19"
                  viewBox="0 0 1200 1227"
                  fill="#ff7645"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="#ff7645"
                  />
                </svg>
                @schellingwitch
              </button>
              <button className="border border-[#ff7645] hover:[#ff7645] hover:text-white text-[#ff7645] px-8 py-3 rounded flex items-center mx-auto gap-2">
                <svg
                  width="32"
                  height="19"
                  viewBox="0 0 1200 1227"
                  fill="#ff7645"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="#ff7645"
                  />
                </svg>
                @about_ageno
              </button>
              <button className="border border-[#ff7645] hover:[#ff7645] hover:text-white text-[#ff7645] px-8 py-3 rounded flex items-center mx-auto gap-2">
                <svg
                  width="32"
                  height="19"
                  viewBox="0 0 1200 1227"
                  fill="#ff7645"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="#ff7645"
                  />
                </svg>
                @doc_ageno
              </button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <span>© 2025 AGENO</span>
            <div className="flex space-x-6">
              {["Documentation", "Terms"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
