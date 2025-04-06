import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Menu = () => {
    return (
        <header className="App-header text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/project1" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">1 praktinis darbas</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li>
                                        <Link className="dropdown-item" to="/project1/task1">1. Užduotis: Užduočių sąrašas</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/project1/task2">2. Užduotis: Krepšelio sistema</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/project1/task3">3. Užduotis: Skaičių spėjimo žaidimas</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/project2" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Project 2</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                    <li>
                                        <Link className="dropdown-item" to="/project2/">Antras Darbas</Link>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/project3" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Project 3</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <li>
                                        <Link className="dropdown-item" to="/project3/usersearch">Project3</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Menu;
