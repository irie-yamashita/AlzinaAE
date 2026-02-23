import { Calendar as Calendari } from "react-feather";
import { useState, useEffect } from "react";
import { getLastResults, getTeamById } from "../services/apiService";
import Match from "../components/Match";
import '../assets/css/calendar.css'



function Calendar() {
    useEffect(() => {
        getLastResults('FCF').then(setResults);
    }, []);
    const [results, setResults] = useState([]);

    return (
        <main className="calendar-container">
            <div className="title-container">
                <h1>Calendari</h1>
                <Calendari className="icon"/> &nbsp;
            </div>
            <section>
                <h2>Divendres <span>- 12 sept</span></h2>
                <div className="matches-container">
                    {results.map((result) => {
                        return (
                        <Match
                            key={result.id}
                            match={result}
                        />
                        );
                    })}
                </div>
            </section>
            <section>
                <h2>Dissabte <span>- 13 sept</span></h2>

            </section>

            <section>
                <h2>Diumenge <span>- 14 sept</span></h2>

            </section>
        </main>
    )
}

export default Calendar;
