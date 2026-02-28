import dayjs from "dayjs";

function Match({ match }) {
    return (
        <a href="">
            <article className="match">
                <div className="teams-container">
                    <div className="team">
                        <img className="logo" src={match.homeTeam.logo} alt={`${match.homeTeam.name} logo`} />
                        <p>{match.homeTeam.name}</p>
                    </div>
                    <span>vs</span>
                    <div className="team">
                        <img className="logo" src={match.awayTeam.logo} alt={`${match.awayTeam.name} logo`} />
                        <p>{match.awayTeam.name}</p>
                    </div>
                </div>
                <span className="hora">{dayjs(match.date).locale('es').format('HH:mm')}h</span>
            </article>
        </a>
    )
}


export default Match;