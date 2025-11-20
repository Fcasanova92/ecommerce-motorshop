import { Link } from "react-router";
import { LoginHeader } from "./components/LoginHeader";
import { headerItems } from "./constant/headerItem";
import { User } from "./components/User";
import { CartHeader } from "./components/Cart";
import { ScrollToHash } from "./components/ScrollToHash";
import { FaMotorcycle } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

export const Header = () => {
  const {isOnline, currentUser}  = useAuthContext();
  const isAdmin = currentUser?.[0]?.email === "admin@gmail.com";
  
  return (
    <header className="bg-dark mb-3">
      <ScrollToHash />
      <nav className="container-fluid py-3 px-4">
        <div className="d-flex align-items-center justify-content-between">
          <FaMotorcycle style={{ color: '#fff', fontSize: '1.6rem', marginRight: '2rem' }} />
          
          <ul className="d-flex align-items-center gap-4 mb-0 list-unstyled">
            {headerItems.map((item) => (
              <li key={item.path}>
                <Link className="text-white text-decoration-none" to={item.path} replace={true} style={{fontSize: '1rem', fontWeight: 300}}>
                  {item.label}
                </Link>
              </li>
            ))}
            {isAdmin && (
              <li>
                <Link className="text-white text-decoration-none" to="/admin" style={{fontSize: '1rem', fontWeight: 300}}>
                  Admin
                </Link>
              </li>
            )}
            <li>
              <CartHeader />
            </li>
            <li>
              {isOnline ? <User /> : <LoginHeader />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
