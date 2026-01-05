import TeamsCard from "./TeamsCard";
import { useState, useEffect } from "react";
import { getTeamByCategory } from "../services/apiService";


function Teams() {
    const [fcfTeams, setFcfTeams] = useState([]);
    const [ceebTeams, setCeebTeams] = useState([]);

    useEffect(() => {
        getTeamByCategory('FCF').then(setFcfTeams);
        getTeamByCategory('CEEB').then(setCeebTeams);
    }, []);


    return (
        <section className="py-[50px]">
            <div className="container">
                <h2 className="text-primary mb-3 text-heading-desktop-3">Equips</h2>
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5">
                    <TeamsCard
                        sectionName={'FCF'}
                        teams={fcfTeams}
                    />
                    <TeamsCard
                        sectionName={'CEEB'}
                        teams={ceebTeams}
                    />
                </div>
            </div>

        </section>
    );
}


export default Teams