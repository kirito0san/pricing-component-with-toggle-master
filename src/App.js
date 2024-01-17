/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Main from "./Main";
import top from "./images/bg-top.svg"
import bottom from "./images/bg-bottom.svg"
function App() {
  const [Monthly, setMonthly] = useState(true);
  return (
    <div className="App bg-no-repeat min-h-[100vh] ">
      <img className=" -z-10 absolute -top-[50px] -right-[200px] md:right-0  " src={top} alt="" />
      <img className=" -z-10 absolute w-0 md:w-auto bottom-0 left-0 " src={bottom} alt="" />
      <Main />
      <Header />
      <div class="w-[90%] text-[#a3a8f0] mt-5 mx-auto">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mostafa & Ahmed</a>.
      </div>
    </div>
  );
}

export default App;
