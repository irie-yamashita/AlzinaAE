import { AlertCircle } from 'react-feather';


function Team() {
    return (
        <main className="container py-12">
            <header className='flex justify-between'>
                <div>
                    <h1 className="text-heading-desktop-2 text-primary">Sènior 'C'</h1>
                    <p className='bg-primary text-background w-fit py-2 px-4 rounded-md'>Lliga Primera Divisió Catalana Futbol Sala</p>
                </div>
                <button className='btn btn-secondary flex flex-col w-fit h-fit'>
                    <AlertCircle fill="#183753" color="#e6c707" />
                    <span>Inscriu-te</span>
                </button>
            </header>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <article>
                        <h2 className='text-heading-desktop-3 text-primary'>Últims resultats</h2>
                        <div className='flex flex-col items-center'>
                            <div className='w-full p-4 bg-light text-primary flex justify-center items-center gap-5'>
                                <img src="/images/logo-alzina.png" alt="logo equip" className='size-8' />
                                <p>4-0</p>
                                <img src="/images/logo-alzina.png" alt="logo equip" className='size-8' />
                            </div>
                        </div>
                    </article>
                    <article>
                        <h2 className='text-heading-desktop-3 text-primary'>Estadística</h2>
                    </article>
                </div>
                <article>
                    <h2 className='text-heading-desktop-3 text-primary'>Plantilla</h2>
                </article>
            </div>
        </main>
    )
}

export default Team;
