import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const listItems = <>
        <li>
            <Link to={'/'} className={({ isActive, isPending }) =>
                isActive
                    ? "bg-yellow-400 underline"
                    : isPending
                        ? "pending"
                        : ""
            }>Home</Link>
        </li>
        <li>
            <Link to={'/menu'}> Our Menu</Link>
        </li>
        <li>
            <Link to={'/ourShop'}> Our Shop</Link>
        </li>
    </>

    return (
        <div className="navbar fixed z-20 text-white bg-black bg-opacity-30 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {listItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;