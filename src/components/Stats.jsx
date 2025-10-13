function Stats() {

  return (
    <div className="bg-primary flex justify-center items-center gap-24 h-72 mb-4">
        <div className="flex flex-col text-center justify-center items-center">
            <p className="font-catallina text-[36px] text-secondary">14</p>
            <p className="font-catallina text-[16px] text-background">Equips Registrats</p>
        </div>
        <div className="border h-24"></div>
        <div className="flex flex-col text-center justify-center items-center">
            <p className="font-catallina text-[36px] text-secondary">450+</p>
            <p className="font-catallina text-[16px] text-background">Jugadors/res</p>
        </div>
        <div className="border h-24"></div>
        <div className="flex flex-col text-center justify-center items-center">
            <p className="font-catallina text-[36px] text-secondary">130+</p>
            <p className="font-catallina text-[16px] text-background">Premis Guanyats</p>
        </div>
    </div>
  )
}

export default Stats;