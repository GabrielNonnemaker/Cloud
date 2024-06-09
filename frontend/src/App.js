// CLOUD > FRONTEND > SRC > App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistroPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para a página de login */}
          <Route path="/login" element={<LoginPage />} />
          {/* Rota para a página de registro */}
          <Route path="/register" element={<RegisterPage />} />
          {/* Rota padrão redireciona para /login */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
