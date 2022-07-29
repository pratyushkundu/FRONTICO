import React from 'react'

const topdiv = () => {
    return (
        <>
            <div className="top_div">
                <img className="spark_image" src="images/Vector.png" />
                <img className="spark_image_1" src="images/Vector1.png" />
                <div className="heading">
                    <h1>SPARK</h1>
                    <h4>LAUNCH</h4>
                </div>
                <div className="info_div">
                    <p>HOME</p>
                    <p>POOLS</p>
                    <p>ABOUT</p>
                    <p>TOKEN LOCKER</p>
                </div>
                <div className="top_button_div">
                    <button id="button_1">IGNITE DEFI</button>
                    <button id="button_2">PYRE GAMES</button>
                </div>
                <div className="connect_wallet_div">
                    <button id="button_3">CONNECT WALLET</button>
                </div>
            </div>
        </>
    )
}

export default topdiv