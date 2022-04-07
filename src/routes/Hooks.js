import {useState} from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target)
    }
    return {value, onChange};
};


function Hooks() {
        const name = useInput("Mr, ");
        return (
            <div>
                <input placeholder="Name" {...name}/>
            </div>
        )
}


export default Hooks;
