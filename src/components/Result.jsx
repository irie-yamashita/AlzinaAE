function Result({match, section}) {

    const {homeTeam, awayTeam} = match;


  return (
    <div className="flex justify-center items-center gap-10 p-5 bg-greyAE hover:scale-105 transition-transform">
        {homeTeam.name === 'Alzina AE' && <p className="font-catallina text-ms">{section}</p>}
        <img className="size-6 font-catallina text-ms " src={homeTeam.logo} alt="home team logo" />
        <p className="font-catallina text-ms">{homeTeam.goals}-{awayTeam.goals}</p>
        <img className="size-6 font-catallina text-ms" src={awayTeam.logo} alt="away team logo" />
        {awayTeam.name === 'Alzina AE' && <p className="font-catallina text-ms">{section}</p>}
    </div>
  )
}


export default Result;