import { useContext, useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

  const {user,logout}= useContext(AuthContext)

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light'));
      };
      
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

    return (
        <div className="navbar bg-[#2f3542] text-white px-5 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4  p-2 shadow bg-slate-600 rounded-box w-52 z-10">
            <li><NavLink to={"/"} className={({isActive})=>isActive?"font-bold  text-emerald-500":"font-bold text-white"}>Home</NavLink></li>
            <li><NavLink to={"/addBook"} className={({isActive})=>isActive?"font-bold  text-emerald-500":"font-bold text-white"}>Add Book</NavLink></li>
           <li> <NavLink to={"/allBook"} className={({isActive})=>isActive?"font-bold text-emerald-500":"font-bold text-white"}>All Book</NavLink></li>
            <li><NavLink to={"/borrowed"} className={({isActive})=>isActive?"font-bold text-emerald-500":"font-bold text-white"}>Borrowed Books</NavLink></li>
            </ul>
          </div>
          <img className="h-12" src="https://i.ibb.co/bN5tw6M/Lovepik-com-401604218-book-and-pen.png" alt="" />
          <h1 className="text-2xl font-bold text-white hidden sm:block">BookishBliss</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLink to={"/"} className={({isActive})=>isActive?"font-bold  text-emerald-500":"font-bold text-white"}>Home</NavLink>
            <NavLink to={"/addBook"} className={({isActive})=>isActive?"font-bold  text-emerald-500":"font-bold text-white"}>Add Book</NavLink>
            <NavLink to={"/allBook"} className={({isActive})=>isActive?"font-bold text-emerald-500":"font-bold text-white"}>All Book</NavLink>
            <NavLink to={"/borrowed"} className={({isActive})=>isActive?"font-bold text-emerald-500":"font-bold text-white"}>Borrowed Books</NavLink>
            
          </ul>
        </div>
        <div className="navbar-end space-x-5">
        <button onClick={toggleTheme}>{theme==="light"?<span className='text-3xl'><MdOutlineDarkMode /></span>:<span className="text-3xl"><CiLight /></span>}</button>
      
    <img title={user?.displayName} className="w-10 rounded-full" src={user?user?.photoURL:"https://i.ibb.co/bPPBQSz/3d-character-58.jpg"} />
         {user? <button onClick={()=>logout()} className="btn bg-[#c9c6ac] text-black font-bold">Logout</button> : <Link to={"/login"}><button className="btn bg-[#c9c6ac] text-black font-bold">Login</button></Link>}
        </div>
      </div>
    );
};

export default Navbar;