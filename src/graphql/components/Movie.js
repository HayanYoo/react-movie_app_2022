import React from "react"
import {Link} from "react-router-dom";

export default ({id}) => (
    <div>
        <Link to={`/graphql/${id}`}>{id}</Link>
    </div>
);