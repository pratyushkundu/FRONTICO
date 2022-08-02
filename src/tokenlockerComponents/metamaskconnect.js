import React from 'react'

const Metamaskconnect = ({setopenModal1,setopenModal,toggle1}) => {
    return (<>
        <div className='metamask_div'>
            <dic className="metamask_heading" onClick={() => { setopenModal1(true); setopenModal(false);toggle1(); }}>Connect Wallet</dic>
            <div className='metamask_heading_below' >
                <div className='metamask_img'>

                </div>
                <div className='metamask_connect' >Metamask</div>
            </div>
            <div className='metamask_crypto'>Haven't got a crypto wallet yet</div>
            <div className='metamask_learn_connect'>
                <div id="button_27">Learn how to connect</div>
            </div>
        </div>
    </>)
}

export default Metamaskconnect;