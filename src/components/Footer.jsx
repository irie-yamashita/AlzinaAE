
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
        <footer className="bg-primary p-10  md:py-10 w-full text-background flex flex-col md:flex-row justify-center md:justify-evenly items-stretch md:items-center gap-6 md:gap-4">
            <nav className="flex flex-col gap-2">
                <h5 className="text-secondary">Menú</h5>
                <div className="grid grid-rows-3 grid-flow-col gap-x-9">
                    {options.map((option) => {
                        return <a className="hover:underline" key={option.title} href={option.route} > {option.title} </a>
                    })}
                </div>
            </nav>
            <div className="flex flex-col gap-2">
                <h5 className="text-secondary">Contacte</h5>
                <div className="flex flex-col gap-2">
                    <a className="flex gap-2 items-center" href="mailto:aeealzina@gmail.com"><Mail/> aeealzina@gmail.com</a>
                    <p className="flex gap-2 items-center"><Home/>  Passatge de Salvador Riera, 2, Sant Andreu, 08027 Barcelona</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-secondary">Segueix-nos!</h5>
                <div className="flex gap-2 items-center">
                    <a href=""><Instagram></Instagram></a>
                    <a href=""><Twitter></Twitter></a>
                    <a href=""><Facebook></Facebook></a>
                </div>
            </div>
        </footer>
    );

}

export default Footer;