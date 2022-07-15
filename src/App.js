import React from 'react'


const Tokenlocker1 = () => {
  return (
    <div className="main_div">
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

      <div className="middle_div" >
        <div className="mainnets_dev">
          <option>
            <select></select>
          </option>
        </div>
        <div className="inner_div">

        </div>
      </div>
      <div className="bottom_div">
        <img className="spark_image" src="images/Vector.png" />
        <img className="spark_image_1" src="images/Vector1.png" />
        <div className="heading">
          <h1>SPARK</h1>
          <h4>LAUNCH</h4>
        </div>
        <div className='spark_image_2'>
          <img className="spark_image_2_1" src="images/Vector2.png" />
          <img className="spark_image_2_1" src="images/Vector3.png" />
          <img className="spark_image_2_1" src="images/Vector4.png" />
          <img className="spark_image_2_1" src="images/Vector5.png" />
        </div>

        <div className="info_div_1">
          <p>HOME</p>
          <p>POOLS</p>
          <p>ABOUT</p>
          <p>TOKEN LOCKER</p>

        </div>
        <div className='info_div_3'>
          <div style={{marginLeft:"30px"}}>
            <h5>@Copyright DEFI 2022</h5>
            <h5 style={{marginTop:"20px"}}>Information</h5>
          </div>
          <div style={{marginLeft:"130px"}}>
            <h5>Privacy policy</h5>
            <h5 style={{marginTop:"20px"}}>Terms of Use</h5>
          </div>
        </div>
        <div className="bottom_corner">
          <p id="bottom_para" style={{ marginBottom: "6px" }}>Subscribe to our NewsLetter</p>
          <input className="input"></input>
          <button id="button_4">Subscribe</button>
        </div>

      </div>
    </div>
  )
}

export default Tokenlocker1
