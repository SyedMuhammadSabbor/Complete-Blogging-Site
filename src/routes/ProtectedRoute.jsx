import React from 'react';
import { Navigate } from 'react-router-dom';
import useStoreContext from '../context';

const ProtectedRoute = ({ children }) => {
  const { user } = useStoreContext();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
