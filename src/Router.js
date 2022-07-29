import {Routes,Route} from 'react-router-dom';


import App from './App';
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'


import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<App/>}></Route>
            <Route exact path="/1" element={<App1/>}></Route>
            <Route exact path="/2" element={<App2/>}></Route>
            <Route exact path="/3" element={<App3/>}></Route>
            <Route exact path="/4" element={<App4/>}></Route>
            <Route exact path="/5" element={<App5/>}></Route>

        </Routes>
    </div>
  )
}

export default Router
