import React, { useState } from "react";
import { validarCorreu, validarTelefon, validarMajoriaEdat, validarCamp, validarFormulari } from "../utils/validations"; 


function Inscriptions() {

  //* DADES
  const inputs = [
    { id: 'name', name: 'name', label: 'Nom', required: true, type: 'text'},
    { id: 'lastName', name: 'lastName', label: 'Cognom', required: true, type: 'text' },
    { id: 'phone', name: 'phone', label: 'Telèfon', required: true, type: 'telf' },
    { id: 'mail', name: 'mail', label: 'Correu electrònic', required: true, type: 'text' },
    { id: 'birthdate', name: 'birthdate', label: 'Data naixement', required: true, type: 'date' },
  ]

  //* HOOKS - useState
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    mail: "",
    phone: "",
    birthdate: "",
    team: "fcf",
    inscriptionType: "new",
  });

  const [submitMessage, setSubmitMessage] = useState(null);

  // Inicialitzem tots els errors com a cadenes buides
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    mail: "",
    phone: "",
    birthdate: "",
  });



  //* HANDLERS

  const handleChange = (e) => {
    const { name, value, tagName, type } = e.target;

    // Actualitzem el valor del formulari
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validem només inputs (no radio, no select)
    if (tagName === "INPUT" && type !== "radio") {
      addFieldErrors(name, value);
    }

    // Netejem el missatge global quan l’usuari edita
    setSubmitMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validem TOT el formulari
    const valid = isFormValid();

    if (valid) {
      console.log("Formulari VÀLID: ", formData);
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
  };



  //* FUNCIONS

  const addFieldErrors = (name, value) => {
    const message = validarCamp(inputs, name, value);

    // Actualitzem errors: sempre guardem un text ("" o el missatge)
    setErrors((prev) => ({
      ...prev,
      [name]: message || "",
    }));

    return message;
  };

  const isFormValid = () => {
    const newErrors = validarFormulari(inputs, formData);

    // Omplim amb "" els que no tenen error
    const updatedErrors = {
      name: newErrors.name || "",
      lastName: newErrors.lastName || "",
      mail: newErrors.mail || "",
      phone: newErrors.phone || "",
      birthdate: newErrors.birthdate || "",
    };

    setErrors(updatedErrors);

    // Si tots els missatges són "", el formulari és vàlid
    return Object.values(updatedErrors).every((msg) => msg === "");
  };

  function renderInput (input) {
    const {name, id, type, label} = input;
    return (
      <div className="flex flex-col pt-4">
        <label className="text-background" htmlFor={name}>{label}</label>
        <input onChange={handleChange} className={`px-3 h-10 rounded-md bg-background ${errors[id] ? 'border !border-red-500' : 'border-background'}`} type={type} id={id}name={name} />
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
              <input type="radio" name="inscriptionType" id="new" value="new" onChange={handleChange} checked={formData.inscriptionType === "new"}/>
              <label htmlFor="new">Nova inscripció</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="inscriptionType" id="renew" value="renew" onChange={handleChange} checked={formData.inscriptionType === "renew"} />
              <label htmlFor="renew">Renovació</label>
            </div>
          </div>
          <div className="flex w-full">
            <select name="team" id="team" value={formData.team} onChange={handleChange} >
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
