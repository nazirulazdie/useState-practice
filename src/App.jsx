import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // Initialize step state
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevClick() {
    // Logic for previous step
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextClick() {
    // Logic for next step
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button className="prev" onClick={handlePrevClick}>
              Previous
            </button>
            <button className="next" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
