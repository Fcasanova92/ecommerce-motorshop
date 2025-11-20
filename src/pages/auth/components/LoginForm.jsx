import { Helmet } from "react-helmet";
import React, { useState } from "react";
import '../styles/authStyle.css';
import { validateInput } from "../helpers/validateInput";
import { togglePasswordVisibility } from "../helpers/passwordVisuality";
import { Link, useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";
import { useAuthContext } from "@/context/AuthContext";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login, message, setMessage } = useAuthContext();

  const handleChange = (e) => {
    setMessage("");
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    const errorMsg = validateInput(id, value);
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

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
    <>
      <Helmet>
        <title>Iniciar Sesión - MOTORSHOP</title>
        <meta name="description" content="Inicia sesión en tu cuenta de MOTORSHOP para acceder a tu carrito y pedidos." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card shadow">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit} aria-label="Formulario de inicio de sesión">
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
                      aria-label="Correo electrónico"
                      aria-describedby="email-error"
                    />
                    {errors.email && <div id="email-error" className="invalid-feedback">{errors.email}</div>}
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
                        aria-label="Contraseña"
                        aria-describedby="password-error"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => togglePasswordVisibility(setShowPassword)}
                        aria-label="Mostrar u ocultar contraseña"
                      >
                        <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                      </button>
                      {errors.password && <div id="password-error" className="invalid-feedback">{errors.password}</div>}
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
    </>
  );
};
