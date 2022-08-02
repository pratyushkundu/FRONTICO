import React from 'react'

const Urldiv = ({setopenModal8}) => {
    return (
        <>
            <div className='inner_div_right_top'>
                <div className="inner_div_right_top_top">
                    <div className='inner_div_right_top_top_left'>
                        <div className="inner_div_right_top_top_left_heading1" onClick={() => setopenModal8(true)}>Logo Url *</div>
                        <input className='inner_div_right_top_top_left_input1'></input>
                        <div className="inner_div_right_top_top_left_heading2">Facebook</div>
                        <input className='inner_div_right_top_top_left_input2'></input>
                        <div className="inner_div_right_top_top_left_heading3">GitHub</div>
                        <input className='inner_div_right_top_top_left_input3'></input>
                        <div className="inner_div_right_top_top_left_heading4">Instagram</div>
                        <input className='inner_div_right_top_top_left_input4'></input>
                        <div className="inner_div_right_top_top_left_heading5">Reddit</div>
                        <input className='inner_div_right_top_top_left_input5'></input>
                    </div>
                    <div className='inner_div_right_top_top_right'>
                        <div className="inner_div_right_top_top_right_heading1">Website *</div>
                        <input className='inner_div_right_top_top_right_input1'></input>
                        <div className="inner_div_right_top_top_right_heading2">Twitter</div>
                        <input className='inner_div_right_top_top_right_input2'></input>
                        <div className="inner_div_right_top_top_right_heading3">Telegram</div>
                        <input className='inner_div_right_top_top_right_input3'></input>
                        <div className="inner_div_right_top_top_right_heading4">Discord</div>
                        <input className='inner_div_right_top_top_right_input4'></input>
                        <div className="inner_div_right_top_top_right_heading5">Youtube</div>
                        <input className='inner_div_right_top_top_right_input5'></input>
                    </div>
                </div>
            </div>
        </>)
}

export default Urldiv