import Result from "./components/Result";

function LastResults() {
  const results = [
    {
      section: "Infantil 'A'",
      match: {
        homeTeam: {
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "4",
        },
        awayTeam: {
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "1",
        },
      },
    },
    {
      section: "Cadet 'B'",
      match: {
        homeTeam: {
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "2",
        },
        awayTeam: {
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "2",
        },
      },
    },
  ];

  return (
    <div className="flex gap-3">
      {results.map((result) => {

        return <Result key={result.section}
          section={result.section}
          match={result.match}
        />;
        
      })}
    </div>
  );
}

export default LastResults;