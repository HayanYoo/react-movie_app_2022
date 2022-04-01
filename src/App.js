import React from "react";


function Food({name, picture}) {
    return <div>
        <h1>I like {name}</h1>
        <img src={picture} alt={name}/>
    </div>
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"

    },
    {
        id: 2,
        name: "삼겹살",
        image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"

    },
    {
        id: 3,
        name: "비빔밥",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/04/20/572d121195216a73d6870429148cd8fd1.jpg"

    },
]

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}

function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    );
}

export default App;
