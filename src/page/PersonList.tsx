import React, {useContext} from "react";
import './personList.css';
import ListProvider, {ElementContext} from "../hooks/PersonListProvider";
import {Link} from "react-router-dom";


const PersonList = () => {

    const elements = useContext(ElementContext);
    console.log(elements)

    if (!elements) {
        console.log("CZEKAM")
        return (<div>CZEKAM</div>)
    }

    return (

        <div className="card_container">

            {elements.map((el, index) => (
                <div className="bicycle_card" key={index}>
                    <Link to={`/items/${el.id}`} key={el.id}>

                        <div>
                            {el.name}
                            {el.id}
                        </div>

                    </Link>
                </div>

            ))}
        </div>
    )
};

const elements = () => {
    return <ListProvider><PersonList/></ListProvider>
}

export default elements