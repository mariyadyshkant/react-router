import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ChiSiamo from './pages/ChiSiamo';

import './index.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="prodotti" element={<Products />} />
            <Route path="chi-siamo" element={<ChiSiamo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
