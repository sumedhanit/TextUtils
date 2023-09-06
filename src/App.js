import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import React, { useState } from "react";
// import About from "./Components/About";
function App() {
  const [Mode, setMode] = useState("light");
  // setMode("dark");
  const handleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f2532";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="textUtils" mode={Mode} toggleMode={handleMode} />
      {/* <Navbar /> */}
      <div className="container my-3 ">
        <Form heading="Enter the text to analyse" mode={Mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
