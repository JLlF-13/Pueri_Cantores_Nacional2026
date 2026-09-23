import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Map } from './pages/map';
import { Participants } from './pages/participants';
import { NotFound } from './pages/notfound';
import { Telefonos } from './pages/telefonos';
import { Partituras } from './pages/partituras';
import { Galeria } from './pages/galeria';
import { Patrocinadores } from './pages/Patrocinadores';
import { OrganitzacioCongres } from './pages/Organizacion';
import { OrganistaOficial } from './pages/OrganistaOficial';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Pueri_Cantores_Nacional2026/" element={<Home/>} />
        <Route path="/Pueri_Cantores_Nacional2026/map/" element={<Map/>} />
        <Route path="/Pueri_Cantores_Nacional2026/participantes/" element={<Participants/>} />
        <Route path="/Pueri_Cantores_Nacional2026/telefonos/" element={<Telefonos/>} />
        <Route path="/Pueri_Cantores_Nacional2026/partituras/" element={<Partituras/>} />
        <Route path="/Pueri_Cantores_Nacional2026/galeria/" element={<Galeria/>} />
        <Route path="/Pueri_Cantores_Nacional2026/prensa/" element={<Galeria/>} /> 
        <Route path="/Pueri_Cantores_Nacional2026/musicos/" element={<OrganistaOficial/>} /> 
        {/* <Route path="/Pueri_Cantores_Nacional2026/organitzaciocongres/" element={<OrganitzacioCongres/>} />  */}
        <Route path="/Pueri_Cantores_Nacional2026/patrocinadores/" element={<Patrocinadores/>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
