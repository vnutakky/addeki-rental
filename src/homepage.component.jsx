import React from 'react';
import './homepage.styles.scss';
const HomePage = () => (
<div className='homepage'>
    <div className='directory-menu'>
        
        <div className='menu-item'>
            <div className='content'>
                 <h1 className='title'>BanquetHalls</h1>
                <span ClassName='Subtitle'>ReserveNow</span>
            </div>
        </div>
                    <div className='menu-item'>
                        <div className='content'>
                        <h1 className='title'>RTA Agents</h1>
                            <span ClassName='Subtitle'>Talk</span>
                        </div>
                    </div>
                                <div className='menu-item'>
                                    <div className='content'>
                                    <h1 className='title'>Appartments</h1>
                                    <span ClassName='Subtitle'>Rent Now</span>
                                    </div>
                                </div>

                                            <div className='menu-item'>
                                                <div className='content'>
                                                <h1 className='title'>Shops</h1>
                                                <span ClassName='Subtitle'>Lease Now</span>
                                                </div>
                                            </div>

                                                    <div className='menu-item'>
                                                         <div className='content'>
                                                        <h1 className='title'>Doctors</h1>
                                                        <span ClassName='Subtitle'>Access Directory</span>
                                                        </div>
                                                     </div>
    </div>

</div>

);
export default HomePage;