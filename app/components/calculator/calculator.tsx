import React, { useState } from 'react';

interface CalculatorProps {
    className?: string;
  }

  const Calculator: React.FC<CalculatorProps> = ({ className }) => {
    const [display, setDisplay] = useState("");
  
    const canAddDecimal = () => {
      const lastNumber = display.split(/[\+\-\*\/]/).pop();
      return !lastNumber?.includes(".");
    };
  
    // Handles button clicks, including the percentage logic
    const handleButtonClick = (value: string) => {
      if (value === "AC") {
        setDisplay(""); // Reset display
      } else if (value === "=") {
        try {
          // Handle percentages
          let processedDisplay = display.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
            // Replace percentage (%) with its decimal equivalent, e.g., 50% -> *0.50
            return `*${parseFloat(p1) / 100}`;
          });
  
          // Evaluate the expression
          const result = eval(processedDisplay); // Safely evaluate the processed expression
          setDisplay(result.toString());
        } catch (error) {
          setDisplay("Error"); // Handle errors
        }
      } else {
        setDisplay((prevDisplay) => prevDisplay + value); // Append value to display
      }
    };
  
    const handleDecimal = () => {
      if (display === "" || /[+\-*/]$/.test(display)) {
        setDisplay((prevDisplay) => prevDisplay + ".");
      } else if (canAddDecimal()) {
        setDisplay((prevDisplay) => prevDisplay + ".");
      }
    };


  return (

    <div className={`text-white ${className}`}>
      <div className="rounded-lg w-full sm:w-76 md:w-96 p-2">
        {/*Display Field */}
        <div
  className="relative rounded-full p-4 h-[72px] text-right mb-4 text-lg bg-neutral-800 overflow-hidden group transition-transform duration-100 transform shadow-[0px_10px_15px_rgba(0,0,0,0.2)] col-span-2"
  onClick={() => ("0")}
>
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-full transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-full pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10 text-white text-2xl mt-1 flex justify-end items-start">{display}</span>
</div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4 text-center">
          <button
                        className="relative cursor-pointer rounded-xl col-span-2 p-4 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
                        onClick={() => handleButtonClick("AC")}
                    >
            <div
              style={{
                background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
              }}
              className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
            />
            <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10 animate-slowPulse " />
            <span className="relative z-10">AC</span>
          </button>
          <button
                        className="relative cursor-pointer rounded-xl p-4 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
                        onClick={() => handleButtonClick("%")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">%</span>
</button>
<button
                        className="relative cursor-pointer rounded-xl p-5 text-2xl bg-neutral-800 text-orange-400 hover:text-orange-400 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
                        onClick={() => handleButtonClick("/")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">÷</span>
</button>

          {"789".split("").map((num) => (
  <button
  key={num}
  className="relative cursor-pointer rounded-xl p-5 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
  onClick={() => handleButtonClick(num)}
>
    <div
      style={{
        background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
      }}
      className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
    />
    <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
    <span className="relative z-10 text-center">{num}</span>
  </button>
))}
<button
                        className="relative cursor-pointer rounded-xl p-5 text-2xl bg-neutral-800 text-orange-400 hover:text-orange-400 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
                        onClick={() => handleButtonClick("*")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">×</span>
</button>


{"456".split("").map((num) => (
  <button
  key={num}
  className="relative cursor-pointer rounded-xl p-5 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
  onClick={() => handleButtonClick(num)}
>
    <div
      style={{
        background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
      }}
      className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
    />
    <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
    <span className="relative z-10">{num}</span>
  </button>
))}
<button
                        className="relative cursor-pointer rounded-xl p-5 text-2xl bg-neutral-800 text-orange-400 hover:text-orange-400 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
                        onClick={() => handleButtonClick("-")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">−</span>
</button>

{"123".split("").map((num) => (
  <button
  key={num}
  className="relative cursor-pointer rounded-xl p-5 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
  onClick={() => handleButtonClick(num)}
>
    <div
      style={{
        background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
      }}
      className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
    />
    <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
    <span className="relative z-10">{num}</span>
  </button>
))}
<button
                        className="relative cursor-pointer rounded-xl p-5 text-2xl bg-neutral-800 text-orange-400 hover:text-orange-400 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
                        onClick={() => handleButtonClick("+")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">+</span>
</button>


          <button
                        className="relative cursor-pointer rounded-xl p-5 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)] col-span-2"
                        onClick={() => handleButtonClick("0")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">0</span>
</button>

<button
  className="relative cursor-pointer rounded-xl p-4 text-lg bg-neutral-800 hover:text-neutral-300 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
  onClick={() => handleDecimal()}
>
              <div
                style={{
                  background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
                }}
                className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
              />
              <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
              <span className="relative z-10">.</span>
            </button>

            <button
                        className="relative cursor-pointer text-orange-400 rounded-xl p-4 text-2xl bg-neutral-800 hover:text-orange-400 active:text-white overflow-hidden group transition-transform duration-100 transform hover:scale-95 shadow-[0px_10px_15px_rgba(0,0,0,0.3)] hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)] col-span-1"
                        onClick={() => handleButtonClick("=")}
                    >
  <div
    style={{
      background: `linear-gradient(145deg, rgba(100, 100, 100, 1), rgba(50, 50, 50, 1), rgba(38, 38, 38, 1))`,
    }}
    className="absolute inset-0 rounded-xl transition-all duration-100 bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]"
  />
  <div className="absolute inset-[1px] bg-neutral-800 rounded-xl pointer-events-none transition-shadow duration-100 z-10" />
  <span className="relative z-10">=</span>
</button>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
