import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  function CustomButton(props) {
    const btn_color = props.color;
    const btn_color_text =
      props.color.charAt(0).toUpperCase() + props.color.slice(1);

    if (["yellow", "white", "pink", "purple", "lavender"].includes(btn_color)) {
      console.log("color = ", btn_color);
      return (
        <button
          onClick={() => setColor(btn_color)}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-130"
          style={{ backgroundColor: btn_color }}
        >
          {btn_color_text}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setColor(btn_color)}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-130"
          style={{ backgroundColor: btn_color }}
        >
          {btn_color_text}
        </button>
      );
    }
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <CustomButton color="red" />
            <CustomButton color="green" />
            <CustomButton color="blue" />
            <CustomButton color="olive" />
            <CustomButton color="grey" />
            <CustomButton color="yellow" />
            <CustomButton color="pink" />
            <CustomButton color="purple" />
            <CustomButton color="lavender" />
            <CustomButton color="white" />
            <CustomButton color="black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
