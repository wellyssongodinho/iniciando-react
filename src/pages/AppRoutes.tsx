import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Cart from './Cart';
import Catalog from './Catalog';

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    </BrowserRouter>
  )
}
