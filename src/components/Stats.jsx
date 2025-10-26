function Stats() {

  return (
    <section className="bg-primary flex justify-center items-center h-32 gap-10 md:gap-24 md:h-72">
        <div className="flex flex-col text-center justify-center items-center">
            <p className="font-catallina text-[36px] text-secondary">14</p>
            <p className="font-catallina text-[16px] text-background">Equips Registrats</p>
        </div>
        <div className="bg-background h-20 md:h-24 size-0.5"></div>
        <div className="flex flex-col text-center justify-center items-center">
            <p className="font-catallina text-[36px] text-secondary">450+</p>
            <p className="font-catallina text-[16px] text-background">Jugadors/res</p>
        </div>
        <div className="bg-background h-20 md:h-24 size-0.5"></div>
        <div className="flex flex-col text-center justify-center items-center">
            <p className="font-catallina text-[36px] text-secondary">130+</p>
            <p className="font-catallina text-[16px] text-background">Premis Guanyats</p>
        </div>
    </section>
  )
}

export default Stats;