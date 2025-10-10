function Result({match, section}) {

    const {homeTeam, awayTeam} = match;


  return (
    <div className="flex gap-3">
        <p>{section}</p>
        <img className="size-5" src={homeTeam.logo} alt="home team logo" />
        <p>{homeTeam.goals}-{awayTeam.goals}</p>
        <img className="size-5" src={awayTeam.logo} alt="away team logo" />
    </div>
  )
}


export default Result;