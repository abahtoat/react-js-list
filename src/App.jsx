import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/Gallery';
import Pegawai from './pages/pegawai';
import Keranjang from './pages/Keranjang';
import Agenda from './pages/agenda';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"



function App() {
  return (
    <div className="">
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Link className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/home"
          >
            Home
          </Link>
          <Link className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/about"
          >
            About
          </Link>

          <Link className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/Gallery"
          >
            Gallery
          </Link>

          <Link className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/Keranjang"
          >
            Keranjang
          </Link>

          <Link className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/agenda"
          >
            Agenda
          </Link>

          <Link className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/pegawai"
          >
            Pegawai
          </Link>

        </div>

        <div className="p-6 w-full bg-white rounded-x1 shadow-lg">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/keranjang" element={<Keranjang />}></Route>
            <Route path="/agenda" element={<Agenda />}></Route>
            <Route path="/pegawai" element={<Pegawai />}></Route>

          </Routes>
        </div>
      </div>
    </div>

  );
}


export default App;
