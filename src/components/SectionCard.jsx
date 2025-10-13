

function SectionCard({ sectionName, teams }) {
    return (

        <div className="flex w-full justify-center items-center bg-primary lg:w-1/2 p-2 sm:p-10 py-16 rounded-xl">
            <div className="h-full sm:h-40 flex flex-col justify-center items-start gap-3 px-10 text-center">
                <img className="size-24" src="/icons/ball-blue.png" alt="football" />
                <h3 className="text-background w-full">{sectionName}</h3>
            </div>
        </div>

        /* <div className="h-full sm:h-40 flex flex-col sm:flex-wrap justify-center items-start gap-3 gap-x-5 w-full px-10">
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
        </div> */

    );
}


export default SectionCard;