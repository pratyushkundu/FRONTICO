import React from 'react'

const Tokenlocker6 = () => {
    return (
        <>
            <div className='inner_div_leftbottomz'>
                <div className='inner_div_leftbottom_top'>Create your lock</div>
                <div className='inner_div_leftbottom_top1'>Token or LP Token Adress</div>
                <input className='inner_div_leftbottom_input1'></input>
                <div className='radio_swipe'>
                    <div className='radio_swipe_img'></div>
                    <div className='radio_swipe_heading'>Use another owner </div>
                </div>
                <div className='inner_div_leftbottom_topowner'>Owner</div>
                <input className='inner_div_leftbottom_input2'></input>
                <div className='inner_div_leftbottom_middle1'>The adress you input here will be reciebe the tokens once they are unlocked</div>
                <div className='inner_div_leftbottom_middle2'>Title</div>
                <input className='inner_div_leftbottom_input3'></input>
                <div className='inner_div_leftbottom_middle3'>Amount</div>
                <input className='inner_div_leftbottom_input4'></input>
                <div className='radio_swipe1'>
                    <div className='radio_swipe_img1'></div>
                    <div className='radio_swipe_heading1'>Use Vesting</div>
                </div>
                <div className='inner_div_leftbottom_bottom'>Lock Untill (UTC time)</div>
                <input className='inner_div_leftbottom_input5'></input>

            </div>
        </>
    )
}

export default Tokenlocker6