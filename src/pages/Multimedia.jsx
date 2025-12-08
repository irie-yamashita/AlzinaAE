import AudioPlayer from '../components/AudioPlayer'
import VideoPlayer from '../components/VideoPlayer';

function Multimedia() {
  const images = {
    seniorFem: [
      { name: "img7", col: 4, alt: "sènior femení campiones" },
      { name: "img13", col: 2, alt: "sènior femení mans" },
      { name: "img6", col: 2, alt: "sènior femení tanca" },
      { name: "img14", col: 2, alt: "sènior femení campiones" },

    ],
    seniorMasc: [
      { name: "img1", col: 2, alt: "sènior masculí porter-jugador 11" },
      { name: "img2", col: 2, alt: "sènior masculí capità" },
      { name: "img3", col: 2, alt: "sènior masculí falta" },
      { name: "img8", col: 3, alt: "sènior masculí foto grup" },
      { name: "img10", col: 3, alt: "sènior masculí porter-jugador 10" },
    ],
  };

  const imgsSizes = {
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
  };

  return (
    <main className="container py-12 space-y-6">
      <header className='flex justify-between w-full'>
        <h1 className="text-heading-desktop-2 text-primary pb-3">Multimèdia</h1>
      </header>
      <AudioPlayer file="football-crowd" />
      <article className="space-y-2">
        <h2 className="text-heading-desktop-3 text-primary">Sènior Femení</h2>
        <div className="flex flex-col items-stretch md:grid grid-cols-6 gap-x-2 md:gap-x-4 gap-y-6">
          {images.seniorFem.map((image) => (
            <img
              srcSet={`/images/${image.name}-480w.webp 480w, /images/${image.name}-720w.webp 720w, /images/${image.name}-1440w.webp 1440w`}
              src={`/images/${image.name}-720w.webp`}
              alt={image.alt ? image.alt : 'imatge alzina'}
              className={`w-full h-auto object-cover ${imgsSizes[image.col]} hover:scale-[102%] transition-transform duration-300 rounded-sm max-h-[500px]`}
              loading="lazy"
            />
          ))}
        </div>
      </article>
      <article className="space-y-2">
        <h2 className="text-heading-desktop-3 text-primary">Sènior Masculí</h2>
        <div className="flex flex-col items-stretch md:grid grid-cols-6 gap-x-2 md:gap-x-4 gap-y-6">
          {images.seniorMasc.map((image) => (
            <img
              srcSet={`/images/${image.name}-480w.webp 480w, /images/${image.name}-720w.webp 720w, /images/${image.name}-1440w.webp 1440w`}
              src={`/images/${image.name}-720w.webp`}
              alt={image.alt ? image.alt : 'imatge alzina'}
              className={`w-auto ${imgsSizes[image.col]} object-cover hover:scale-[102%] transition-transform duration-300 rounded-sm`}
              loading="lazy"
            />
          ))}
        </div>
      </article>

      <article className="space-y-2">
        <h2 className="text-heading-desktop-3 text-primary">Videoteca</h2>
        <div className="flex flex-col items-stretch md:grid grid-cols-6 gap-x-2 md:gap-x-4 gap-y-6">
          <VideoPlayer file='ultimPartit' width='720' height='1280' cols={2}/>
          <VideoPlayer file='falta' width='720' height='1280' cols={2}/>
          <VideoPlayer file='pasilloCampiones' width='720' height='1280' cols={2}/>
        </div>
      </article>

    </main>
  );
}

export default Multimedia;
