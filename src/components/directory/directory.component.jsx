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
    id:1,
    linkUrl: 'halls'
      },
      {
        title: 'RTA Agents',
        imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
        id:2,
        linkUrl: 'agents'
          },
          {
            title: 'Shops',
            imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
            size: 'large',
            id:3,
            linkUrl: 'shops'

              },
              {
                title: 'Appartments',
                imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
                size: 'large',
                id:4,
                linkUrl: 'Appartments'
                  },
                  {
                    title: 'Doctors',
                    imageUrl: 'https://i.ibb.co/mvYcmHJ/Card.png',
                    id:5,
                    linkUrl: 'Doctors'
                      }
            ]

    };
    
    }

    render() {
        return (
            <div className='directory-menu'>
            {this.state.sections.map(({id, ...otherSectionProps }) => (
                <MenuItem key={id}  {...otherSectionProps} />

            ))}
       
      
            </div>
        );

    


        }

}
export default Directory;