import { useState } from "react";
import "./App.css";
import Booking from "./Booking";

function App() {
  const [stepsDone, setStepsDone] = useState(0);
  const [activeCta, setActiveCta] = useState(false);
  return (
    <div className="App">
      <div className="header" />
      <Booking
        stepsDone={stepsDone}
        setStepsDone={setStepsDone}
        setActiveCta={setActiveCta}
      />
      <div className="footer">
        <div
          className="next-cta"
          style={{ opacity: activeCta ? 1 : 0.4 }}
          onClick={() => activeCta && setStepsDone(stepsDone + 1)}
        >
          {stepsDone < 3 ? "Next" : "Submit"}
        </div>
      </div>
    </div>
  );
}

export default App;
