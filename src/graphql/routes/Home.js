import React from "react";
import { gql } from "apollo-boost"
import {useQuery} from "@apollo/client";
import Movie from "../components/Movie";

const GET_MOVIES = gql`{
    movies {
        id
        description_intro
        title
    }
}`


export default () => {
    const {loading, data} = useQuery(GET_MOVIES)
    return (
        <div>
            {loading ? "Loading..." : null}
            {!loading && data.movies && data.movies.map(m => <Movie key={m.id} id={m.id}/>)}
        </div>
    )
}