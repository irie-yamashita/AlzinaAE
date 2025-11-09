import React, { useState } from "react";


function Inscriptions() {

  //* DADES
  const inputs = [
    { id: 'name', name: 'name', label: 'Nom', required: true, type: 'text'},
    { id: 'lastName', name: 'lastName', label: 'Cognom', required: true, type: 'text' },
    { id: 'phone', name: 'phone', label: 'Telèfon', required: true, type: 'telf' },
    { id: 'mail', name: 'mail', label: 'Correu electrònic', required: true, type: 'email' },
    { id: 'birthdate', name: 'birthdate', label: 'Data naixement', required: true, type: 'date' },
  ]

  //* ESTATS
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    mail: "",
    phone: "",
    birthdate: "",
  });

  const [submitMessage, setSubmitMessage] = useState(null);

  const [errors, setErrors] = useState({});



  //* HANDLERS

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualitzem el valor del formulari
    setFormData((prev) => ({ ...prev, [name]: value }));

    validateField(name, value)

    // Netejem l'submitMessage global quan l'usuari edita
    setSubmitMessage(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validem TOT el formulari amb la nostra funció (no usem checkValidity ni required natiu)
    const valid = globalValidation();

    if (valid) {
      // Acció quan tot és correcte: aquí normalment faríem fetch/axios per enviar al servidor
      console.log("Formulari VÀLID: ", formData);

      // Missatge d'èxit
      setSubmitMessage({
        type: "success",
        text: "Registre completat amb èxit!",
      });

    } else {
      setSubmitMessage({
        type: "error",
        text: "Hi ha errors en el formulari. Revisa els camps marcats en vermell.",
      });
    }
  }


  //* VALIDACIONS

  // correu: algo@algo.doslletresminim
  const validarCorreu = (correu) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correu);

  // correu: nou números
  const validarTelefon = (telefon) => /^\d{9}$/.test(telefon);

  // data naixement
  const validarMajoriaEdat = (dataNaixement) => {
    if (!dataNaixement) return false;


    const [any, mes, dia] = dataNaixement.split("-").map(Number);
    const dataNaix = new Date(any, mes - 1, dia);

    // Data actual (sense hora) per comparar exactament dies.
    const avui = new Date();
    const avuiUTC = new Date(avui.getFullYear(), avui.getMonth(), avui.getDate());

    // Calculem la data límit (fa 18 anys)
    const limitMajor = new Date(
      avuiUTC.getFullYear() - 18,
      avuiUTC.getMonth(),
      avuiUTC.getDate()
    );

    // Si la data de naixement és anterior o igual a la data límit, és major d'edat
    return dataNaix <= limitMajor;
  };


  //* FUNCIONS
  const validateField = (name, value) => {
    let message = "";
    //console.log('validant', name, value)

    switch (name) {
      case "name":
        if (!value.trim()) message = "El camp Nom és obligatori.";
        break;

      case "lastName":
        if (!value.trim()) message = "El camp Cognom és obligatori.";
        break;

      case "mail":
        if (!value.trim()) message = "El camp Correu Electrònic és obligatori.";
        else if (!validarCorreu(value.trim())) message = "El correu electrònic no és vàlid.";
        break;

      case "phone":
        if (!value.trim()) message = "El camp Telèfon és obligatori.";
        else if (!validarTelefon(value.trim())) message = "El número de telèfon no és vàlid.";
        break;

      case "birthdate":
        if (!value.trim()) message = "El camp Data Naixement és obligatori.";
        else if (!validarMajoriaEdat(value.trim())) message = "Has de ser major d'edat (18 anys mínim)";
        break;

      default:
        break;
    }


    // actualizo errors
    setErrors((prev) => {
      // si no hi ha missatge, borrem la clau; si hi ha missatge, l'afegim/actualitzem
      if (!message) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: message };
    });

    // també retornem el missatge per si volem usar-lo immediatament
    return message;
  };


  const globalValidation = () => {
    const newErrors = {};

    // Validació de camps obligatoris simples
    inputs.forEach(input => {
      console.log('input', input)
      if (input.required == true && !formData[input.name].trim()) {
        newErrors[input.name] = `El camp ${input.label} és obligatori.`;
      }
    });

    // Validacions específiques
    if (!newErrors.birthdate && !validarMajoriaEdat(formData.birthdate)) {
      newErrors.birthdate = "Has de ser major d'edat (18 anys mínim).";
    }

    if (!newErrors.mail && !validarCorreu(formData.mail.trim())) {
      newErrors.mail = "El correu electrònic no és vàlid.";
    }

    if (!newErrors.phone && !validarTelefon(formData.phone.trim())) {
      newErrors.phone = "El número de telèfon no és correcte (ha de tenir 9 dígits).";
    }


    // Actualitzem l'estat d'errors amb tots els errors trobats
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  function renderInput (input) {
    const name = input.name;
    return (
      <div className="flex flex-col pt-4">
        <label className="text-background" htmlFor={input.name}>{input.label}</label>
        <input onChange={handleChange} className="px-3 h-10 rounded-md bg-background" type={input.type} id={input.id}name={input.name} />
        <span className="text-xs font-medium text-red-600 mt-1 block">{errors[name]}</span>
      </div>
    )
  }

  return (
    <main className="bg-background container py-12">
      <div>
        <h2 className="text-primary">Inscripcions</h2>
      </div>
      <form className="bg-primary w-full rounded-xl p-20 mb-10 flex flex-col gap-8" onSubmit={handleSubmit}>
        <header className="flex flex-col gap-2 pb-8">
          <h3 className="text-secondary">Inscriu-te!</h3>
          <p className="text-background">
            Emplena el formulari per rebre el formulari d'inscripció al nostre
            club.
          </p>
        </header>
        {/* Missatge global d'èxit/error (resum) */}
        {submitMessage && (
          <div
            className={`p-3 mb-4 rounded-lg text-center font-medium ${submitMessage.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
              }`}
          >
            {submitMessage.text}
          </div>
        )}
        <fieldset className="flex flex-col justify-stretch">
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
          {inputs.map((input) => renderInput(input))}

        </fieldset>
        <button className="btn bg-secondary w-fit self-end" type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default Inscriptions;
