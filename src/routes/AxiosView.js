import useAxios from "./axios";


function AxiosView(){
    const {loading, data, error, reFetch} = useAxios({
        url : "https://yts.mx/api/v2/list_movies.json"
    })

    console.log(loading, error, JSON.stringify(data))

    return (
        <div>
            <h1>{data && data.status}</h1>
            <h1>{loading && "Loading"}</h1>
            <button onClick={reFetch}>button</button>
        </div>
    )
}

export default AxiosView;