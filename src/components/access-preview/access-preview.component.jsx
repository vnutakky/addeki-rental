import React from 'react';
import Accessitem from '../access-item/access-item.component'
import './access-preview.styles.scss'

const AccessPreview = ({title, items}) => (

    <div className='access-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
    {
        items
        .filter((item, idx ) => idx < 4 )
        .map(({ id, ...otherItemProps}) => (

            <Accessitem key={id} {...otherItemProps}/>
        ))}
    </div>
    </div>

)
export default AccessPreview;