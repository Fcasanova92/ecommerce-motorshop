import { Link } from "react-router";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { LoginHeader } from "./components/LoginHeader";
import { headerItems } from "./constant/headerItem";
import "./Header.css";
import { Banner } from "@/components/header/components/Banner";
import { User } from "./components/User";
import { CartHeader } from "./components/Cart";
import { ScrollToHash } from "./components/ScrollToHash";
import { FaMotorcycle } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

export const Header = () => {
  const {isOnline}  = useAuthContext();
  return (
    <header>
      <nav id="primary">
        <FaMotorcycle style={{ color: '#fff', fontSize: '1.6rem', letterSpacing: '16px' }} />
        <ScrollToHash />
        <List type = {"ul"} className = {"menu"}>
          {
            headerItems.map((item) => {
                    return (
            <ListItem key={item.path}>
              <Link className="link-a" to={item.path} replace={true}>
                {item.label}
              </Link>
            </ListItem>
             );
            })
          }
          <CartHeader  />
          {
            isOnline ?
            <User />
            :
            <LoginHeader/>
          }
        </List>
      </nav>
      <Banner/>
    </header>
  );
};
