import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import HeaderSection from "./sections/Header";
import AltcoinSection from "./sections/Altcoin";
import HeadphoneSection from "./sections/Headphone";

ReactDOM.render(
  <>
    <HeaderSection />
    <AltcoinSection />
    <HeadphoneSection />
  </>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
