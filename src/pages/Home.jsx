import { Helmet } from "react-helmet";
import { MainLayout } from "@/layouts/MainLayout";
import { Card } from "@/components/Card";
import { CardSkeleton } from "@/components/skeleton/producto/CardSkeleton";
import { useState, useMemo, useEffect } from "react";
import { useServiceEmail } from "@/hooks/useServiceEmail";
import { Sucursal } from "@/components/Suscursal";
import { sucursales } from "@/components/constant/sucursales";
import { SearchBar } from "@/components/SearchBar";
import { Pagination } from "@/components/Pagination";
import { useProductContext } from "@/context/ProductContext";
import { Banner } from "@/components/header/components/Banner";

export const Home = () => {
  const {products, loading} = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    consulta: ""
  });
  const {sendMessage, loading: loadingSendMail, message} = useServiceEmail();

  console.log(products)

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }
    
    const searchLower = searchTerm.toLowerCase();
    return products.filter(product =>
      JSON.stringify(product)
      .toLowerCase()
      .includes(searchLower)
    );
  }, [products, searchTerm]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

 const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
      <Banner/>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="container-fluid">
        <section id="products" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
            <h2 className="title-b mb-0">Productos</h2>
            {searchTerm && (
              <span className="badge bg-primary">
                {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          <div className="row g-2">
            {loading ? (
              <CardSkeleton number={10} />
            ) : filteredProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <Card data={product} isLoading={loading}/>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-info text-center" role="alert">
                  <i className="fa-solid fa-search me-2"></i>
                  No se encontraron productos que coincidan con "{searchTerm}"
                </div>
              </div>
            )}
          </div>

          <Pagination 
            currentPage={currentPage}
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
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
