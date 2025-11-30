import TeamsCard from "./TeamsCard";


function Teams() {
    const sections = [
        {
            id: 1,
            name: "CEEB",
            teams: [
                "Benjamí 'A'",
                "Prealeví 'A'",
                "Aleví 'A'",
                "Preinfantil 'A'",
                "Infantil Fem 'A'",
                "Infantil Fem 'B'",
                "Cadet 'B'",
                "Joves"
            ]
        },
        {
            id: 2,
            name: "FCF",
            teams: [
                "Infantil 'A'",
                "Cadet 'A'",
                "Juvenil 'A'",
                "Sènior Fem 'A'",
                "Sènior Masc 'A'",
                "Sènior Masc 'B'"
            ]
        }
    ]

    return (
        <section className="py-[50px]">
            <div className="container">
                <h2 className="text-primary mb-3 text-heading-desktop-3">Equips</h2>
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5">
                    {sections.map((section) => {
                        return <TeamsCard
                            key={section.id}
                            sectionName={section.name}
                            teams={section.teams}
                        />
                    })}
                </div>
            </div>

        </section>
    );
}


export default Teams