import { Calendar } from "react-feather";
import Result from "./Result";

function LastResults() {
  const results = [
    {
      section: "Infantil 'A'",
      match: {
        id: 1,
        homeTeam: {
          name: "Alzina AE",
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "4",
        },
        awayTeam: {
          name: "ITB",
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "1",
        },
      },
    },
    {
      section: "Cadet 'B'",
      match: {
        id: 2,
        homeTeam: {
          name: "ITB",
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "2",
        },
        awayTeam: {
          name: "Alzina AE",
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "2",
        },
      },
    },
    {
      section: "Infantil 'A'",
      match: {
        id: 3,
        homeTeam: {
          name: "Alzina AE",
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "4",
        },
        awayTeam: {
          name: "ITB",
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "1",
        },
      },
    },
    {
      section: "Infantil 'A'",
      match: {
        id: 4,
        homeTeam: {
          name: "Alzina AE",
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "4",
        },
        awayTeam: {
          name: "ITB",
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "1",
        },
      },
    },
    {
      section: "Cadet 'B'",
      match: {
        id: 5,
        homeTeam: {
          name: "ITB",
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "2",
        },
        awayTeam: {
          name: "Alzina AE",
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "2",
        },
      },
    },
    {
      section: "Sènior Fem 'A'",
      match: {
        id: 6,
        homeTeam: {
          name: "ITB",
          logo: "https://files.fcf.cat/img/_125vermell.png",
          goals: "2",
        },
        awayTeam: {
          name: "Alzina AE",
          logo: "https://files.fcf.cat/escudos/clubes/escudos/00100_0000963496_00100_0000949986_Escudo_Alzina.png",
          goals: "4",
        },
      },
    },
  ];

  return (
    <section className="container mx-auto py-16">
      <h3 className="text-primary mb-3">Últims resultats</h3>
      <div className="grid grid-cols-3 mx-auto gap-y-4">
        {results.map((result) => {
          return (
            <Result
              key={result.match.id}
              section={result.section}
              match={result.match}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-end text-center">
        <a
          href="/calendari"
          className="btn w-50 btn-secondary mt-5 gap-2"
        >
          <Calendar></Calendar> Veure Calendari
        </a>
      </div>
    </section>
  );
}

export default LastResults;
