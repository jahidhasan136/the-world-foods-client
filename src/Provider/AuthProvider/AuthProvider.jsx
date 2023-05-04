import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
            return () => {
                return unsubscribe()
            }
        })
    }, [])



    const authInfo = {
        user,
        createUser,
        logIn,
        googleLogin,
        githubLogin,
        loader,
        setLoader,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;