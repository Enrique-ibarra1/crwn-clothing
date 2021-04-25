import React from 'react';
import './menu-item.styles.scss';


const MenuItem = ({title, imageSrc, size}) => {
    return (
        <div className={`${size} menu-item`} >
            <div className="background-image" style={{
                //how to add a background image to an element with inline jsx
            //url(imageurl) is the syntax, template literals needed with props
                backgroundImage: `url(${imageSrc})`}}>
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle" >SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;
