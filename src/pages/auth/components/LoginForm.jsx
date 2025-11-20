// src/components/auth/LoginForm.jsx
import React, { useState } from "react";
import '../styles/authStyle.css';
import { validateInput } from "../helpers/validateInput";
import { togglePasswordVisibility } from "../helpers/passwordVisuality";
import { Link, useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";
import { useAuth } from "@/hooks/useAuth";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login, message, setMessage } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    const errorMsg = validateInput(id, value);
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // Validar todos los campos antes de enviar
    const newErrors = {
      email: validateInput("email", formData.email),
      password: validateInput("password", formData.password),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      setMessage("Por favor, corrige los errores antes de continuar.");
      return;
    }

    const success = login(formData.email, formData.password);

    if (success) {
      setMessage("Inicio de sesión exitoso. Redirigiendo...");
      navigate(PathConfig.Home, { state: { email: formData.email } });
    } else {
      setMessage("Error al iniciar sesión. Revisa tus credenciales.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="title-c mb-0">Iniciar Sesión</h3>
                  <i className="fa-solid fa-right-to-bracket fs-4 text-secondary"></i>
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

                <button className="btn btn-primary w-100 mb-3" type="submit">
                  Iniciar Sesión
                </button>

                <div className="text-center">
                  <Link className="text-decoration-none" to={PathConfig.Register}>
                    ¿No tienes cuenta? Regístrate aquí
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
