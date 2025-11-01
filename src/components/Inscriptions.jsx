function Inscriptions() {
  return (
    <main className="bg-background container py-12">
      <div>
        <h2 className="text-primary">Inscripcions</h2>
      </div>

      <form className="bg-primary w-full rounded-xl p-20 mb-10">
        <header className="flex flex-col gap-2 pb-8">
          <h3 className="text-secondary">Inscriu-te!</h3>
          <p className="text-background">
            Emplena el formulari per rebre el formulari d'inscripció al nostre
            club.
          </p>
        </header>
        <fieldset>
          <div className="flex text-background justify-center gap-12">
            <div className="flex items-center gap-2">
              <input type="radio" name="inscription-type" id="new" />
              <label htmlFor="new">Nova inscripció</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="inscription-type" id="renew" />
              <label htmlFor="renew">Renovació</label>
            </div>
          </div>

          <div className="flex w-full">
            <select name="team" id="team">
              <option value="fcf">FCF</option>
              <option value="ceeb">CEEB</option>
            </select>
          </div>
          <div className="flex flex-col pt-4 text-background">
            <label htmlFor="name">Nom</label>
            <input class="h-10 rounded-md bg-background" type="text" id="name" name="name" />
          </div>
          <div className="flex flex-col pt-4 text-background">
            <label htmlFor="lastName">Cognom</label>
            <input class="h-10 rounded-md bg-background" type="text" id="lastName" name="lastName" />
          </div>
          <div className="flex flex-col pt-4 text-background">
            <label htmlFor="mail">Correu electrònic</label>
            <input class="h-10 rounded-md bg-background" type="email" id="mail" name="mail" />
          </div>
          <div className="flex flex-col pt-4 text-background">
            <label htmlFor="phone">Telèfon</label>
            <input class="h-10 rounded-md bg-background" type="tel" id="phone" name="phone" />
          </div>
          <div className="flex flex-col pt-4 text-background ">
            <label htmlFor="birthday">Data de naixement</label>
            <input class="h-10 rounded-md text-gray-500 bg-background" type="date" id="birthday" name="birthday" />
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Inscriptions;
