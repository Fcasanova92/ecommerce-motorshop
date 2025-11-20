import React, { useState } from "react";
import { togglePasswordVisibility } from "../helpers/passwordVisuality";
import { validateInput } from "../helpers/validateInput";
import { PathConfig } from "@/utils/pathConfig";
import { Link, useNavigate } from "react-router";
import '../styles/authStyle.css';
import { useAuthContext } from "@/context/AuthContext";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    condition: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { register, message, setMessage } = useAuthContext();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [id]: fieldValue }));

    if (type !== "checkbox") {
      const errorMsg = validateInput(id, value);
      setErrors((prev) => ({ ...prev, [id]: errorMsg }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const newErrors = {
      name: validateInput("name", formData.name),
      surname: validateInput("surname", formData.surname),
      email: validateInput("email", formData.email),
      password: validateInput("password", formData.password),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      setMessage("Por favor corrige los errores antes de continuar.");
      return;
    }

    if (!formData.condition) {
      setMessage("Debes aceptar los términos y condiciones.");
      return;
    }

    const success = register({
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      online: true,
    });

    if (success) {
      setMessage("Registro exitoso. Ya puedes iniciar sesión.");
      navigate(PathConfig.Home, {state: {email: formData.email}});
    } else {
      setMessage("Error: El email ya está registrado.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="title-c mb-0">Registro</h2>
                  <i className="fa-regular fa-address-card fs-4 text-secondary"></i>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Nombre..."
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="surname" className="form-label">Apellido</label>
                    <input
                      id="surname"
                      type="text"
                      className={`form-control ${errors.surname ? 'is-invalid' : ''}`}
                      placeholder="Apellido..."
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    {errors.surname && <div className="invalid-feedback">{errors.surname}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <div className="input-group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => togglePasswordVisibility(setShowPassword)}
                    >
                      <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    id="condition"
                    type="checkbox"
                    className="form-check-input"
                    checked={formData.condition}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, condition: e.target.checked }))
                    }
                  />
                  <label className="form-check-label" htmlFor="condition">
                    Acepto términos y condiciones
                  </label>
                </div>

                <button className="btn btn-primary w-100 mb-3" type="submit">
                  Registrarse
                </button>

                <div className="text-center">
                  <Link className="text-decoration-none" to={PathConfig.Login}>
                    ¿Tienes cuenta? Inicia sesión aquí
                  </Link>
                </div>

                {message && (
                  <div className={`alert ${message.includes('exitoso') ? 'alert-success' : 'alert-danger'} mt-3 mb-0`} role="alert">
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
