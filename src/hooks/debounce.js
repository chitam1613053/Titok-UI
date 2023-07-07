import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handleDebounce = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handleDebounce);
        // eslint-disable-next-line
    }, [value]);

    return debounceValue;
}

export default useDebounce;
