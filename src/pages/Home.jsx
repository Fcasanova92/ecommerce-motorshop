import { Helmet } from "react-helmet";
import { MainLayout } from "@/layouts/MainLayout";
import { useObtenerProductos } from "@/hooks/useObtenerProductos";
import { Card } from "@/components/Card";
import { CardSkeleton } from "@/components/skeleton/producto/CardSkeleton";
import { useState } from "react";
import { useServiceEmail } from "@/hooks/useServiceEmail";
import { Sucursal } from "@/components/Suscursal";
import { sucursales } from "@/components/constant/sucursales";

export const Home = () => {
  // funciones para eventos
  const {productos, loading} = useObtenerProductos();
   const [formData, setFormData] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    consulta: ""
  });
  const {sendMessage, loading: loadingSendMail, message} = useServiceEmail();

 const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Manejo de submit
  const handleSendMessage = async (event) => {
    event.preventDefault();
    await sendMessage(formData);
  };
  
  return (
    <MainLayout>
      <Helmet>
        <title>MOTORSHOP - Tienda de Motocicletas y Repuestos</title>
        <meta name="description" content="Encuentra las mejores motocicletas, repuestos y accesorios en MOTORSHOP. Amplio catálogo de productos para tu moto." />
        <meta name="keywords" content="motocicletas, motos, repuestos, accesorios, MOTORSHOP" />
        <meta property="og:title" content="MOTORSHOP - Tienda de Motocicletas y Repuestos" />
        <meta property="og:description" content="Encuentra las mejores motocicletas, repuestos y accesorios en MOTORSHOP." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://motorshop.com" />
      </Helmet>
      <div className="container-fluid">
        <section id="products" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <h2 className="title-b mb-0">Productos</h2>
          </div>

          <div className="row g-4">
            {loading ?
              <CardSkeleton number={10} />
              :
              productos.slice(0,10).map((product, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <Card data={product} isLoading={loading}/>
                </div>
              ))
            }
          </div>
        </section>

        <section id="about-us" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <h2 className="title-b mb-0">Sobre Nosotros</h2>
          </div>
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="title-c mb-0">La Empresa</h2>
                    <i className="fa-solid fa-shop"></i>
                  </div>
                  <p className="body-b">
                    En <b><i>MOTORSHOP</i></b>, creemos que cada viaje cuenta una historia...
                  </p>
                  {/* resto de párrafos */}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <form
                id="contact"
                className="card shadow-sm h-100"
                onSubmit={handleSendMessage}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="title-c mb-0">Contacto</h3>
                    <i className="fa-solid fa-comments"></i>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Nombre..."
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="surname">Apellido</label>
                    <input
                      id="surname"
                      type="text"
                      className="form-control"
                      placeholder="Apellido..."
                      value={formData.surname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="telephone">Teléfono</label>
                    <input
                      id="telephone"
                      type="text"
                      className="form-control"
                      placeholder="Teléfono"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email..."
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="consulta">Consulta</label>
                    <textarea
                      id="consulta"
                      className="form-control"
                      rows="3"
                      placeholder="Consulta..."
                      value={formData.consulta}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    id="send"
                    className="btn btn-primary w-100"
                    type="submit"
                    disabled={loadingSendMail}
                  >
                    {loadingSendMail ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : "Enviar"}
                  </button>

                  {message && (
                    <div className={`alert ${loadingSendMail ? 'alert-info' : 'alert-success'} mt-3 mb-0`} role="alert">
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="branchs" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <h2 className="title-b mb-0">Sucursales</h2>
          </div>
          <div className="row g-4">
            {
              sucursales.map((sucursal) => (
                <div key={sucursal} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <Sucursal sucursal={sucursal}/>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
