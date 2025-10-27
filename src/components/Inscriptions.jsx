function Inscriptions() {
  return (
    <main className="bg-background">
      <div>
        <h2 className="text-primary">Inscripcions</h2>
      </div>

      <form className="bg-primary w-full">
        <h3 className="text-secondary">Inscriu-te!</h3>
        <p>
          Emplena el formulari per rebre el formulari d'inscripció al nostre
          club.
        </p>
        <fieldset>
          <div>
            <select name="team" id="team">
              <option value="fcf">FCF</option>
              <option value="ceeb">CEEB</option>
            </select>
          </div>
          <div>
            <input type="radio" name="inscription-type" id="new" />
            <label htmlFor="new">Nova inscripció</label>
          </div>
          <div>
            <input type="radio" name="inscription-type" id="renew" />
            <label htmlFor="renew">Renovació</label>
          </div>

          <div>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="lastName">Cognom</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="mail">Correu electrònic</label>
            <input type="email" id="mail" name="mail" />
          </div>
          <div>
            <label htmlFor="phone">Telèfon</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="birthday">Data de naixement</label>
            <input type="date" id="birthday" name="birthday" />
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Inscriptions;
