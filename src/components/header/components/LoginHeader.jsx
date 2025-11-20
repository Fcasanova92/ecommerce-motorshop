import { ListItem } from "@/components/ListItem";
import { Link } from "react-router";
import { FaSignInAlt } from "react-icons/fa";

export const LoginHeader = () => {
  return (
    <Link className="text-white text-decoration-none" to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1rem', fontWeight: 300 }}>
      Ingresar <FaSignInAlt />
    </Link>
  );
};