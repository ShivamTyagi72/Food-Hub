import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=> object =>HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Shivam Tyagi 🚀");
//JSX
const elem = <span>react element</span>;

const Heading = () => (
  <h1 className="head" tabIndex="1">
    {elem} Namaste From Shivam 🚀
  </h1>
);
const number = 1000;

const HeadingComponent = () => (
  <div>
    <Heading />
    <Heading />
    <Heading />
    <Heading />
    <h1>{number}</h1>

    <h1 id="heading">Hlo from functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
