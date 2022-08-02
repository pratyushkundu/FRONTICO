import React from 'react'
import RightDiv from './pools1_mid_inner_right_div'
import LeftDiv from './pools1_mid_inner_left_div'

const Pools1 = ({setopenModal10,toggle}) => {
    return (
        <>
            <div className="middle_div" >
                <div className="mainnets_dev">
                    <option className='option'>
                        <select></select>
                    </option>
                </div>
                <div className="inner_div">
                    <div className='innerdiv_left'>
                        <LeftDiv />
                    </div>
                    <div className='innerdiv_right'>
                        <RightDiv />
                        <div className='innerdivright_button'>
                            <div id="button_15" onClick={()=>{setopenModal10(true); toggle();}}>Connect Wallet</div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Pools1