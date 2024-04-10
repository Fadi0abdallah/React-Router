
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import Header from './pages/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-me" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
