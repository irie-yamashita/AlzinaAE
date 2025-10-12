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
            <h3 className="text-primary">Equips</h3>
            <div className="flex w-full justify-center items-center gap-10">
                {sections.map((section) => {
                    return <SectionCard
                        sectionName={section.name}
                        teams={section.teams}
                    />
                })}
            </div>


        </section>
    );
}


export default Teams