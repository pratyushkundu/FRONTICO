import React from 'react'
import Kycdiv from './middlediv_kycdiv'

const Middlediv_kycboxes = ({setopenModal9,setopenModal5}) => {
   

    return (
        <>
            <div className="kyc_boxes" onClick={()=>{setopenModal9(true);setopenModal5(true);}}>
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
            <div className="kyc_boxes">
                <Kycdiv />
            </div>
        </>
    )
}

export default Middlediv_kycboxes