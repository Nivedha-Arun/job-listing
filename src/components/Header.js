import React from 'react';
import close from "./images/icon-remove.svg"

const Header = ({keywords, removeKeywords, clearAll}) => {
    return (
    <div className="header-container">
    <ul>
        {keywords.map((key, id) => {
            return (<li id={id}>{key}
            <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="close"></img>
            </button>
            </li>
        );
        })}
        <a href="#" onClick={() => clearAll()}>Clear</a>     
    </ul>
    </div>
    );
};

export default Header;