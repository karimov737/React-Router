import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import HomeLayout from './Pages/HomeLayout'
import NotFound from './Pages/NotFound'
import Cars from './Pages/Cars'
import CarId from './Pages/CarId'
import ProductsLayout from './Pages/ProductsLayout'
import Products from './Pages/Products'
import Tv from './Components/Products/Tv'
import Phone from './Components/Products/Phone'
import Laptop from './Components/Products/Laptop'

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<HomeLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/cars/:id' element={<CarId />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/products' element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path='tv' element={<Tv />} />
            <Route path='phone' element={<Phone />} />
            <Route path='laptop' element={<Laptop />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App