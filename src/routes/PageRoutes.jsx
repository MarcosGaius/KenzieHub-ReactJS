import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function PageRoutes() {
  const [isLoading, setIsLoading] = useState(false);

  const doesTokenExistsOnLocalStorage = () => {
    const id = localStorage.getItem("@kenziehub:userId");
    const token = localStorage.getItem("@kenziehub:token");

    if (id === null || token === null) {
      return false;
    }

    return true;
  };

  const isTokenValid = () => {
    const token = localStorage.getItem("@kenziehub:token");
    const tokenArray = token.split(".");
    const decodedPayload = JSON.parse(atob(tokenArray[1]));
    const tokenExp = Number(decodedPayload.exp + "000");
    const currentDate = Date.now();

    if (currentDate >= tokenExp) {
      return false;
    }
    return true;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isTokenValid={isTokenValid}
            doesTokenExistsOnLocalStorage={doesTokenExistsOnLocalStorage}
          />
        }
      />
      <Route
        path="/login"
        element={<Login isLoading={isLoading} setIsLoading={setIsLoading} />}
      />
      <Route
        path="/register"
        element={<Register isLoading={isLoading} setIsLoading={setIsLoading} />}
      />
    </Routes>
  );
}
