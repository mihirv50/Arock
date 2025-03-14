import { useGSAP } from "@gsap/react";
import CenterText from "../Hero/CenterText";
import Nav from "../Navbar/Nav";
import gsap from "gsap";
import { useRef } from "react";

export const Home = () => {
  const homeRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(() => {
    gsap.to(homeRef.current, {
      y: "-100%",
      duration: 1,
      delay: 1.3,
    });
    gsap.from(pageRef.current,{
        opacity:0,
        delay:1.4,
        duration:0.8,
        y:50,
        scale:1.05
    })
  });
  return (
    <>
      <div className="h-screen">
        <div ref={homeRef} className="h-screen w-full bg-[#111] z-10 fixed"></div>
        <div
          ref={pageRef}
          className='opactiy-1 w-screen h-screen bg-center bg-cover bg-[url("https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop")] text-white'
        >
          <Nav />
          <CenterText />
        </div>
      </div>
    </>
  );
};
