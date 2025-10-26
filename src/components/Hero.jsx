import { AlertCircle } from 'react-feather';



function Hero() {
    return (
        <section className="h-[425px] bg-primary text-background flex relative items-center">

            <div className="w-[500px] g-[position:-120px_bottom] bg-[position: -120px_top] h-full bg-[url(https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png)] bg-[length:592px] bg-[position:-120px_60px] bg-no-repeat"></div>

            <div className="w-2/3 flex flex-col items-center px-44 grow gap-6">
                <div className="flex flex-col w-full">
                    <h1 className="font-catallina text-[70px] -mb-3 text-secondary">ae alzina</h1>
                    <h2 className="text-[30px] text-secondary">Associació esportiva alzina</h2>
                </div>

                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at neque lacus. Phasellus mollis facilisis enim, quis finibus nunc malesuada vel. Ut vitae maximus magna. In pretium nec velit vitae fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="/inscripcions" className="absolute -bottom-5 left-3/4 btn btn-secondary"><AlertCircle fill='#183753'color='#e6c707' /> &nbsp; Inscripcions obertes</a>
            </div>




        </section>
    );
}


export default Hero