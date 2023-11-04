import React from 'react';
import {Route, Routes} from "react-router-dom";
import Bla from "../page/ListTwo";
import List from "../page/PersonList";
import './pageBody.css';
import ItemDetails from "../page/ItemDetails";


const Body = () => {
    return (
        <div className="body">
            <div className="body_content">
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path="/items" element={<List/>}/>
                    <Route path="/items/:id" element={<ItemDetails/>}/>
                    <Route path="/v2/items" element={<Bla/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Body;