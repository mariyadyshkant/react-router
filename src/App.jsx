import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import NewProducts from './components/NewProducts'

function App() {


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand fs-5" href="#">Click&Buy</a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Homepage
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Chi siamo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Prodotti</a>
              </li>
            </ul>
          </div>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
      <main>
        <div className="jumbotron p-5 text-center">
          <h1>Welcome to Click&Buy</h1>
          <p>Your one-stop shop for all your needs.</p>
          <button type="button" className="btn btn-light btn-lg mt-5">
            Esplora ora
          </button>
        </div>
        <NewProducts />



      </main >
    </>
  )
}

export default App
