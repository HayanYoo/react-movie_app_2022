import React from "react";
import {gql} from "apollo-boost";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";


const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id : $id){
            id
            title
            medium_cover_image
            description_intro
        }
    }`;

export default () => {
    const {id} = useParams();
    const {loading, data} = useQuery(GET_MOVIE, {
        variables: {id : +id}
    });
    if(loading){
        return "loading"
    }
    if (data && data.movie) {
        return data.movie.title;
    }
    return <h1>Detail</h1>
}