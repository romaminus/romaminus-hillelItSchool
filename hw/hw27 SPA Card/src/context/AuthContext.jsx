import { createContext, useCallback, useContext, useEffect, useState } from "react";
// Create Context for Authentication
const AuthContext = createContext();


// Create a provider component
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [possibleUser, setPossibleUser] = useState(null);

    const login = useCallback(
        (name) => {
            let newUserProfile;
            let theme = 'dark';
            const storedUser = localStorage.getItem(name);
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && parsedUser.name) {
                    newUserProfile = {
                            name: parsedUser.name,
                            theme: parsedUser.theme || 'dark', // Використовуємо збережену тему або дефолтну
                        };
                    theme = newUserProfile.theme;
                }else{
                    newUserProfile = {
                        name, 
                        theme
                    };
                }
            }else{
                newUserProfile = {
                    name,
                    theme
                }
            }
        
            localStorage.setItem(name, JSON.stringify(newUserProfile));
            localStorage.setItem('lastVisitorName', name)
            setUser(newUserProfile);
        }, []
    )
    const logout =() => {
        setUser(null);
        localStorage.removeItem('lastVisitorName')
    };
    useEffect(()=>{
        const storedLastVisitorName = localStorage.getItem('lastVisitorName');
        if (storedLastVisitorName && !user) {
            login(storedLastVisitorName);
        }
    }, [login, user])
    return (
        <AuthContext.Provider value={{user, login, logout, possibleUser, setPossibleUser, setUser}}>
            {children}
        </AuthContext.Provider>
    )
};

// Create custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);