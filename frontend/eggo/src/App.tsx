import React from "react";
import "./App.css";
import { Home, Test } from "./views";
import { Navigate, Route, Routes } from "react-router";

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
