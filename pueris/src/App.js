import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Map } from './pages/map';
import { Participants } from './pages/participants';
import { NotFound } from './pages/notfound';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Pueri_Cantores_Nacional2026/" element={<Home/>} />
        <Route path="/Pueri_Cantores_Nacional2026/map" element={<Map/>} />
        <Route path="/Pueri_Cantores_Nacional2026/participantes" element={<Participants/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
