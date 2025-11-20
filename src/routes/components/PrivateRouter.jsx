// PrivateRouter.jsx
import { Navigate } from "react-router";
import { Spinner } from "@/components/Spinner";
import { PathConfig } from "@/utils/pathConfig";
import { useAuthContext } from "@/context/AuthContext";

export const PrivateRouter = ({ children }) => {
  const { loading, isOnline } = useAuthContext();

  if (loading) return <Spinner />; // mientras carga

  if (!isOnline) return <Navigate to={PathConfig.Login} replace />;

  return children;
};