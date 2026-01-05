function Stats() {

  const stats = [
    {
      title: 'Equips registrats',
      number: 14,
    },
    {
      title: 'Jugadors/res',
      number: 450,
      plus: true
    },
    {
      title: 'Premis Guanyats',
      number: 130,
      plus: true
    },
  ]

  return (
    <section className="bg-primary py-[30px] min-h-[300px] flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-6">
        {stats.map((stat, i) => {
          return (
            <>
              <article key={stat.title} className={`flex flex-col text-center justify-center items-center ${i != stats.length-1 ? 'md:border-r' : ''}`}>
                  <p className="font-catallina text-[25px] md:text-[36px] text-secondary">{stat.number}{stat.plus && <span>+</span>}</p>
                  <p className="font-catallina text-small-desktop md:text-[16px] text-background">{stat.title}</p>
              </article>
              <div className={`md:hidden h-[1px] bg-background w-[10%] self-center mx-auto ${i != stats.length-1 ? '' : 'hidden'}`} aria-hidden />
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Stats;