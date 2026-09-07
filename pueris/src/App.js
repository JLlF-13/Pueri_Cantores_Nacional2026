import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Map } from './pages/map';
import { Participants } from './pages/participants';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/participants" element={<Participants/>} />
      </Routes>
    </div>
  );
}

export default App;
