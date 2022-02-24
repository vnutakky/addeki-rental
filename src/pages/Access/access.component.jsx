import React from 'react';
import ACCESS_DATA from './access-data';
import AccessPreview from '../../components/access-preview/access-preview.component'

class AccessPage extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            collections: ACCESS_DATA
        }
    }
    render() {
        const {collections} = this.state;


        return (<div className='access-page'>
        {
            collections.map(({ id, ...otherCollectionProps}) => (
                <AccessPreview key= {id} {...otherCollectionProps}/>
            ))
        }
        
        </div>
        );

                                        }
}
export default AccessPage;

    


