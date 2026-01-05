import Noticia from "./Noticia";

function LastNews() {
  const noticies = [
    {
      id: 'n1',
      title: "INICI TEMPORADA 25-26",
      date: "2025-09-12",
      titular:
        "Começa una nova temporada. Esperem molts èxits per totes les nostres seccions.",
      img: "images/cartellMasculi.jpg",
    },
    {
      id: 'n2',
      title: "CAMPIONES DE LLIGA",
      date: "2025-05-01",
      titular:
        "El nostre sènior femení ha guanyat la lliga a falta de tres jornades.",
      img: "images/campiones.jpg",
    },
    {
      id: 'n3',
      title: "PORTES OBERTES",
      date: "2025-06-23",
      titular: "Comencen les jornades de portes obertes. Apunteu-vos!",
      img: "images/cartellFemeni.jpg",
    }
  ];

  return (
    <section className="container py-[32px]">
      <h2 className="text-primary mb-3 text-heading-desktop-3">Últimes Notícies</h2>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:grid grid-cols-3 items-stretch gap-9 lg:gap-12">
          {noticies.map((noticia) => {
            return(
            <a className="flex justify-center" href="/noticies" key={noticia.id}>
              <Noticia key={noticia.id} info={noticia}></Noticia>
            </a>
            )
          })}
        </div>

        <div className="flex justify-center items-center">
          <a href="/noticies" className="btn w-60 uppercase flex gap-2 justify-center items-center btn-primary !text-secondary p-2 rounded-lg">Veure més notícies</a>
        </div>
      </div>
      
    </section>
  );
}

export default LastNews;
