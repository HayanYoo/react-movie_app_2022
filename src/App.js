import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
    return <div>
        <h1>I like {name}</h1>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
        rating : 5

    },
    {
        id: 2,
        name: "삼겹살",
        image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
        rating: 4.9

    },
    {
        id: 3,
        name: "비빔밥",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/04/20/572d121195216a73d6870429148cd8fd1.jpg",
        rating: 4.8

    },
]

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
};


function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    );
}

export default App;
