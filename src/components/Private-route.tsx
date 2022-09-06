/** @format */

import { Navigate } from "react-router-dom";

interface IProps {
  redirectPath: string;
  status: boolean;
  children: any;
}

const ProtectedRoute: React.FC<IProps> = ({
  redirectPath = "/",
  status,
  children,
}) => {
  if (status) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default ProtectedRoute;
