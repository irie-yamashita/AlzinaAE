function Result({match, section}) {

    const {homeTeam, awayTeam} = match;


  return (
    <a href="">
      <article className="flex justify-center items-center gap-8 p-5 bg-light">
          {homeTeam.name === 'Alzina AE' && <p className="font-catallina text-ms">{section}</p>}
          <img className="size-6 font-catallina text-ms " src={homeTeam.logo} alt="home team logo" />
          <p className="font-catallina text-ms">{homeTeam.goals}-{awayTeam.goals}</p>
          <img className="size-6 font-catallina text-ms" src={awayTeam.logo} alt="away team logo" />
          {awayTeam.name === 'Alzina AE' && <p className="font-catallina text-ms">{section}</p>}
      </article>
    </a>
  )
}


export default Result;