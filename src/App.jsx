import React from "react";
import "./App.css";

import { getRoutes } from "./route";

const App = () => {
  return <div className="App">{getRoutes()}</div>;
};

export default App;
