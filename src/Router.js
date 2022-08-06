import {Routes,Route} from 'react-router-dom';


import App7 from './Apps/App7';
import App1 from './Apps/App1'



import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<App7/>}></Route>
            <Route exact path="/pools" element={<App1/>}></Route>
        </Routes>
    </div>
  )
}

export default Router
