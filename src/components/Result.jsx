function Result({match}) {

  return (
    <a href="">
      <article className="flex justify-center items-center gap-8 p-5 bg-light">
          {match.home === true && <p className="font-catallina text-ms">{match.team.name}</p>}
          <img className="size-6 font-catallina text-ms " src={match.homeTeam.logo} alt="home team logo" />
          <p className="font-catallina text-ms">{match.homeTeam.goals}-{match.awayTeam.goals}</p>
          <img className="size-6 font-catallina text-ms" src={match.awayTeam.logo} alt="away team logo" />
          {match.awayTeam.name === 'Alzina AE' && <p className="font-catallina text-ms">{match.team.name}</p>}
      </article>
    </a>
  )
}


export default Result;