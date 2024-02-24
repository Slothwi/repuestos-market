import Home from './views/Home';
import Favs from './views/Favoritos';
import Cart from './views/Cart';
import Access from './views/Access';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Publicar from './views/Publicar';
import Ventas from './views/ventas';
import Registro from './views/Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='Access' element={<Access />} />
        <Route path='Registro' element={<Registro />}/>
        <Route path='/' element={<Home />} />
        <Route path='Ventas' element={<Ventas />}/>
        <Route path='Favs' element={<Favs />}/>
        <Route path='Publicar' element={<Publicar />}/>
        <Route path='Cart' element={<Cart />}/>
      </Routes>
      </ BrowserRouter>
    </div>
  );
}

export default App;
