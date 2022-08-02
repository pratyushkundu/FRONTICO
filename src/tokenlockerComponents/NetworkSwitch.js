import React from 'react'

const NetworkSwitch = ({setopenModal1,setopenModal2,setopenModal3}) => {
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
                    <img src="images/Vector29.png" style={{ marginLeft: "-6rem", width: "2.1rem", height: "2.1rem", marginTop: "0.6rem" }}></img>
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

export default NetworkSwitch