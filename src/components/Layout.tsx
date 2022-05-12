import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./assets/logo.png"

export const Layout:React.FC = () => {
    return (
        <>
        <header className="navbar">
                <Link className="nav-link" to="/">
                    <img alt="logo" src={logo} width="30px" height="30px"></img>
                </Link>
            <span className="menu">
                <Link className="nav-link" to="/main">MAIN</Link>
                <Link className="nav-link" to="/add">ADD THE POINT</Link>
                <Link className="nav-link" to="/list">POINTS LIST</Link>
            </span>
        </header>

        <main className="container">
            <Outlet/>
        </main>

        <footer className="container">
            github.com/twiglenenok
        </footer>
        </>
    )
}