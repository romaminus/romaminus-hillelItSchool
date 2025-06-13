import { useCallback } from "react";
import { useAuth } from "../context/AuthContext";

function useMyFunc() {
    const {login, possibleUser, setPossibleUser, user, setUser} = useAuth();
    function inputChange(obj){
        setPossibleUser({
            name: obj.target.value
        });
    }
    function submitChange(e){
        e.preventDefault();
        possibleUser?.name && login(possibleUser.name);
    }
    function changeValueTheme(e){
        setUser({
            ...user,
            theme: e.target.dataset.theme
        });
        if (localStorage.getItem('lastVisitorName')) {
                localStorage.setItem(user.name, JSON.stringify({
                ...user,
                theme: e.target.dataset.theme
            }))
        }
        
    }

    return ( {
        inputChange,
        submitChange,
        changeValueTheme,
    } );
}

export default useMyFunc;