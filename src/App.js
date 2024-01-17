/* eslint-disable jsx-a11y/anchor-is-valid */

import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      {/* 
      Basic
      &dollar;19.99
      &dollar;199.99
      500 GB Storage
      2 Users Allowed
      Send up to 3 GB
      Learn More

      Professional
      &dollar;24.99
      &dollar;249.99
      1 TB Storage
      5 Users Allowed
      Send up to 10 GB
      Learn More

      Master
      &dollar;39.99
      &dollar;399.99
      2 TB Storage
      10 Users Allowed
      Send up to 20 GB
      Learn More */}

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
