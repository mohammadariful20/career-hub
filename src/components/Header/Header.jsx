import { NavLink } from "react-router-dom"
import './Header.css'

export default function Header() {
    const link = <>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/Statistics" activeClassName="active">Statistics</NavLink>
        <NavLink to="/Applied"activeClassName="active">Applied Jobs</NavLink>
        <NavLink to="/Blogs" activeClassName="active">Blogs</NavLink>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 items-center">
                       {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Star Applying</a>
                </div>
            </div>
        </>
    )
}
