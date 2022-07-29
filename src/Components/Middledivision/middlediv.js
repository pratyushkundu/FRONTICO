import React from 'react'
import Kycboxes from './middlediv_kycboxes'
import Boxesdiv from './middlediv_boxesdiv'

const middlediv = () => {
    return (
        <>
            <div className="middle_div" >
                <img className="mid_image_1" src="images/Vector8.png" />
                <img className="mid_image_2" src="images/Vector7.png" />
                <img className="mid_image_3" src="images/Vector6.png" />
                <div className='heading_1'>
                    <h1>SPARK</h1>
                    <h4>LAUNCH</h4>
                </div>
                <div className='launch_div'>
                    <div id="button_5">LAUNCH YOUR PROJECT WITH US</div>
                </div>
                <div className='buy_div'>
                    <div id="button_6">BUY $IGHT</div>
                </div>
                <p className="featured">FEATURED PROJECTS</p>
                <div className='boxes_div'>
                   <Boxesdiv/>
                </div>
                <div className='duration_div_left'>
                    <button id="button_7">ALL POOLS</button>
                    <button id="button_8">UPCOMING</button>
                    <button id="button_9">ENDED</button>
                </div>
                <div className='duartion_div_right'>
                    <button id="button_10">Search</button>
                </div>
                <div className="kyc_div">
                   <Kycboxes/>
                </div>
            </div>
        </>
    )
}

export default middlediv