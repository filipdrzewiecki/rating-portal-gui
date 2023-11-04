import './itemDetails.css';
import React, {Fragment, useEffect, useState} from 'react';
import BackendServer from "../mock/BackendServer";
import {useParams} from 'react-router-dom';
// @ts-ignore
import PLACEHOLDER_ICON from '../resources/icon/page/placeholder.png';
import {Person} from "../types/Person";

const ItemDetails = () => {

    const [element, setElement] = useState<Person>(new Person());

    const id = useParams().id;


    const getAllElements = () => {
        BackendServer.get(`/users/${id}`)
            .then((response) => {
                console.log("Fetching elements")
                setElement(response.data);
            })
    }

    useEffect(getAllElements, []);


    return (
        <Fragment>
            <div className="bicycle_profile_left">
                <div className="picture">
                    <img src={PLACEHOLDER_ICON} alt="placeholder_icon" />
                </div>
            </div>
            <div className="bicycle_profile_right">
                <div className="bicycle-page-top">
                    <div className="bicycle-page-title">
                        <div className="primary">PRIMARY TITLE</div>
                        <div className="secondary">SECONDAY TITLE</div>
                    </div>
                </div>

                <div className="bicycle-page-bottom">
                    <div className="contentField">
                        <div className="fieldName">NAME:</div>
                        <div className="fieldValue">{element.name}</div>
                        <div className="fieldName">SURNAME:</div>
                        <div className="fieldValue">{element.surname}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default ItemDetails;