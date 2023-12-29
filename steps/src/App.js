const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App() {
  const step = 2;

  return <div className="steps">
    <div className="numbers">
      <div className="active">1</div>
      <div>2</div>
      <div>3</div>
    </div>

    <p className="message">Step: {step}: {messages[step - 1]}Hello</p>

    <div className="buttons">
      <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>Previous</button>
      <button style={{ backgroundColor: "#7950f2", color: "#ffffff" }}>Next</button>
    </div>
  </div>
}

