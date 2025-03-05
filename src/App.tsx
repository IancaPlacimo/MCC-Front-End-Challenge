import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Listagem from "./components/Listagem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="app">
      {}
      {!isLoginPage && <Header />}

      <main>
        <Routes>
          <Route path="/listagem" element={<Listagem />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
