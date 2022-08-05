import React from 'react'
import { NavLink } from 'react-router-dom'

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
                    <NavLink to="/pools" exact><p>POOLS</p> </NavLink>
                    <p>ABOUT</p>
                    <NavLink to="/" exact><p>TOKEN LOCKER</p></NavLink>
                </div>
                <div className="top_button_div">
                    <button id="button_1">IGNITE DEFI</button>
                    <button id="button_2">PYRE GAMES</button>
                </div>
                <div className="connect_wallet_div">
                    <div id="button_3">CONNECT WALLET</div>
                </div>
            </div>
        </>
    )
}

export default topdiv