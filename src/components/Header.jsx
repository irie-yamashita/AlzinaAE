import { Menu } from 'react-feather';
import { Link, useLocation }  from 'react-router-dom';

function Header() {

    const location = useLocation();
    const isActive = (path) => {
        console.log(path !== location.pathname)
        if(path !== location.pathname) {
            return false;
        } else {
            return true;
        }
    }

    const navBar = [
        {
            title: "Club",
            route: "/club"
        },
        {
            title: "Inscripcions",
            route: "/inscripcions"
        },
        {
            title: "Equips",
            route: "/equips"
        },
        {
            title: "Calendari",
            route: "/calendari"
        },
        {
            title: "Notícies",
            route: "/noticies"
        },
        {
            title: "Multimèdia",
            route: "/multimedia"
        },
        {
            title: "Contacte",
            route: "/contacte"
        }
    ];


    return (
        <header className="bg-primary flex justify-between items-center p-5 border-b-2 border-background sticky top-0 z-50" >
            <Link to="/" className="flex gap-2 items-center text-background">
                <img src="https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png" alt="logoClub" className="w-[37px] md:ml-4"/>
                <p>AE Alzina</p>
            </Link>
            <nav className="flex justify-end md:justify-evenly md:items-center w-3/4  text-background">
                <button className='md:hidden'><Menu></Menu></button>
                { navBar.map((a) => {
                    return  <Link key={a.title} className={`hidden md:block transition-transform hover:text-secondary hover:scale-105 ${isActive(a.route) ? 'activePath' : ''}`} to={a.route}>{a.title}</Link>
                })} 
               
            </nav>
        </header>
    );

}

export default Header;