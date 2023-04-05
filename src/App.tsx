import React from 'react';
import Main from "./pages/Main/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
        <Main />
        <ToastContainer position='bottom-right'/>
    </div>
  );
}

export default App;
