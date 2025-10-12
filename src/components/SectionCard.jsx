

function SectionCard({ sectionName, teams }) {
    return (
        <div className="bg-primary h-[270px] flex justify-center items-center gap-5 p-5 rounded-3xl">

            <div className="flex flex-col justify-center items-center text-center gap-2">
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
            </div>
        </div>
    );
}


export default SectionCard