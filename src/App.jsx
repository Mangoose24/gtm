import React from "react";
import Logo from "./components/Logo";
import Slider from "./components/Slider";
import { LampContainer } from "./components/ui/lamp";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col overflow-y-hidden">
      {/* Header with Logo */}
      {/* <header className="relative z-50 w-full"> */}
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <Logo />
      </div>
      {/* </header> */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center sm:justify-center">
        {/* Lamp Effect with Content */}
        <LampContainer className="w-full">
          {/* Image Slider positioned under the lamp */}
          <div className="relative z-50 flex justify-center items-center -mt-45 sm:-mt-40 w-full">
            <div className="container mx-auto px-2 sm:px-4 max-w-xs sm:max-w-4xl">
              <Slider />
            </div>
          </div>

          {/* Text */}
          <div className="relative z-50 w-full text-center text-white mt-6 sm:mt-8 pb-8">
            <h2 className="font-jersey text-xl sm:text-2xl md:text-4xl font-light tracking-wide px-4">
              Website coming soon...
            </h2>
          </div>
        </LampContainer>
      </main>
    </div>
  );
}

export default App;
