function Multimedia() {
  const images = {
    seniorFem: [
      { name: "img7", col: 4, alt: "sènior femení mans" },
      { name: "img6", col: 2, alt: "sènior femení tanca" },
    ],
    seniorMasc: [
      { name: "img1", col: 2, alt: "sènior masculí porter-jugador 11" },
      { name: "img2", col: 2, alt: "sènior masculí capità" },
      { name: "img3", col: 2, alt: "sènior masculí falta" },
      { name: "img8", col: 3, alt: "sènior masculí foto grup" },
      { name: "img10", col: 3, alt: "sènior masculí porter-jugador 10" },
    ],
  };

  return (
    <main className="bg-background container py-12 space-y-6">
      <h1 className="text-heading-desktop-2 text-primary pb-3">Multimèdia</h1>

      <article className="space-y-2">
        <h2 className="text-heading-desktop-3 text-primary">Sènior Femení</h2>
        <div className="flex flex-col items-center md:items-start md:grid grid-cols-6 gap-x-2 md:gap-x-4 gap-y-6">
          {images.seniorFem.map((image) => (
            <img
              srcSet={`/images/${image.name}-480w.webp 480w, /images/${image.name}-720w.webp 720w, /images/${image.name}-1440w.webp 1440w`}
              src={`/images/${image.name}-720w.webp`}
              alt="foto sènior masculí"
              className={`w-auto col-span-${image.col} hover:scale-[103%] transition-transform duration-300`}
            />
          ))}
        </div>
      </article>
      <article className="space-y-2">
        <h2 className="text-heading-desktop-3 text-primary">Sènior Masculí</h2>
        <div className="flex flex-col items-center md:items-start md:grid grid-cols-6 gap-x-2 md:gap-x-4 gap-y-6">
          {images.seniorMasc.map((image) => (
            <img
              srcSet={`/images/${image.name}-480w.webp 480w, /images/${image.name}-720w.webp 720w, /images/${image.name}-1440w.webp 1440w`}
              src={`/images/${image.name}-720w.webp`}
              alt="foto sènior masculí"
              className={`w-auto col-span-${image.col} hover:scale-[103%] transition-transform duration-300`}
            />
          ))}
        </div>
      </article>
    </main>
  );
}

export default Multimedia;
