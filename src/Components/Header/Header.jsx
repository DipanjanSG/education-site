import './Header.css';
import iconHamburgerMenu from '../../assets/icon-hamburger-menu.png';


function Header()
{
    return (

        <header id = "header" className="ms-financial-edu-website-header">
            {/* <span>&#9776;</span> */}
        
            <span id="header-company-name" className="header-company-name">MAHASAMVIT FINANCE EDUCATION</span>
        </header>
        )

}

export default Header;