

function SectionCard({ sectionName, teams }) {
    return (
        <div className="bg-primary p-4 group grid rounded-lg min-w-[50%] min-h-[250px]" tabIndex={0}>
            <article className="grid grid-cols-[1fr_0fr] group-hover:grid-cols-[2fr_5fr] has-[a:focus]:grid-cols-[2fr_5fr] w-full grid-anim items-center gap-5">
                <header className="flex flex-col items-center gap-3">
                    <img className="size-24" src="/icons/ball-blue.png" alt="football" />
                    <h2 className="text-background w-full text-heading-desktop-3 text-center">{sectionName}</h2>
                </header>
                <div className="grid grid-cols-2 opacity-0 max-h-[200px] group-hover:opacity-100 has-[a:focus]:opacity-100 overflow-hidden group-hover:px-2 has-[a:focus]:px-2 transition-all duration-500 ease-in-out gap-y-3 py-4 delay-200">
                    {teams.map((team) => (
                        <a href="" key={team.id} className="flex items-center gap-3 text-background hover:text-secondary group/inner focus:text-secondary focus:outline-none">
                            <img
                                className="size-5 border-1 border-background rounded-full group-hover/inner:outline group-hover/inner:outline-2 group-hover/inner:outline-secondary group-focus/inner:outline group-focus/inner:outline-2 group-focus/inner:text-secondary"
                                src="/icons/ball-blue.png"
                                alt="pilota"
                            />
                            <p>{team.name}</p>
                        </a>
                    ))}
                </div>

            </article>
        </div>

        /*<div className="p-10 rounded-lg bg-primary h-full sm:h-40 flex flex-col sm:flex-wrap justify-center items-start gap-3 gap-x-5 w-full">
                {teams.map((team) => (
                    <div key={team} className="flex items-center gap-3 text-background">
                        <img
                            className="size-5 border-1 border-background rounded-full hover:outline hover:outline-2 hover:outline-secondary"
                            src="/icons/ball-blue.png"
                            alt="pilota"
                        />
                        <p>{team}</p>
                    </div>
                ))}
        </div>*/

    );
}


export default SectionCard;