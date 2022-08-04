import React from 'react'

const Innerdivtop = ({ setopenModal, toggle }) => {
    return (
        <>
            <div className='inner_div_topz'>
                <div className='inner_top'>Token Locker</div>
                <div className='inner_top_1'>Introducing Token Vesting Locking Pools. Tocken locks are resresented as
                    shares of a pool, in a similar way yo a uniswap pool, allowing all ERC20
                    tokens including Rebasing and Deflationary mechanisms to be supported.</div>
                <div className='inner_mid'>This means lock amounts may change due ti decimal rounding, but you will always retain your share of the pool.</div>
                <div className='inner_bottom'>Do not lock Liquidity tokens here, they will not be shown in the Spark launch, and will not be migrateble.</div>
                <div className='inner_bottom_button'>
                    <div className='ether_img'>
                        <div className='ether_img_top'>
                            <img src="images/Vector25.png" className='ether_img_top_left'></img>
                            <img src="images/Vector26.png" className='ether_img_top_right'></img>
                        </div>
                        <div className='ether_img_bottom'>
                            <img src="images/Vector27.png" className='ether_img_bottom_left'></img>
                            <img src="images/Vector28.png" className='ether_img_bottom_right'></img>
                        </div>
                    </div>
                    <div id="button_266" onClick={() => { setopenModal(true); toggle(); }}>Connect your wallet</div>
                </div>
            </div>
        </>)
}

export default Innerdivtop;