import "./index.css";
import Canvas from "./canvas.jsx";

function Tutorial() {
    return (
    <>
    <div className="w-full min-h-screen bg-black text-white">
        <h1>Hello</h1>
        {/* <Canvas setIndex={0} />
        <canvas setIndex={150} /> */}
        {data[0].map((item, index) =>(
            // <div key={index}>
                // {item.map((canvasdets, index) => (
                    <Canvas details={canvasdets} />
            //     ))}
            // </div>
        ))}
        <div className="w-full h-screen text-white">
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50"></nav>
            <div className="textcontainer w-full px-[20%] brand text-2xl font-regular">thirtysixstudios</div>
            <div className="text w"></div>
            <div className="links flex gap-10">
                {["Home", "About", "Projects", "Contact"].map((link, index) => (
                    <a
                    href="`#${link.toLowerCase()}`}">
                    key={index}
                    className="text-md hover:text-gray-300"   
                    >
                    {link}    
                    </a> 
                ))}
                <h3>
                    The
                </h3>
            </div>
        </div>
    </div>
    </>
    );
}
export default Tutorial; 