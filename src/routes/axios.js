import defaultAxios from "axios";
import {useEffect, useState} from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading : true,
        error : null,
        data : null
    })


    const [trigger, setTrigger] = useState(0);

    const reFetch = () => {
        setState({
            ...state,
            data : null,
            loading: true
        })
        setTrigger(Date.now());
    }

    useEffect(() => {
        if(!opts.url){
            return;
        }
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({...state, loading: false, error});
        })
    },[trigger]);

    return {...state, reFetch} ;
}

export default useAxios;