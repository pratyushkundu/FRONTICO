import React from 'react'

const Urldiv = ({setopenModal8}) => {
    return (
        <>
            <div className='inner_div_right_top'>
                <div className="inner_div_right_top_top">
                    <div className='inner_div_right_top_top_left'>
                        <div className="inner_div_right_top_top_left_heading1" onClick={() => setopenModal8(true)}>Logo Url *</div>
                        <input className='inner_div_right_top_top_left_input1' placeholder='Ex. http://...'></input>
                        <div className="inner_div_right_top_top_left_heading2">Facebook</div>
                        <input className='inner_div_right_top_top_left_input2' placeholder='Ex: https://facebook.com/...
'></input>
                        <div className="inner_div_right_top_top_left_heading3">GitHub</div>
                        <input className='inner_div_right_top_top_left_input3' placeholder='Ex: https://github.com/...
'></input>
                        <div className="inner_div_right_top_top_left_heading4">Instagram</div>
                        <input className='inner_div_right_top_top_left_input4' placeholder='Ex: https://instagram.com/...
'></input>
                        <div className="inner_div_right_top_top_left_heading5">Reddit</div>
                        <input className='inner_div_right_top_top_left_input5' placeholder='Ex: https://reddit.com/...
'></input>
                    </div>
                    <div className='inner_div_right_top_top_right'>
                        <div className="inner_div_right_top_top_right_heading1">Website *</div>
                        <input className='inner_div_right_top_top_right_input1' placeholder='Ex. http://...'></input>
                        <div className="inner_div_right_top_top_right_heading2">Twitter</div>
                        <input className='inner_div_right_top_top_right_input2' placeholder='Ex. http://twitter.com/....'></input>
                        <div className="inner_div_right_top_top_right_heading3">Telegram</div>
                        <input className='inner_div_right_top_top_right_input3' placeholder='Ex. http://t.me/....'></input>
                        <div className="inner_div_right_top_top_right_heading4">Discord</div>
                        <input className='inner_div_right_top_top_right_input4' placeholder='Ex. http://d.me/....'></input>
                        <div className="inner_div_right_top_top_right_heading5">Youtube</div>
                        <input className='inner_div_right_top_top_right_input5' placeholder='Ex: https://youtube.com/...
'></input>
                    </div>
                </div>
            </div>
        </>)
}

export default Urldiv