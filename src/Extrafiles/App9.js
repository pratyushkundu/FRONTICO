import React from 'react'
import '../index8.css'

const Tokenlocker1 = ({setopenModal1,setopenModal2,setopenModal3}) => {
    // return (
    //     <div className="main_div">
    //         <div className="top_div">
    //             <img className="spark_image" src="images/Vector.png" />
    //             <img className="spark_image_1" src="images/Vector1.png" />
    //             <div className="heading">
    //                 <h1>SPARK</h1>
    //                 <h4>LAUNCH</h4>
    //             </div>
    //             <div className="info_div">
    //                 <p>HOME</p>
    //                 <p>POOLS</p>
    //                 <p>ABOUT</p>
    //                 <p>TOKEN LOCKER</p>
    //             </div>
    //             <div className="top_button_div">
    //                 <button id="button_1">IGNITE DEFI</button>
    //                 <button id="button_2">PYRE GAMES</button>
    //             </div>
    //             <div className="connect_wallet_div">
    //                 <button id="button_3">CONNECT WALLET</button>
    //             </div>
    //         </div>
    //         <div className="middle_div" >
    //             <div className="mainnets_dev">
    //                 <option className='option'>
    //                     <select></select>
    //                 </option>
    //             </div>
    //             <div className="inner_div">
    //                 <div className='inner_div_top'>
    //                     <div className='inner_top'>Token Locker</div>
    //                     <div className='inner_top_1'>Introducing Token Vesting Locking Pools. Tocken locks are resresented as
    //                         shares of a pool, in a similar way yo a uniswap pool, allowing all ERC20
    //                         tokens including Rebasing and Deflationary mechanisms to be supported.</div>
    //                     <div className='inner_mid'>This means lock amounts may change due ti decimal rounding, but you will always retain your share of the pool.</div>
    //                     <div className='inner_bottom'>Do not lock Liquidity tokens here, they will not be shown in the Spark launch, and will not be migrateble.</div>
    //                     <div className='inner_bottom_button'>
    //                         <div className='ether_img'>
    //                             <div className='ether_img_top'>
    //                                 <img src="images/Vector25.png" className='ether_img_top_left'></img>
    //                                 <img src="images/Vector26.png" className='ether_img_top_right'></img>
    //                             </div>
    //                             <div className='ether_img_bottom'>
    //                                 <img src="images/Vector27.png" className='ether_img_bottom_left'></img>
    //                                 <img src="images/Vector28.png" className='ether_img_bottom_right'></img>
    //                             </div>
    //                         </div>
    //                         <div id="button_26">Connect your wallet</div>
    //                     </div>
    //                 </div>
    //                 <div className='inner_div_top_1'>
    //                     <div className='inner_div_1_mainnet'>
    //                         <div className='SwitchNetwork'>Switch Network</div>
    //                         <img className='cross_img' src="images/Vector30.png"></img>
    //                     </div>
    //                     <div className=' innerdiv_mainnets_div'>
    //                         <div className='inner_div_1_mainnets'>
    //                             <img id="mainnets_img" src="images/Vector24.png" />
    //                             <div className='inner_div_1_mainnetsdescription'>Etherium mainet</div>
    //                         </div>
    //                         <div className='stroke_div'></div>
    //                         <div className='inner_div_1_mainnets'>
    //                             <img id="mainnets_img" src="images/bsc.png" />
    //                             <div className='inner_div_1_mainnetsdescription'>Binance mainet</div>
    //                         </div>
    //                         <div className='stroke_div'></div>
    //                         <div className='inner_div_1_mainnets'>
    //                             <img id="mainnets_img" src="images/Vector23.png" ></img>
    //                                 <img src="images/Vector29.png" style={{marginLeft:"-6rem",width:"2.1rem",height:"2.1rem",marginTop:"0.6rem"}}></img>
    //                             <div className='inner_div_1_mainnetsdescription'>Polygon</div>
    //                         </div>
    //                         <div className='stroke_div'></div>
    //                         <div className='inner_div_1_mainnets'>
    //                             <img id="mainnets_img" src="images/pobrane.png" />
    //                             <div className='inner_div_1_mainnetsdescription'>xDai</div>
    //                         </div>
    //                     </div>
    //                     <div className='inner_div_1_testnet'>
    //                         <div className='TestNetwork'>Testnet</div>
    //                     </div>
    //                     <div className='innerdiv_testnets_div'>
    //                         <div className='inner_div_1_testnets'>
    //                             <img id="testnets_img" src="images/Vector22.png" />
    //                             <div className='inner_div_1_testnetsdescription'>Avalanche</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //         <div className="bottom_div">
    //             <img className="spark_image" src="images/Vector.png" />
    //             <img className="spark_image_1" src="images/Vector1.png" />
    //             <div className="heading">
    //                 <h1>SPARK</h1>
    //                 <h4>LAUNCH</h4>
    //             </div>
    //             <div className='spark_image_2'>
    //                 <img className="spark_image_2_1" src="images/Vector2.png" />
    //                 <img className="spark_image_2_1" src="images/Vector3.png" />
    //                 <img className="spark_image_2_1" src="images/Vector4.png" />
    //                 <img className="spark_image_2_1" src="images/Vector5.png" />
    //             </div>

    //             <div className="info_div_1">
    //                 <p>HOME</p>
    //                 <p>POOLS</p>
    //                 <p>ABOUT</p>
    //                 <p>TOKEN LOCKER</p>

    //             </div>
    //             <div className='info_div_3'>
    //                 <div style={{ marginLeft: "3rem" }}>
    //                     <h5>@Copyright DEFI 2022</h5>
    //                     <h5 style={{ marginTop: "2rem" }}>Information</h5>
    //                 </div>
    //                 <div style={{ marginLeft: "13rem" }}>
    //                     <h5>Privacy policy</h5>
    //                     <h5 style={{ marginTop: "2rem" }}>Terms of Use</h5>
    //                 </div>
    //             </div>
    //             <div className="bottom_corner">
    //                 <p id="bottom_para" style={{ marginBottom: "0.6rem" }}>Subscribe to our NewsLetter</p>
    //                 <input className="input"></input>
    //                 <button id="button_4">Subscribe</button>
    //             </div>

    //         </div>
    //     </div>
    // )
    return (<>
        <div className='inner_div_top_1' >
            <div className='inner_div_1_mainnet'>
                <div className='SwitchNetwork'>Switch Network</div>
                <img className='cross_img' src="images/Vector30.png" onClick={() => setopenModal1(false)}></img>
            </div>
            <div className=' innerdiv_mainnets_div'>
                <div className='inner_div_1_mainnets' onClick={() => { setopenModal2(true); setopenModal1(false); setopenModal3(true) }}>
                    <img id="mainnets_img" src="images/Vector24.png" />
                    <div className='inner_div_1_mainnetsdescription'>Etherium mainet</div>
                </div>
                <div className='stroke_div'></div>
                <div className='inner_div_1_mainnets'>
                    <img id="mainnets_img" src="images/bsc.png" />
                    <div className='inner_div_1_mainnetsdescription'>Binance mainet</div>
                </div>
                <div className='stroke_div'></div>
                <div className='inner_div_1_mainnets'>
                    <img id="mainnets_img" src="images/Vector23.png" ></img>
                    <img src="images/Vector29.png" style={{ marginLeft: "-6rem", width: "2.1rem", height: "2.1rem", marginTop: "0.6rem"}}></img>
                    <div className='inner_div_1_mainnetsdescription'>Polygon</div>
                </div>
                <div className='stroke_div'></div>
                <div className='inner_div_1_mainnets'>
                    <img id="mainnets_img" src="images/pobrane.png" />
                    <div className='inner_div_1_mainnetsdescription'>xDai</div>
                </div>
            </div>
            <div className='inner_div_1_testnet'>
                <div className='TestNetwork'>Testnet</div>
            </div>
            <div className='innerdiv_testnets_div'>
                <div className='inner_div_1_testnets'>
                    <img id="testnets_img" src="images/Vector22.png" />
                    <div className='inner_div_1_testnetsdescription'>Avalanche</div>
                </div>
            </div>
        </div>
    </>)
}

export default Tokenlocker1