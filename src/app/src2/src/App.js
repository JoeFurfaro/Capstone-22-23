import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
