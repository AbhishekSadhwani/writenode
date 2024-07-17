import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
        <Link className="link" to="/">
            <img src={logo} alt="" />
            <span className="title">WriteNode</span>
        </Link>
        <div className="nav-items">
            <NavLink className="link" to="/" end>Home</NavLink>
            <NavLink className="link hidden" to="/create">Create</NavLink>        
            {/* login */}
            <button className="auth-button">
                <i className="bi bi-google"></i>
                Login
            </button>
            {/* logout */}
            {/* <button className="auth-button">
                <i className="bi bi-box-arrow-right"></i>
                Logout
            </button> */}
        </div>
    </header>
  )
};
