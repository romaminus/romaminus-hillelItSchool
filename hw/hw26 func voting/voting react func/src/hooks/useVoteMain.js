import { useState, useCallback, useEffect, } from "react";

export function useVoteMain(id) {
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem(id);
        return storedCount ? +storedCount : 0;
    });

    useEffect(() => {
        localStorage.setItem(id, count.toString());
    }, [id, count]);

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    const storage = [];
    const [value, setValue] = useState(0);
    const [ident, setIdent] = useState('crown');
    function findWinner() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); 
            const value = localStorage.getItem(key); 
            storage.push({
                [key]: +value
            });
        };
        storage.forEach(el=>{
            const key = Object.keys(el)[0];
            const elValue = Object.values(el)[0];
            if (elValue>value) {
                setValue(elValue);
                setIdent(key);
            }
        })
    }

    return {
        incrementCount,
        count,
        findWinner,
        value,
        ident
    }
}