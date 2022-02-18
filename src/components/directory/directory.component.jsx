import React from 'react';
import MenuItem from '../../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {

    constructor(){
    super();

    this.state = {
     
    sections: [{
    title: 'Banquet Halls',
    imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
    id:1
      },
      {
        title: 'RTA Agents',
        imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
        id:2
          },
          {
            title: 'Shops',
            imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
            size: 'large',
            id:3
              },
              {
                title: 'Appartments',
                imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
                size: 'large',
                id:4
                  },
                  {
                    title: 'Doctors',
                    imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
                    id:5
                      }
            ]

    };
    
    }

    render() {
        return (
            <div className='directory-menu'>
            {this.state.sections.map(({title, imageUrl, id,size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />

            ))}
       
      
            </div>
        );

    


        }

}
export default Directory;