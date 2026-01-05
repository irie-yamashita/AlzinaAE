  import { Calendar } from "react-feather";
  import Result from "./Result";
  import { useState, useEffect } from "react";
  import { getLastResults, getTeamById } from "../services/apiService";


  function LastResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {
      getLastResults('FCF').then(setResults);
    }, []);

    return (
      <section className="container py-12">
        <h2 className="text-primary mb-3 text-heading-desktop-3">Últims resultats</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-4 items-center">
          {results.map((result) => {
            return (
              <Result
                key={result.id}
                match={result}
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
