import {useEffect, useState} from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event)
        const {target: {value}} = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value)
        }
    }
    return {value, onChange};
};

const content = [
    {
        tab: "Section 1",
        content: "I am the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I am the content of the Section 2"
    }
]


const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)){
        return
    }
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    }
}

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle)
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
}


function Hooks() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000)
    const {currentItem, changeItem} = useTabs(0, content);
    const maxLen = value => !value.includes("@");
    const name = useInput("Mr, ", maxLen);
    return (
        <div>
            <div>
                <input placeholder="Name" {...name}/>
            </div>
            <div>
                {
                    content.map((section, index) => (
                        <button onClick={() => changeItem(index)}>{section.tab}</button>
                    ))
                }
                <div>
                {currentItem.content}
                </div>
            </div>
        </div>
    )
}


export default Hooks;
