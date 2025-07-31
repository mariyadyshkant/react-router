import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import NewProducts from './components/NewProducts'

import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={DefaultLayout}>
            <Route index Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>

      // <main>
      //   <div className="jumbotron p-5 text-center">
      //     <h1>Welcome to Click&Buy</h1>
      //     <p>Your one-stop shop for all your needs.</p>
      //     <button type="button" className="btn btn-light btn-lg mt-5">
      //       Esplora ora
      //     </button>
      //   </div>
      //   <NewProducts />



      // </main >
    </>
  )
}
