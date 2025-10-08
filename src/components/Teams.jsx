import SectionCard from "./SectionCard";


function Teams() {
    const sections = [
        {
            name: "CEEB",
            teams: ["juvenil", "infantil", "ksjfsdf"]
        },
        {
            name: "FCF",
            teams: ["cadet", "sènior"]
        }
    ] 

    return (
        <section>
            <h3>Equips</h3>
            {sections.map((section) => {
                return <SectionCard
                    sectionName={section.name}
                    teams={section.teams}
                />
            })}
            

        </section>
    );
}


export default Teams