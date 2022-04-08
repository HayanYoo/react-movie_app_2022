import {useEffect, useRef, useState} from "react";
import {elementType} from "prop-types";

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
    if (!allTabs || !Array.isArray(allTabs)) {
        return
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
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

const useClick = (onCLick) => {
    const element = useRef();
    useEffect(() => {
        if (typeof onCLick !== "function") {
            return;
        }
        if (element.current) {
            element.current?.addEventListener("click", onCLick);
        }

        return () => {
            if (element.current) {
                element.current?.removeEventListener("click", onCLick);
            }
        }
    }, [])
    return element;
}

const useConfirm = (message = "", callback) => {
    if (typeof callback !== "function") {
        return
    }

    const conformAction = () => {
        if (window.confirm(message)) {
            callback();
        }
    }
    return conformAction;
}

const useFadeIn = (duration = 1, delay = 0) => {

    const element = useRef();
    useEffect(() => {
        if (typeof duration !== "number" || typeof delay !== "number") {
            return
        }

        if (element.current) {
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [])
    return {ref: element, style: {opacity: 0}};
}

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine)
        }
        setStatus(navigator.onLine)
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])

    return status;
}

const useScroll = () => {
    const [state, setState] = useState({
        x : 0,
        y : 0,
    })
    const onScroll = event => {
        console.log(window.scrollY)
        setState({y:window.scrollY, x:window.scrollX})
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })
    return state;
}

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current){
            element.current?.requestFullscreen();
            if(callback && typeof callback === "function"){
                callback(true)
            }
        }
    }

    const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
            callback(false)
        }
    }
    return {element, triggerFull, exitFull}
}

function Hooks() {
    const onFullS = (isFull) => {
        console.log(isFull? "We are full" : "We are small");
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullS);

    const {y} = useScroll()

    const handleNetworkChange = (online) => {
        console.log(online? "We just went online" : "We are offline");
    }
    const onLine = useNetwork(handleNetworkChange);

    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    const deleteWorld = () => console.log("Deleting the world...")
    const confirmDelete = useConfirm("Are you sure delete?", deleteWorld)

    const sayHello = () => console.log("Hello")
    const title = useClick(sayHello);

    const potato = useRef()
    setTimeout(() => potato.current?.focus(), 2000)

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000)

    const {currentItem, changeItem} = useTabs(0, content);
    const maxLen = value => !value.includes("@");
    const name = useInput("Mr, ", maxLen);
    return (
        <div className="App" style={{height : "1000vh"}}>

            <div >
                <div ref={element}>
                <img
                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVZetU.img?h=344&w=270&m=6&q=60&o=f&l=f&x=325&y=364"/>
                <button onClick={exitFull}>exit fullscreen</button>
                </div>
                <button onClick={triggerFull}>Make fullscreen</button>
            </div>

            <h1 style={{position : "fixed", left:"500px" , color : y > 100 ? "red" : "blue"}}>useScroll</h1>

            <h1>{onLine? "Online" : " Offline"}</h1>

            <h1 {...fadeInH1}>FadeIn</h1>
            <p {...fadeInP}>This is fadeInHook</p>

            <button onClick={confirmDelete}>Delete</button>

            <h1 ref={title}>Hi</h1>

            <div>
                <input ref={potato} placeholder="la"/>
            </div>
            <div>
                <input placeholder="Name" {...name}/>
            </div>
            <div>
                {
                    content.map((section, index) => (
                        <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
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
