/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import Main from "./Main";

function App() {
  const [Monthly, setMonthly] = useState(true);
  return (
    <div className="App">
      <Main Monthly={Monthly} />

      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
