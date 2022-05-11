import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout:React.FC = () => {
    return (
        <>
        <header className="navbar">
            <Link className="nav-link" to="/main">Main</Link>
            <Link className="nav-link" to="/add">Add the point</Link>
            <Link className="nav-link" to="/list">Points List</Link>
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