import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("7f383a610d4ef2c7307e56fbccc458e8");
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
