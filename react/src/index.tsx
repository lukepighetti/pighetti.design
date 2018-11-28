import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import HeaderSection from "./sections/Header";

ReactDOM.render(
  <>
    <HeaderSection />
  </>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
