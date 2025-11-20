import { Icon } from "../Icon";
import { footerItem } from "./constant/footerItem";
import qrAfip from "@/assets/img/qr_afip/data_fiscal.png"

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h3 className="h5 mb-3 pb-2 border-bottom border-secondary">Redes Sociales</h3>
            <ul className="list-unstyled">
              {footerItem.map((item) => (
                <li key={item.label} className="mb-2">
                  <a 
                    href="https://google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-light text-decoration-none d-flex align-items-center"
                  >
                    <Icon className={item.className} />
                    <span className="ms-2">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h3 className="h5 mb-3 pb-2 border-bottom border-secondary">Datos Fiscales</h3>
            <div className="d-flex justify-content-center justify-content-md-start">
              <img
                src={qrAfip}
                alt="QR data fiscal"
                style={{maxWidth: '150px', width: '100%'}}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};