// iamshaunjp (2020). Complete-React-Tutorial. GitHub. https://github.com/iamshaunjp/Complete-React-Tutorial

import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {

        const abortCrtl = new AbortController();

        fetch(url, { signal: abortCrtl.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Cannot fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setErrorMsg(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    setErrorMsg(err.message);
                    setIsLoading(false);
                }
            })

            return () => abortCrtl.abort();

    }, [url]);

    return { data, isLoading, errorMsg }

}

export default useFetch;