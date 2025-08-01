import { NavLink } from "react-router-dom";

export default function Navbar() {
    const menu = [
        { id: 1, name: "Homepage", path: "/" },
        { id: 2, name: "Prodotti", path: "/prodotti" },
        { id: 3, name: "Chi Siamo", path: "/chi-siamo" }
    ];
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand fs-5" href="#">Click&Buy</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {menu.map(item => (
                            <li className="nav-item" key={item.id}>
                                <NavLink className="nav-link" to={item.path}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="d-flex my-2 my-lg-0">
                    <input
                        className="form-control me-sm-2"
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </nav>
        </>
    )
}
