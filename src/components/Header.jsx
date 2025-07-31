import { NavLink } from "react-router-dom";

export default function Header() {
    return (
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
    )

}
