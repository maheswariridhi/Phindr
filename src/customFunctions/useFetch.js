import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        fetch(url)
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
                setErrorMsg(err.message);
                setIsLoading(false);
            })
    }, [url]);

    return { data, isLoading, errorMsg }

}

export default useFetch;