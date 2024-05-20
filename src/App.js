import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import Home from './Paginas/Home';
import Footbar from './Componentes/Footbar';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
      {/* footbar */}
      <Footbar/>
    </div>
  );
}

export default App;
