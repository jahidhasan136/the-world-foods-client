import React, { Children, createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({Children}) => {

    const user = {displayName : 'jahid'}
    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;