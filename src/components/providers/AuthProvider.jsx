import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    // Create User with email and password
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        user,
        setUser,
        createUser,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node, // or PropTypes.element if you only expect one React element
};
export default AuthProvider;