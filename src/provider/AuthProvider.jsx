// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
// import app from "../firebase/firebase.config";

export const AuthContext = createContext();
// const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = async (updatedData) => {
        try {
            await updateProfile(auth.currentUser, updatedData);
            // Update the user state after successfully updating the profile
            setUser({
                ...auth.currentUser, 
                displayName: updatedData.displayName, 
                photoURL: updatedData.photoURL, 
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error; 
        }
    };
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleSignIn,
        logout,
        setUser,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;