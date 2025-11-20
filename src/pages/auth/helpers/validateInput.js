export const validateInput = (field, value) => {
  if (!value?.trim()) return "Este campo es obligatorio.";

  switch (field) {
    case "name":
    case "surname":
      if (value.length < 2)
        return "Debe tener al menos 2 caracteres.";
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(value))
        return "Solo se permiten letras.";
      break;

    case "email":
        {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value))
            return "Formato de email inválido.";
            break;
        }

    case "password":
      if (value.length < 6)
        return "La contraseña debe tener al menos 6 caracteres.";
      if (!/[A-Z]/.test(value))
        return "Debe contener al menos una mayúscula.";
      if (!/[0-9]/.test(value))
        return "Debe contener al menos un número.";
      break;

    default:
      return "";
  }

  return "";
};
