import {useState} from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event)
        const { target : {value}} = event;
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value);
        }

        if(willUpdate) {
            setValue(value)
        }
    }
    return {value, onChange};
};


function Hooks() {
    const maxLen = value => !value.includes("@");
        const name = useInput("Mr, ", maxLen);
        return (
            <div>
                <input placeholder="Name" {...name}/>
            </div>
        )
}


export default Hooks;
