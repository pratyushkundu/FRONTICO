import React from 'react'
import '../index5.css';


// const Tokenlocker1 = () => {
//     return (
//         <div className="main_div">
//             <div className="top_div">
//                 <img className="spark_image" src="images/Vector.png" />
//                 <img className="spark_image_1" src="images/Vector1.png" />
//                 <div className="heading">
//                     <h1>SPARK</h1>
//                     <h4>LAUNCH</h4>
//                 </div>
//                 <div className="info_div">
//                     <p>HOME</p>
//                     <p>POOLS</p>
//                     <p>ABOUT</p>
//                     <p>TOKEN LOCKER</p>
//                 </div>
//                 <div className="top_button_div">
//                     <button id="button_1">IGNITE DEFI</button>
//                     <button id="button_2">PYRE GAMES</button>
//                 </div>
//                 <div className="connect_wallet_div">
//                     <button id="button_3">CONNECT WALLET</button>
//                 </div>
//             </div>
//             <div className="middle_div" >
//                 <div className="inner_div">
//                     <div className='inner_div_left'>
//                         <div className='inner_div_heading'>Token Locker</div>
//                         <div className='inner_div_tops'>Introducing Token Vesting Locking Pools. Tocken locks are resresented as
//                             shares of a pool, in a similar way yo a uniswap pool, allowing all ERC20
//                             tokens including Rebasing and Deflationary mechanisms to be supported.</div>
//                         <div className='inner_div_middle'>This means lock amounts may change due ti decimal rounding, but you will always retain your share of the pool.</div>
//                         <div className='inner_div_bottom'>Do not lock Liquidity tokens here, they will not be shown in the Spark launch, and will not be migrateble.</div>
//                         <div className='inner_div_bottom1'></div>
//                         <div className='inner_div_bottom2'></div>
//                     </div>
//                     <div className='inner_div_rightz'>
//                         <div className='inner_div_right_topz'>
//                             <div className='inner_div_right_top_leftz'>
//                                 <img src="images/padlock1.png" className='padlock1_img' />
//                                 <div className='inner_div_right_top_leftz1'>New Lock</div>
//                             </div>
//                             <div className='inner_div_right_top_rightz'>
//                                 <img src="images/padlock2.png" className='padlock2_img' />
//                                 <div className='inner_div_right_top_rightz1'>View Lock</div>
//                             </div>
//                         </div>

//                         <div className='inner_div_right_top_below'>
//                             <div className='inner_div_right_top_below_left'>Locks(1)</div>
//                             <div className='inner_div_right_top_below_right'>
//                                 <div id="button_21">TableView</div>
//                                 <div className='table_view'>
//                                     <img clasName="eye" src="images/Ellipse8.png" />
//                                     <img className="eye_ball" src="images/Ellipse9.png" />
//                                 </div>
//                             </div>
//                             <div className='inner_div_stroke1'></div>
//                             <div className='inner_div_right_top_below_left1'>
//                                 <div className='inner_button_addlock'>
//                                     <div id='button_222'>Add A Lock</div>
//                                 </div>
//                                 <div className='inner_heading1'>
//                                     <div className='innerheading_top'>your balance</div>
//                                     <div className='innerheading_bottom'>0 Unknown</div>
//                                 </div>
//                             </div>
//                             <div className='inner_div_stroke2'></div>
//                             <div className='inner_div_right_top_below_right1'>
//                                 <div className='inner_button_download'>
//                                     <div id='button_23'>Download CSV</div>
//                                 </div>
//                                 <div className='inner_button_import'>
//                                     <div id='button_24'>Import CSV</div>
//                                 </div>
//                             </div>
//                             <div className='inner_div_right_top_below_right2'>
//                                 <div className='inner_div_heading_img'>
//                                     <div className='unknown_heading'>0 Unknown</div>
//                                     <img className='unknown_img'  src="images/polygon3.png"/>
//                                     {/* <img className='unknown_img1'  src="images/Vector38.png"/>
//                                     <img className='unknown_img2'  src="images/Vector41.png"/> */}
//                                 </div>
//                                 <div className='icons_heading'>
//                                     <div className='icon_head'>edit</div>
//                                     <img className='icon1'  src="images/Vector39.png"/>
//                                     <img className='icon2' src="images/Rectangle93.png"/>
//                                     <img className='icon4' src="images/Rectangle93.png"/>
//                                     <img className='icon3' src="images/Vector40.png"/>
//                                 </div>
//                             </div>
//                             <div className='inner_div_right_top_headingtop'>Unlocks a few seconds ago | 21 Feb 2022 15:49</div>
//                             <div className='inner_div_right_top_headingbottom'>Unlocker: Me</div>
//                         </div>

//                         <div className='inner_div_right_mid'>
//                             <div className='inner_div_right_mid_heading'>0/0 Unknown total locked</div>
//                         </div>
//                         <div className='inner_div_right_mid_below'>
//                             <div className='inner_div_right_mid_belowheading1'>OPTIONAL : Enable free locking for Unknown!!</div>
//                             <div className='inner_div_right_mid_belowheading2'>Pay a once off fee so that Unknown is whitelisted. From then onwards vou oe anymore from vour community can use the Vesting platform to lock unknown with no fees.</div>
//                             <div className='inner_div_right_mid_below_mid'>
//                                 <div className='inner_div_right_mid_below_midheading1'>
//                                     <div className='inner_div_right_mid_below_midheading11'>Your Balance :</div>
//                                     <div className='inner_div_right_mid_below_midimg1'>
//                                         <div className='inner_div_right_mid_below_midheading12'>0 BNB</div>
//                                         <img className='inner_div_right_mid_below_midimage1' src="images/bsc1.png"></img>
//                                     </div>
//                                 </div>
//                                 <div className='inner_div_right_mid_below_midheading2'>
//                                     <div className='inner_div_right_mid_below_midheading21'>Fees :</div>
//                                     <div className='inner_div_right_mid_below_midimg2'>
//                                         <div className='inner_div_right_mid_below_midheading22'>15,000 BNB</div>
//                                         <img className='inner_div_right_mid_below_midimage1' src="images/bsc1.png"></img>
//                                     </div>
//                                 </div>
//                                 <div className='inner_div_right_mid_below_midheading_below'>
//                                     <div className='inner_div_right_mid_below_midheading_button'>
//                                         <img id="crossimg" src="images/Vector10.png"></img>
//                                     </div>
//                                     <div className='inner_div_right_mid_below_midheading_belowheading'>You do not have enough BNB in your wallet to perform this transaction. 15,000 BNB required.</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='inner_div_right_bottom'>
//                             <div className='inner_div_right_bottominner1'>
//                                 <div className='inner_div_right_bottominner_heading11'>Fee :</div>
//                                 <div className='inner_div_right_bottominner_heading12'>0.35 %</div>
//                             </div>
//                             <div className='inner_div_right_bottominner2'>
//                                 <div className='inner_div_right_bottominner_heading21'>Total Debt :</div>
//                                 <div className='inner_div_right_bottominner_heading22'>0 Unknown</div>
//                             </div>
//                             <div className='charge_separately'>
//                                 <div id="button_26">Charge fee separately</div>
//                                 <div className='charge_img'>
//                                     <img className="circle_img" src="images/Ellipse10.png" />
//                                     <img className='tick_img' src='images/Vector27.png' />
//                                 </div>

//                             </div>
//                             <div className='charge_separately_heading'>
//                                 Apply a fee to each lock, or pay it once seperately, paying the fee seperately helps ensure the amount of the lock matches the amount you entered.
//                             </div>
//                         </div>
//                         <div className='bottom_heading'>Once tokens are locked they cannot be withdrawn under any circumctances until the timer has expired. Please ensure the parameters are correct, as they are final.</div>
//                         <div className='bottom_heading1'>Error : Total Lock amount is Zero</div>
//                         <div className='last_div'>
//                             <div className='last_div_left'>
//                                 <div className='last_div_left_approve'>Approve</div>
//                             </div>
//                             <div className='last_div_right'>
//                                 <div className='last_div_left_lock'>Lock</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bottom_div">
//                 <img className="spark_image" src="images/Vector.png" />
//                 <img className="spark_image_1" src="images/Vector1.png" />
//                 <div className="heading">
//                     <h1>SPARK</h1>
//                     <h4>LAUNCH</h4>
//                 </div>
//                 <div className='spark_image_2'>
//                     <img className="spark_image_2_1" src="images/Vector2.png" />
//                     <img className="spark_image_2_1" src="images/Vector3.png" />
//                     <img className="spark_image_2_1" src="images/Vector4.png" />
//                     <img className="spark_image_2_1" src="images/Vector5.png" />
//                 </div>

//                 <div className="info_div_1">
//                     <p>HOME</p>
//                     <p>POOLS</p>
//                     <p>ABOUT</p>
//                     <p>TOKEN LOCKER</p>

//                 </div>
//                 <div className='info_div_3'>
//                     <div style={{ marginLeft: "3rem" }}>
//                         <h5>@Copyright DEFI 2022</h5>
//                         <h5 style={{ marginTop: "2rem" }}>Information</h5>
//                     </div>
//                     <div style={{ marginLeft: "13rem" }}>
//                         <h5>Privacy policy</h5>
//                         <h5 style={{ marginTop: "2rem" }}>Terms of Use</h5>
//                     </div>
//                 </div>
//                 <div className="bottom_corner">
//                     <p id="bottom_para" style={{ marginBottom: "0.6rem" }}>Subscribe to our NewsLetter</p>
//                     <input className="input"></input>
//                     <button id="button_4">Subscribe</button>
//                 </div>

//             </div>
//         </div>
//     )
// }


// export default Tokenlocker1


const Tokenlocker1 = () => {
    return (
        <>
            <div className='inner_div_leftz'>
                <div className='inner_div_heading'>Token Locker</div>
                <div className='inner_div_tops'>Introducing Token Vesting Locking Pools. Tocken locks are resresented as
                    shares of a pool, in a similar way yo a uniswap pool, allowing all ERC20
                    tokens including Rebasing and Deflationary mechanisms to be supported.</div>
                <div className='inner_div_middle'>This means lock amounts may change due ti decimal rounding, but you will always retain your share of the pool.</div>
                <div className='inner_div_bottom'>Do not lock Liquidity tokens here, they will not be shown in the Spark launch, and will not be migrateble.</div>
                <div className='inner_div_bottom1'></div>
                <div className='inner_div_bottom2'></div>
            </div>
            <div className='inner_div_rightz'>
                <div className='inner_div_right_topz'>
                    <div className='inner_div_right_top_leftz'>
                        <div className='inner_div_right_top_leftz1'>New Lock</div>
                    </div>
                    <div className='inner_div_right_top_rightz'>
                        <div className='inner_div_right_top_rightz1'>View Lock</div>
                    </div>
                </div>

                <div className='inner_div_right_top_below'>
                    <div className='inner_div_right_top_below_left'>Locks(1)</div>
                    <div className='inner_div_right_top_below_right'>
                        <div id="button_21">TableView</div>
                        <div className='table_view'>
                            <img clasName="eye" src="images/Ellipse8.png" />
                            <img className="eye_ball" src="images/Ellipse9.png" />
                        </div>
                    </div>
                    <div className='inner_div_stroke1'></div>
                    <div className='inner_div_right_top_below_left1'>
                        <div className='inner_button_addlock'>
                            <div id='button_222'>Add A Lock</div>
                        </div>
                        <div className='inner_heading1'>
                            <div className='innerheading_top'>your balance</div>
                            <div className='innerheading_bottom'>0 Unknown</div>
                        </div>
                    </div>
                    <div className='inner_div_stroke2'></div>
                    <div className='inner_div_right_top_below_right1'>
                        <div className='inner_button_download'>
                            <div id='button_23'>Download CSV</div>
                        </div>
                        <div className='inner_button_import'>
                            <div id='button_24'>Import CSV</div>
                        </div>
                    </div>
                    <div className='inner_div_right_top_below_right2'>
                        <div className='inner_div_heading_img'>
                            <div className='unknown_heading'>0 Unknown</div>
                            <img className='unknown_img' src="images/polygon3.png" />

                        </div>
                        <div className='icons_heading'>
                            <div className='icon_head'>edit</div>
                            <img className='icon1' src="images/Vector39.png" />
                            <img className='icon2' src="images/Rectangle93.png" />
                            <img className='icon4' src="images/Rectangle93.png" />
                            <img className='icon3' src="images/Vector40.png" />
                        </div>
                    </div>
                    <div className='inner_div_right_top_headingtop'>Unlocks a few seconds ago | 21 Feb 2022 15:49</div>
                    <div className='inner_div_right_top_headingbottom'>Unlocker: Me</div>
                </div>

                <div className='inner_div_right_mid'>
                    <div className='inner_div_right_mid_heading'>0/0 Unknown total locked</div>
                </div>
                <div className='inner_div_right_mid_below'>
                    <div className='inner_div_right_mid_belowheading1'>OPTIONAL : Enable free locking for Unknown!!</div>
                    <div className='inner_div_right_mid_belowheading2'>Pay a once off fee so that Unknown is whitelisted. From then onwards vou oe anymore from vour community can use the Vesting platform to lock unknown with no fees.</div>
                    <div className='inner_div_right_mid_below_mid'>
                        <div className='inner_div_right_mid_below_midheading1'>
                            <div className='inner_div_right_mid_below_midheading11'>Your Balance :</div>
                            <div className='inner_div_right_mid_below_midimg1'>
                                <div className='inner_div_right_mid_below_midheading12'>0 BNB</div>
                                <img className='inner_div_right_mid_below_midimage1' src="images/bsc1.png"></img>
                            </div>
                        </div>
                        <div className='inner_div_right_mid_below_midheading2'>
                            <div className='inner_div_right_mid_below_midheading21'>Fees :</div>
                            <div className='inner_div_right_mid_below_midimg2'>
                                <div className='inner_div_right_mid_below_midheading22'>15,000 BNB</div>
                                <img className='inner_div_right_mid_below_midimage1' src="images/bsc1.png"></img>
                            </div>
                        </div>
                        <div className='inner_div_right_mid_below_midheading_below'>
                            <div className='inner_div_right_mid_below_midheading_button'>
                                <img id="crossimg" src="images/Vector10.png"></img>
                            </div>
                            <div className='inner_div_right_mid_below_midheading_belowheading'>You do not have enough BNB in your wallet to perform this transaction. 15,000 BNB required.</div>
                        </div>
                    </div>
                </div>
                <div className='inner_div_right_bottom'>
                    <div className='inner_div_right_bottominner1'>
                        <div className='inner_div_right_bottominner_heading11'>Fee :</div>
                        <div className='inner_div_right_bottominner_heading12'>0.35 %</div>
                    </div>
                    <div className='inner_div_right_bottominner2'>
                        <div className='inner_div_right_bottominner_heading21'>Total Debt :</div>
                        <div className='inner_div_right_bottominner_heading22'>0 Unknown</div>
                    </div>
                    <div className='charge_separately'>
                        <div id="button26">Charge fee separately</div>
                        <div className='charge_img'>
                            <img className="circle_img" src="images/Ellipse10.png" />
                            <img className='tick_img' src='images/Vector27.png' />
                        </div>

                    </div>
                    <div className='charge_separately_heading'>
                        Apply a fee to each lock, or pay it once seperately, paying the fee seperately helps ensure the amount of the lock matches the amount you entered.
                    </div>
                </div>
                <div className='bottom_heading'>Once tokens are locked they cannot be withdrawn under any circumctances until the timer has expired. Please ensure the parameters are correct, as they are final.</div>
                <div className='bottom_heading1'>Error : Total Lock amount is Zero</div>
                <div className='last_div'>
                    <div className='last_div_left'>
                        <div className='last_div_left_approve'>Approve</div>
                    </div>
                    <div className='last_div_right' >
                        <div className='last_div_left_lock' >Lock</div>
                    </div>
                </div>
            </div>
        </>)
}

export default Tokenlocker1