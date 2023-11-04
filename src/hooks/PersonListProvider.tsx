import React, {createContext, useEffect, useState} from "react";
import BackendServer from "../mock/BackendServer";
import {MyNode} from "../types/MyNode";
import {Person} from "../types/Person";
export const ElementContext = createContext([{id: 0, name: 'undef'}])

const ElementsProvider : React.FC<MyNode> = ({children}) => {

    const [elements, setElements] = useState<Person[]>([new Person()]);

    const getAllElements = () => {
        BackendServer.get('/users')
            .then((response) => {
                console.log("Fetching elements")
                setElements(response.data);
            })
    }

    useEffect(getAllElements, []);

    return (
        <ElementContext.Provider value={elements}>
            {children}
        </ElementContext.Provider>
    );

};

export default ElementsProvider;