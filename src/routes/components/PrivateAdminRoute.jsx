import { Navigate } from "react-router";
import { useAuthContext } from "@/context/AuthContext";
import { PathConfig } from "@/utils/pathConfig";

export const PrivateAdminRoute = ({ children }) => {
  const { currentUser, isOnline } = useAuthContext();

  // Verificar si está logueado y es el admin
  const isAdmin = isOnline && 
                  currentUser?.[0]?.email === "admin@gmail.com";

  if (!isAdmin) {
    return <Navigate to={PathConfig.Login} replace />;
  }

  return children;
};
