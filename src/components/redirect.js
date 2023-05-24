import { Navigate } from 'react-router-dom';

export const Redirect = ({ to }) => {
  return <Navigate to={to} replace />;
};
