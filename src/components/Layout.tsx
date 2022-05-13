import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./assets/logo.png"

const setActive = ({isActive}: any) => isActive ? "active-link" : "nav-link";

export const Layout:React.FC = () => {
    return (
        <>
        <header className="navbar">
                <NavLink to="/" className={setActive} >
                    <img alt="logo" src={logo} max-width="40px" height="40px"></img>
                </NavLink>
            <span className="menu">
                <NavLink to="/main" className={setActive}>MAIN</NavLink>
                <NavLink to="/add" className={setActive}>ADD THE POINT</NavLink>
                <NavLink to="/list" className={setActive}>POINTS LIST</NavLink>
            </span>
        </header>

        <main className="main">
            <Outlet/>
        </main>

        </>
    )
}