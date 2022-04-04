import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";

function Detail() {
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    const [detail, setDetail] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setDetail(json.data.movie)
        setLoading(false)
    }
    console.log(detail)
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {loading ?
                <div>
                    <span>Loading...</span>
                </div> :
                <div>
                <h1>Detail</h1>
                <img src={detail.medium_cover_image}/>
                <h3>{detail.title}</h3>
                <ul>
            {detail.genres.map((g, index) => (
                <li key={index}>{g}</li>
                ))}
                </ul>
                <p>{detail.description_full}</p>
                </div>
            }
        </div>
    )

}

export default Detail;