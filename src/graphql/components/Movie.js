import React from "react"
import {Link} from "react-router-dom";
import styled from "styled-components";
import {gql} from "apollo-boost";
import {useMutation, useQuery} from "@apollo/client";


const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id : Int!, $isLiked : Boolean!){
        toggleLikeMovie(id : $id, isLiked : $isLiked ) @client
    }
`

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.p`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

const Like = styled.div`
  cursor: pointer;
  text-align: right;
`;


export default ({id, bg, isLiked}) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, {
        variables: {id: parseInt(id), isLiked: isLiked}
    });
    return (
        <div>
            <Container>
                <Link to={`/graphql/${id}`}>
                    <Poster bg={bg}/>
                </Link>
                <Like onClick={toggleMovie} >{isLiked ? "💖" : "🤍"}</Like>
            </Container>
        </div>
    );
};