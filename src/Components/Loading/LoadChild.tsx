import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"


const LoadChild = () => {
    const loadRef = useRef(null);
    const tl = gsap.timeline();
    useGSAP(()=>{
        tl.to(loadRef.current,{
            width:"100%",
            duration:1.3,
            delay:0.7,
            ease:"expo"
        }),
        tl.to(loadRef.current,{
            opacity:0
        })
    })
  return (
    <div ref={loadRef} className="w-0 h-full bg-white">LoadChild</div>
  )
}

export default LoadChild