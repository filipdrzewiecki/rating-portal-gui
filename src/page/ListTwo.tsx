import React, {useContext} from "react";
import './listTwo.css';
import ListProvider, {ElementContext} from "../hooks/PersonListProvider";

const List = () => {

    const elements = useContext(ElementContext);
    console.log(elements)

    if (!elements) {
        console.log("CZEKAM")
        return (<div>CZEKAM</div>)
    }

    return (
        <div className="card_container">
            {elements.map((el, index) => (
                <div className="row" key={index}>{el.name}</div>
            ))}
        </div>
    )
};

const elements = () => {
    return <ListProvider><List/></ListProvider>
}

export default elements