import React, { useState, useEffect } from "react";
/*Custom Hook, creates a handler that grabs a value and only returns it after a certain amount of milliseconds.
clearTimeout clears the handler every time the value changes to ensure debouncedValue is updated with correct value (it restarts setTimeout everytime value changes).*/
function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
};

export default useDebounce;