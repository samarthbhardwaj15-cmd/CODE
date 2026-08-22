import { useEffect, useRef } from "react";
import canvasImage from "./canvasimage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
    const { startIndex, numImages, duration } = details;
    const [index, setIndex] = useState({value: startIndex });
    const canvasref = useRef(null);
    useGSAP (() => {
        gsap.to(index, {
            value: startIndex + numImages - 1,
            duration: duration,
            ease: "linear",
            repeat: -1,
            ease: "linear",
            onUpdate: () => {
                setIndex({value: Math.round(index.value) });
            },    
        });
    });
    useEffect(() => { 
         const scale = window.devicePixelRatio;
        // const canvas = document.getElementById("canvas");
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasImage[index.value];
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [index]);

    return (
    <canvas 
    ref={canvasRef}
    style={{
        width: `${size * 1.2}px`,
        height: `${size * 1.2}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
    }} 
    className={`w-[${size}px] h-[${size}px]`}
    id="canvas"
    ></canvas>
    );
}

export default Canvas;
