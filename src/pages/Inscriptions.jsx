import React, { useState } from "react";
import { validarCorreu, validarTelefon, validarMajoriaEdat, validarCamp, validarFormulari } from "../utils/validations";
import '../assets/css/formularis.css'


function Inscriptions() {

  //* DADES
  const inputs = [
    { id: 'name', name: 'name', label: 'Nom', required: true, type: 'text' },
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

  function renderInput(input) {
    const { name, id, type, label } = input;
    return (
      <div className="flex-column">
        <label className="input-text-label " htmlFor={name}>{label}</label>
        <input onChange={handleChange} className={`input-text ${errors[id] ? 'form-message error' : 'border-background'}`} type={type} id={id} name={name} />
        <span className="text-error">{errors[name]}</span>
      </div>
    )
  }


  return (
    <main className="container py-12">
      <h1 className="text-primary text-heading-mobile-2 md:text-heading-desktop-2">Inscripcions</h1>

      <form className="form" onSubmit={handleSubmit}>
        <img className="logo" src="/images/escut-alzina.png" alt="logo alzina" />
        <div className="flex-column gap-6">
          <header className="form-header">
            <h3 className="form-title">Inscriu-te!</h3>
            <p className="form-description">
              Emplena el formulari per rebre el formulari d'inscripció al nostre
              club.
            </p>
          </header>

          {/* Missatge global */}
          {submitMessage && (
            <div className={`form-message ${submitMessage.type}`}>
              {submitMessage.text}
            </div>
          )}

          <fieldset className="form-grid">
            {/* Radio buttons */}
            <div className="radio-option">
              <input
                type="radio"
                name="inscriptionType"
                id="new"
                value="new"
                onChange={handleChange}
                checked={formData.inscriptionType === "new"}
              />
              <label htmlFor="new">Nova inscripció</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                name="inscriptionType"
                id="renew"
                value="renew"
                onChange={handleChange}
                checked={formData.inscriptionType === "renew"}
              />
              <label htmlFor="renew">Renovació</label>
            </div>

            {/* Select */}
            <div className="select-wrapper">
              <select
                name="team"
                id="team"
                value={formData.team}
                onChange={handleChange}
              >
                <option value="fcf">FCF</option>
                <option value="ceeb">CEEB</option>
              </select>
            </div>

            {inputs.map((input) => renderInput(input))}
          </fieldset>

          <button className="submit-btn" type="submit">
            Enviar
          </button>
        </div>
        </form>
    </main>
  );
}

export default Inscriptions;
