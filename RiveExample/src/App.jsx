import { useRive } from "@rive-app/react-canvas";
import light_like from "/little_boy.riv";

function App() {
  const { rive, RiveComponent } = useRive({
    src: light_like,
    animations: ["Hair Wind"], // Initialize with a default animation (if needed)
    autoplay: false,
  });

  // Function to play the "Hover" animation
  const handleMouseOver = () => {
    rive && rive.play("Hover");
  };

  // Function to play the "UnHover" animation
  const handleMouseOut = () => {
    rive && rive.play("UnHover");
  };

  // Function to play the "Blink" animation on button click
  const handleBlink = () => {
    rive && rive.play("Blink");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <RiveComponent
          className="w-64 h-64"
          onMouseOver={handleMouseOver} // Play "Hover" animation on hover
          onMouseOut={handleMouseOut} // Play "UnHover" animation on mouse out
        />
        <h1 className="text-4xl text-center">hello</h1>
        <button
          onClick={handleBlink}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Blink
        </button>
      </div>
    </>
  );
}

export default App;
