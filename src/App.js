import React from "react";
import "./App.css";
import Home from "./Components/Home";
import AppRouter from "./router/router";
function App() {
  return (
    <AppRouter className="App">
      <Home />
    </AppRouter>
  );
}

export default App;
