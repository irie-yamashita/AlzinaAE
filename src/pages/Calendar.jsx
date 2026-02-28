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
        <main className="container calendar-container">
            <header className="title-container">
                <h1>Calendari</h1>
                <Calendari className="icon"/> &nbsp;
            </header>
            <section>
                <h2>Divendres <span>- 20 feb</span></h2>
                <div className="matches-container">
                    {results.filter(m => new Date(m.date).getDay() === 5).map((result) => {
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
                <h2>Dissabte <span>- 21 feb</span></h2>
                <div className="matches-container">
                    {results.filter(m => new Date(m.date).getDay() === 6).map((result) => {
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
                <h2>Diumenge <span>- 22 feb</span></h2>
                <div className="matches-container">
                    {results.filter(m => new Date(m.date).getDay() === 0).map((result) => {
                        return (
                        <Match
                            key={result.id}
                            match={result}
                        />
                        );
                    })}
                </div>
            </section>
        </main>
    )
}

export default Calendar;
