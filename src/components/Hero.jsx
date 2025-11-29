import { AlertCircle } from 'react-feather';
import { Link } from 'react-router-dom';



function Hero() {
    return (
        <section className="relative bg-primary text-background">
            <div className="grid grid-cols-1 md:grid-cols-[4fr_8fr] items-center overflow-hidden py-[30px]">

                <div className="h-full relative flex items-center justify-center">
                    <img
                        className="lg:absolute w-[40%] md:w-full bottom-0 left-0 lg:-translate-x-[20%] lg:translate-y-[50%]"
                        src="/images/escut-alzina.png"
                        alt="logo club"
                    />
                </div>

                <div className="flex-shrink-0 flex flex-col items-center text-center md:text-start grow gap-6 p-12">

                    <div className="flex flex-col w-full">
                        <h1 className="font-catallina text-[70px] -mb-3 text-secondary">ae alzina</h1>
                        <h2 className="text-[30px] text-secondary">Associació esportiva alzina</h2>
                    </div>

                    <p>
                        Som l'<strong className='text-secondary'>AE Alzina</strong>, un equip de futbol sala nascut al barri del Congrés i els Indians. Competim amb passió, esforç i esperit de superació. Cada partit és una oportunitat per créixer, compartir i deixar-ho tot a la pista. Uneix-te al nostre camí cap a la victòria. El futbol sala és la nostra vida, la pista el nostre escenari.<br /><br />#123ALZINA!
                    </p>
                </div>

            </div>

            <Link
                to="/inscripcions"
                className="absolute -bottom-6 right-10 btn btn-secondary"
            >
                <AlertCircle fill="#183753" color="#e6c707" /> &nbsp; Inscripcions obertes
            </Link>
        </section>

    )
}


export default Hero