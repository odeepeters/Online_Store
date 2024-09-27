// import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'

const isAuthenticated = () => {
    return !!localStorage.getItem('token');
}

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;