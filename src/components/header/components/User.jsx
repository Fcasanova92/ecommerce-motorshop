import { ListItem } from "@/components/ListItem";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

export const User = () => {
  const {logout} = useAuthContext();
  return (
    <ListItem className="link-a">
        <span className="link-a" onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
            Logout <FaSignOutAlt />
        </span>
    </ListItem>
  );
};
