import { ListItem } from "@/components/ListItem";
import { Link } from "react-router";
import { FaSignInAlt } from "react-icons/fa";

export const LoginHeader = () => {
  return (
    <ListItem id="user-session">
      <Link className="link-a" to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        Ingresar <FaSignInAlt />
      </Link>
    </ListItem>
  );
};