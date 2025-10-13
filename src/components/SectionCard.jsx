

function SectionCard({ sectionName, teams }) {
    return (

          <div class="flex w-full justify-evenly items-center bg-primary lg:w-1/2 p-10 py-10 rounded-xl">

            <div class="h-52 flex flex-col flex-wrap items-start gap-3 gap-x-5 w-full px-10">
                {teams.map((team) => (
                    <div key={team} className="flex items-center gap-3 text-background">
                        <img
                            className="size-4 border-1 border-background rounded-full hover:border hover:border-secondary"
                            src="/icons/ball-blue.png"
                            alt="pilota"
                        />
                        <p>{team}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}


export default SectionCard

/*            <div className="flex flex-col justify-center items-stretch text-center gap-2">
                <img
                    className="w-28"
                    src="https://cdn-icons-png.flaticon.com/512/123/123443.png" alt="pilota"
                />
                <h4 className="text-background w-full">{sectionName}</h4>
            </div>
            <div className="border border-background h-full"></div>
            <div className="flex justify-start h-full flex-wrap flex-col gap-4 p-3" >
                {teams.map((team) => (
                    <div key={team} className="flex items-center gap-2 text-background">
                        <img
                            className="size-4 border hover:border-secondary"
                            src="https://cdn-icons-png.flaticon.com/512/123/123443.png"
                            alt="pilota"
                        />
                        <p>{team}</p>
                    </div>
                ))}
            </div>*/