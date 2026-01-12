import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import AppProvider from "./context/AppProvider";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <AppProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" Component={Homepage} />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;
