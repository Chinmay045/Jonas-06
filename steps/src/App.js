const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App() {
  const step = 3;

  function handlePreious() {
    alert("Previous")
  }

  function handleNext() {
    alert("Next");
  }

  return <div className="steps">
    <div className="numbers">
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
    </div>

    <p className="message">Stepp: {step}: {messages[step - 1]}Hello</p>

    <div className="buttons">
      <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }} onClick={handlePreious}>Previous</button>
      <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }} onClick={handleNext}>Next</button>
    </div>
  </div>
}

