import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentContextProvider from "./CommentContext";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <CommentContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/comment/create/" element={<HomePage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </CommentContextProvider>
  );
};

export default App;
