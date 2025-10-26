import SectionCard from "./SectionCard";


function Teams() {
    const sections = [
        {
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
        <section className="p-10">
            <div className="container mx-auto">
                <h3 className="text-primary mb-3">Equips</h3>
                <div className="container mx-auto flex flex-col gap-5 lg:flex-row">
                    {sections.map((section) => {
                        return <SectionCard
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