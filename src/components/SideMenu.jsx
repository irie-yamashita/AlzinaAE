import { Link } from "react-router-dom";
import { X } from "react-feather";
import { useRef, useEffect } from "react";

function SideMenu({ isOpen, onClose, routes, isActive }) {
    const menuRef  = useRef(null);
    useEffect(() => {

        // handler click fora del menú -> tancar menú
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);


        // handler resize -> quan és +1024 tancar menú
        const handleResize = (e) => {
            if (window && window.innerWidth >= 1024 && isOpen) { // xl = 1024px
                onClose();
            }
        }
        window.addEventListener("resize", handleResize);
        

        // handler Esc (accessibilitat) -> tancar menú
        const handleKeyDown = (e) => {
            if (menuRef.current && e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);


        // Cleanup function
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        }
    }, [onClose]);


    if (!isOpen) return null; // No es renderitza si està tancat



    return (
        <div className="fixed bg-primary/50 right-0 left-0 top-0 bottom-0 z-10">
            <div
                id="side-menu"
                className="fixed right-0 top-0 bottom-0 bg-primary w-[50%] flex flex-col p-6 shadow-lg"
                ref={menuRef}
                role="menu"
                aria-label="Menú principal"
            >
                <button onClick={onClose} aria-label="Tancar menú principal" className="btn text-secondary self-end"><X></X></button>
                <nav className="flex flex-col p-5 gap-3">
                    {routes.map((a) => {
                        return <Link key={a.title} className={`text-background transition-transform hover:text-secondary hover:scale-[101%] ${isActive(a.route) ? ' bg-light text-primary px-2 py-1 rounded-md' : ''}`} to={a.route}>{a.title}</Link>
                    })}
                </nav>
            </div>
        </div>
    )
}

export default SideMenu;