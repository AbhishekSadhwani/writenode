import { Link, NavLink} from "react-router-dom";
import logo from '../assets/logo.png';
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, authProvider } from '../firebase/config';
import { useState } from "react";


export const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false);

    const handleLogin = () => {
        signInWithPopup(auth, authProvider)
            .then((result) => {
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn",true);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    };

    const handleLogout = () => {
        signOut(auth);
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn",false);
    }

    return (
        <header>
            <Link className="link" to="/">
                <img src={logo} alt="" />
                <span className="title">WriteNode</span>
            </Link>
            <div className="nav-items">
                <NavLink className="link" to="/" end>Home</NavLink>
                {/* logout */}
                {isLoggedIn &&
                    <>
                        <NavLink className="link" to="/create">Create</NavLink>        
                        <button onClick={handleLogout} className="auth-button">
                            <i className="bi bi-box-arrow-right"></i>
                            Logout
                        </button>
                    </>
                }   
                {/* login */}
                
                {!isLoggedIn &&  <button onClick={handleLogin} className="auth-button">
                                    <i className="bi bi-google"></i>
                                    Login
                                </button>
                }
            </div>
        </header>
    )
};
