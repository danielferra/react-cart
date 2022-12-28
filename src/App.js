import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from './components/Header'
import { Router } from "@reach/router";
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { collection, getDocs} from 'firebase/firestore'
import { useEffect } from "react";
import db from './firebase/firebaseConfig'


function App() {
  useEffect(() => {
    const obtenerDatos = async() =>{
      const datos = await getDocs(collection(db,'usuarios'))
      console.log(datos);
    }
    obtenerDatos();
   }, []);


  const [theme] = useThemeHook();
  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'} style={{height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home path='/' />
        <Cart path='/cart' />
      </Router>
    </main>
  );
}

export default App;
