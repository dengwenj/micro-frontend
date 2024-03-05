import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SubReact from './sub-react'
import SubVue from './sub-vue'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/react'>react 应用</Link>
        <Link to='/vue'>vue 应用</Link>

        <Routes>
          <Route path='/react' element={<SubReact />}></Route>
          <Route path='/vue' element={<SubVue />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
