import { Routes, Route } from "react-router-dom";
import MainContainer from "../MainContainer";
import HomePage from "@/pages/HomePage";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route index element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoute;
