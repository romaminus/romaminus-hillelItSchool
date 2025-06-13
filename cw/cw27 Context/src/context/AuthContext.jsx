import { createContext, useContext, useState } from "react";
// Create Context for Authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login =(name) => {
        setUser({name})
    }
    const logout =() => {
        setUser(null)
    };
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

// Create custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);