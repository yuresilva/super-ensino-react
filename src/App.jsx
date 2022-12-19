import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppContextProvider } from "./Context/AppContextProvider";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
