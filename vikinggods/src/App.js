import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';

const App = () => {
   return (
      //ROTAS TELAS HOME E LOGIN
      <div>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login/*" element={<Login/>}/>
            </Routes>
            <Footer />
            </BrowserRouter>
      </div>
      // EM ROUTE /LOGIN/* O ASTERISTICO INDICA QUE HAVERÁ OUTRAS ROTAS
   );
}

export default App;