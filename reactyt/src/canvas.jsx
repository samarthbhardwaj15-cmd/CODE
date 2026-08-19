import { useEffect, useRef } from "react";
import canvasImage from "./canvasimage";

function Canvas() {
    
    const canvasref = useRef(null);
    useEffect ( () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasImage[0];
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    });
    return <canvas ref={canvasRef} id="canvas"></canvas>;
}

export default Canvas;
