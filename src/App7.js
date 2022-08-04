import React from 'react'
import './index8.css'
import { useState } from 'react'
import Metamask from './App8'
import './index9.css'
import './index10.css'
import './index5.css';
import './index6.css'
import App4 from './App4'
import App8 from './App8'
import App9 from './App9.js';
import Topdiv from './tokenlockerComponents/topdiv/topdiv'
import Middlediv from './tokenlockerComponents/middlediv/middlediv'
import Innerdivtop from './tokenlockerComponents/middlediv/inner_div_top'
import Tokenlocker5 from './tokenlockerComponents/middlediv/tokenlocker5'
import Bottomdiv from './tokenlockerComponents/bottomdiv/bottomdiv'
import NetworkSwitch from './tokenlockerComponents/NetworkSwitch'
import Tokenlocker6 from './tokenlockerComponents/middlediv/tokenlocker6'

const Tokenlocker1 = () => {
    const [openModal, setopenModal] = useState(false);
    const [openModal1, setopenModal1] = useState(false);
    const [openModal2, setopenModal2] = useState(false);
    const [openModal3, setopenModal3] = useState(false);
    const [openModal5, setopenModal5] = useState(false);

    const toggle = () => {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active1');
        // var popup = document.getElementById('popup');
        // popup.classList.toggle('active1');
    }
    const toggle1 = () => {
        // var popup = document.getElementById('popup');
        // popup.classList.toggle('inactive');
        // var popup1 = document.getElementById('popup1');
        // popup1.classList.toggle('active');
        var blur = document.getElementById('blur');
        blur.classList.toggle('inactive1');
    }

    const toggle2 = () => {
        var popup1 = document.getElementById('popup1');
        popup1.classList.toggle('inactive');
    }

    return (
        <>
            <div className="main_div" id="blur">
                <Topdiv />
                <div className="middle_div" >
                    <Middlediv />
                    <div className="inner_div">
                        {openModal2 &&
                            <>
                                <Tokenlocker5 setopenModal5={setopenModal5} />
                                {openModal5 &&
                                    <Tokenlocker6 />
                                }
                            </>
                        }
                        {!openModal3 &&
                            <Innerdivtop setopenModal={setopenModal} toggle={toggle} />
                        }
                        {openModal1 &&
                            <NetworkSwitch setopenModal1={setopenModal1} setopenModal2={setopenModal2} setopenModal3={setopenModal3} />
                        }
                    </div>
                </div>
                <Bottomdiv />
            </div>
            {openModal &&
                <App8 toggle1={toggle1} setopenModal={setopenModal} setopenModal1={setopenModal1} />
            }
        </>
    )
}

export default Tokenlocker1;