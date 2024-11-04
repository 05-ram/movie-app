import React from 'react';
import errImg from "../../images/pnf.jpg";
import "../../components/pageNotFound/pageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className='err-page'>
            <img src={errImg} alt="err-image" />
        </div>
    )
}

export default PageNotFound;