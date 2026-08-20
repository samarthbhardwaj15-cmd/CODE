import "./index.css";
import Canvas from "./canvas.jsx";

function Tutorial() {
    return (
    <>
    <div className="w-full min-h-screen bg-black text-white">
        <h1>Hello</h1>
        {/* <Canvas setIndex={0} />
        <canvas setIndex={150} /> */}
        {data.map((item, index) =>(
            <div key={index}>
                {item.map((canvasdets, index) => (
                    <Canvas details={canvasdets} />
                ))}
            </div>
        ))}
    </div>
    </>
    );
}
export default Tutorial; 