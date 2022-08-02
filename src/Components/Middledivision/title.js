import React from 'react'

const Title = ({setopenModal6}) => {
    return (
        <>
            <div className='inner_div_left_top'>
                <div className='inner_top_left_top_top'>(*) is required field</div>
                <div className='inner_top_left_top_top1'>Title</div>
                <input className='inner_div_left_top_input'></input>
                <div className='inner_top_left_top_mid'>Pool creation fee: 10 BNB</div>
                <div className='inner_top_left_top_mid1' onClick={() => setopenModal6(true)}>Currency</div>
                <div className='inner_top_left_top_bottom'>BNB</div>
                <div className='inner_top_left_top_bottom1'>Users will pay with BNB for your token
                </div>
            </div>
        </>)
}

export default Title