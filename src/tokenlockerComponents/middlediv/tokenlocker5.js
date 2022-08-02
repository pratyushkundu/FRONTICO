import React from 'react'

const Tokenlocker5 = ({ setopenModal5 }) => {
    return (
        <>
            <div className='inner_div_left'>
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
                        <div id="button_26">Charge fee separately</div>
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
                    <div className='last_div_right' onClick={() => setopenModal5(true)}>
                        <div className='last_div_left_lock' >Lock</div>
                    </div>
                </div>
            </div>
        </>)
}


export default Tokenlocker5;