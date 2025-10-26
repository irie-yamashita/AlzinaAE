function Noticia({ info }) {
  return (
    <article className="mb-10 w-[312px] h-[435px] flex flex-col justify-start items-center gap-10 rounded-md overflow-hidden border hover:scale-105 transition-transform">
      <div className="relative w-full">
        <img
          className="w-full h-[251px] object-cover"
          src={info.img}
          alt="fotoNoticia"
        />
        <div className="bg-primary absolute -bottom-10 right-2 size-20 rounded-md text-background flex flex-col justify-center items-center text-center">
          <p>{dateToText(info.date).day}</p>
          <p>{dateToText(info.date).month}</p>
        </div>
      </div>
      <div className="py-3 px-4 space-y-2">
        <p>{info.title}</p>
        <p>{info.titular}</p>
      </div>
    </article>
  );
}

export default Noticia;


const dateArray = [
  "GEN",
  "FEB",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGT",
  "SEPT",
  "OCT",
  "NOV",
  "DES"
];

// helper
function dateToText(string) {
  const date = new Date(string);
 

  return {day: date.getDate(), month: dateArray[date.getMonth()], year: date.getFullYear()};
   
}