import mesto_logo from '../images/mesto_logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({loggedIn, email, handleSignOut}) {
    const { pathname } = useLocation();
    const text = `${pathname === '/signin' ? 'Регистрация' : 'Войти'}`;
    const linkRoute = `${pathname === '/signin' ? '/signup' : '/signin'}`;
    return ( < header className = "header" >
        <img src = { mesto_logo }
        className = "header__logo"
        alt = "Лого Место" / >
             <div className="header__box">
        {loggedIn ? (
          <>
            <p className="header__email">{email}</p>
            <Link className="header__signout" to="" onClick={handleSignOut}>Выйти</Link>
          </>) : (<Link to={linkRoute} className="header__link">{text}</Link>)
        }
      </div>
        </header>
        

    );
}

export default Header;