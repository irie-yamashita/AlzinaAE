function Match({ match }) {

    return (
        <a href="">
            <article className="match">
                <img src={match.homeTeam.logo} alt={`${match.homeTeam.name} logo`} />
                <p>{match.homeTeam.name}</p>
                <span>vs</span>
                <img src={match.awayTeam.logo} alt={`${match.awayTeam.name} logo`} />
                <p>{match.awayTeam.name}</p>

            </article>
        </a>
    )
}


export default Match;