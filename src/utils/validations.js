

//* VALIDACIONS

// correu: algo@algo.doslletresminim
export const validarCorreu = (correu) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correu);

// correu: nou números
export const validarTelefon = (telefon) => /^\d{9}$/.test(telefon);

// data naixement
export const validarMajoriaEdat = (dataNaixement) => {
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

export const validarCamp = (inputs, name, value) => {
    const input = inputs.find((i) => i.name === name);

    let message = "";
    //console.log('validant', name, value)

    //validació genèrica
    if (input.required && !value.trim()) {
        message = `El camp ${input.label} és obligatori.`;
    }

    // Validació específica (si ha passat la genèrica)
    if (message.length == 0) {

        switch (name) {
            case "mail":
                if (!validarCorreu(value.trim())) message = `El ${input.label} no és vàlid.`;
                break;

            case "phone":
                if (!validarTelefon(value.trim())) message = `El ${input.label} no és vàlid. (9 dígits)`;
                break;

            case "birthdate":
                if (!validarMajoriaEdat(value.trim())) message = "Has de ser major d'edat (18 anys mínim)";
                break;

            default:
                break;
        }
    }

    return message;
};


export const validarFormulari = (inputs, formData) => {
    const newErrors = {};

    // Validació de camps obligatoris simples
    inputs.forEach(input => {
      if (input.required == true && !formData[input.name].trim()) {
        newErrors[input.name] = `El camp ${input.label} és obligatori.`;
      }
    });

    // Validacions específiques
    if (!newErrors.mail && !validarCorreu(formData.mail.trim())) {
      newErrors.mail = `El ${input.label} no és vàlid.`;
    }
    
    if (!newErrors.phone && !validarTelefon(formData.phone.trim())) {
      newErrors.phone = `El ${input.label} no és vàlid. (9 dígits)`;
    }
    
    if (!newErrors.birthdate && !validarMajoriaEdat(formData.birthdate)) {
    newErrors.birthdate = "Has de ser major d'edat (18 anys mínim).";
    }


    return newErrors;
  };
