
import { Mail, Home, Instagram, Twitter, Facebook } from "react-feather";

function Footer() {
    const options = [
        {
            title: "Home",
            route: "/"
        },
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
        <footer className="bg-primary p-10 md:py-10 text-background flex flex-col md:flex-row justify-center md:justify-evenly items-stretch md:items-center gap-6 md:gap-4 w-full mt-12">
            <nav className="flex flex-col gap-2">
                <h2 className="text-secondary">Menú</h2>
                <div className="grid grid-rows-3 grid-flow-col gap-x-9">
                    {options.map((option) => {
                        return <a className="hover:underline" key={option.title} href={option.route} > {option.title} </a>
                    })}
                </div>
            </nav>
            <div className="flex flex-col gap-2">
                <h2 className="text-secondary">Contacte</h2>
                <div className="flex flex-col gap-2">
                    <a className="flex gap-2 items-center" href="mailto:aeealzina@gmail.com"><Mail/> aeealzina@gmail.com</a>
                    <p className="flex gap-2 items-center"><Home/>  Passatge de Salvador Riera, 2, Sant Andreu, 08027 Barcelona</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-secondary">Segueix-nos!</h2>
                <div className="flex gap-2 items-center">
                    <a href="https://www.instagram.com/alzina_ae/" aria-label="Instagram AE Alzina"><Instagram></Instagram></a>
                    <a href="https://x.com/alzina_ae?lang=ca" aria-label="Twitter o X AE Alzina"><Twitter></Twitter></a>
                    <a href="https://www.facebook.com/a.e.alzina/?locale=ca_ES" aria-label="Facebook AE Alzina"><Facebook></Facebook></a>
                </div>
            </div>
        </footer>
    );

}

export default Footer;