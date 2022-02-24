import React from 'react';

import './access-item.styles.scss';

const Accessitem = ({ id, name, price, imageUrl}) => (

    <div className='access-item'>
    <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    />
    <div className='access-footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    </div>
    </div>
    );
    export default Accessitem;