import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/marvel"
                            activeClassName="selected"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}

                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto mb-2 mb-sm-1">

                        <span className="nav-item nav-link text-primary">
                            {user?.name}
                        </span>

                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </ul>
                </div>
            </nav> */
export const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
        logout()

    }
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link
                    className="navbar-brand"
                    to="/">Home
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li class="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                                to="/marvel"
                                activeClassName="selected"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}

                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2  d-lg-flex justify-content-lg-end d-sm-flex-start d-sm-inline-flex">
                        <ul className="navbar-nav">
                            <span className="nav-item nav-link text-primary">
                                Bienvenido: {user?.name}
                            </span>
                            <button
                                className="nav-item nav-link btn"
                                onClick={handleLogout}>
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    )
}