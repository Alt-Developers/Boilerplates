import { useState } from "react";
import Starter from "./components/Starter";
import { useDispatch } from "react-redux";
import { modalActions } from "./context/modalSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Starter />
    </>
  );
}

export default App;
