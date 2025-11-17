import { AlertCircle } from 'react-feather';
import { Link } from 'react-router-dom';



function Hero() {
    return (
        <main className="relative">
            <div className='min-h-[400px] bg-primary text-background flex flex-col md:flex-row items-stretch relative overflow-hidden'>
                <div className="w-auto md:w-[30%] relative overflow-hidden">
                </div>
                <img
                    className="hidden md:block md:absolute md:w-[40%] xl:w-[35%] md:-bottom-[40%] xl:-bottom-[80%] md:-left-[10%] "
                    src="https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png"
                    alt="logo club"
                />

                <div className="md:w-[50%] flex-shrink-0 flex flex-col items-center text-center md:text-start grow gap-6 p-12">
                    <div className='md:hidden w-1/2'>
                        <img src="https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png"
                            alt="logo club" />
                    </div>
                    <div className="flex flex-col w-full">
                        <h1 className="font-catallina text-[70px] -mb-3 text-secondary">ae alzina</h1>
                        <h2 className="text-[30px] text-secondary">Associació esportiva alzina</h2>
                    </div>

                    <p>
                        Som l'<strong className='text-secondary'>AE Alzina</strong>, un equip de futbol sala nascut al barri del Congrés i els Indians. Competim amb passió, esforç i esperit de superació. Cada partit és una oportunitat per créixer, compartir i deixar-ho tot a la pista. Uneix-te al nostre camí cap a la victòria. El futbol sala és la nostra vida, la pista el nostre escenari.<br/><br/>#123ALZINA!
                    </p>
                </div>
            </div>

            <Link
                to="/inscripcions"
                className="absolute -bottom-6 right-10 btn btn-secondary"
            >
                <AlertCircle fill="#183753" color="#e6c707" /> &nbsp; Inscripcions obertes
            </Link>
        </main>

    )
}


export default Hero