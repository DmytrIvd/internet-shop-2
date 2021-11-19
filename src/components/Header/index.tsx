import { Link } from 'react-router-dom';

function Header() {
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Internet shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    {/* <li className="nav-item">
                        <Link to="/item/1" className="nav-link">View item 1</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/bascet" className="nav-link">Bascet</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/add-item" className="nav-link">Add new item</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
}

export default Header;