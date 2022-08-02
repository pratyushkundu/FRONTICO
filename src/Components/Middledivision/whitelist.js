import React from 'react'

const Whitelist = ({setopenModal7}) => {
    return (
        <>
            <div className='inner_div_left_bottom'>
                <div className='inner_div_left_bottom_top' onClick={() => setopenModal7(true)}>Whitelist</div>
                <div className='inner_div_left_bottom_top1'>Abble </div>
                <div className='inner_div_left_bottom_top2'>You  can enable/disable whitelist anytime </div>
                <div className="inner_div_left_bottom_mid">
                    <div className='inner_div_left_bottom_mid_left'>
                        <div className="inner_div_left_bottom_mid_left_heading1">Softcap (AVAX) *</div>
                        <input className='inner_div_left_botton_mid_left_input1'></input>
                        <div className="inner_div_left_bottom_mid_left_heading2">Minimum buy (AVAX) *</div>
                        <input className='inner_div_left_botton_mid_left_input2'></input>
                        <div id="inner_div_left_bottom_mid_left_heading1">Select time & end time (UTC)*</div>
                        <div className="inner_div_left_bottom_mid_left_heading4">Start time (UTC) *</div>
                        <input className='inner_div_left_botton_mid_left_input3'></input>
                        <div className="inner_div_left_bottom_mid_left_heading5">First Fund Release for Projects (%) *</div>
                        <input className='inner_div_left_botton_mid_left_input4'></input>
                    </div>
                    <div className='inner_div_left_bottom_mid_right'>
                        <div className="inner_div_left_bottom_mid_right_heading1">HardCap (AVAX) *</div>
                        <input className='inner_div_left_botton_mid_right_input1'></input>
                        <div className="inner_div_left_bottom_mid_right_heading2">Maxumim buy (AVAX) *</div>
                        <input className='inner_div_left_botton_mid_right_input2'></input>
                        <div id="inner_div_left_bottom_mid_right_heading1"></div>
                        <div className="inner_div_left_bottom_mid_right_heading3">End time (UTC) *</div>
                        <input className='inner_div_left_botton_mid_right_input3'></input>
                        <div className="inner_div_left_bottom_mid_right_heading4">Fund Vesting Period Each Cycle (days) *</div>
                        <input className='inner_div_left_botton_mid_right_input4'></input>
                    </div>
                </div>
                <div className='inner_div_left_bottom_lastheading'>Fund Release Each Cycle (percent) *</div>
            </div>
        </>)
}

export default Whitelist