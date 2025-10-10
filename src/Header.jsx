

function Header() {

    const navBar = [
        {
            title: "Club",
            link: "/club"
        },
        {
            title: "Inscripcions",
            link: "/inscripcions"
        },
        {
            title: "Equips",
            link: "/equips"
        },
        {
            title: "Calendari",
            link: "/calendari"
        },
        {
            title: "Notícies",
            link: "/noticies"
        },
        {
            title: "Multimèdia",
            link: "/multimedia"
        },
        {
            title: "Contacte",
            link: "/contacte"
        }
    ];


    return (
        <header className="bg-primary flex justify-between items-center p-5 text-background border-b-2 border-background">
            <div className="flex gap-2 items-center">
                <a href="/" className="w-[37px]"><img src="https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png" alt="logoClub" /></a>
                <p>Alzina AE</p>
            </div>
            <nav className="flex justify-evenly items-center w-3/4">
                { navBar.map((a) => {
                    return  <a className="transition-transform hover:text-secondary hover:scale-105" href={a.link}>{a.title}</a>
                })}
               
            </nav>
        </header>
    );

}

export default Header;