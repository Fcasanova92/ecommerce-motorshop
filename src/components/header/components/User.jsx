import { ListItem } from "@/components/ListItem";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

export const User = () => {
  const {logout} = useAuthContext();
  return (
    <span className="text-white" onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 300 }}>
      Logout <FaSignOutAlt />
    </span>
  );
};
