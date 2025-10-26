import Noticia from "./Noticia";

function LastNews() {
  const noticies = [
    {
      id: 1,
      title: "PRIMER PARTIT LLIGA",
      date: "2025-10-14",
      titular: "Aquest cap de setmana han començat els partits dels equips federats.",
      img: "images/primerPartit.jpg",
    },
    {
      id: 2,
      title: "INICI TEMPORADA 25-26",
      date: "2025-09-12",
      titular:
        "Começa una nova temporada. Esperem molts èxits per totes les nostres seccions.",
      img: "images/cartellMasculi.jpg",
    },
    {
      id: 3,
      title: "CAMPIONES DE LLIGA",
      date: "2025-05-01",
      titular:
        "El nostre sènior femení ha guanyat la lliga a falta de tres jornades.",
      img: "images/campiones.jpg",
    },
    {
      id: 4,
      title: "PORTES OBERTES",
      date: "2025-06-23",
      titular: "Comencen les jornades de portes obertes. Apunteu-vos!",
      img: "images/cartellFemeni.jpg",
    }
  ];

  return (
    <section className="container mx-auto mb-10">
      <h3 className="text-primary mb-3">Últimes Notícies</h3>

      <div className="flex flex-wrap items-center justify-center gap-9 lg:gap-12">
        {noticies.map((noticia) => {
          return <Noticia key={noticia.id} info={noticia}></Noticia>;
        })}
      </div>

      <div className="flex justify-center items-center">
        <a href="" className="w-60 uppercase flex gap-2 justify-center items-center btn-primary !text-secondary p-2 rounded-lg mt-5">Veure més notícies</a>
      </div>
      
    </section>
  );
}

export default LastNews;
