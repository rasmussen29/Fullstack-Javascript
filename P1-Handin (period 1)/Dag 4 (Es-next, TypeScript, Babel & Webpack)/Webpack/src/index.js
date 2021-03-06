import _ from "lodash";
import "./styles.css";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");

  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";

  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();

document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Updating print.js...");
    document.body.removeChild(element);

    element = component(); 

    document.body.appendChild(element);
  });
}
