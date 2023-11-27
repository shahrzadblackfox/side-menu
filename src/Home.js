
import React from 'react'
import {FaBars} from 'react-icons/fa';
import {  GlobalContext } from './context';
function Home() {

     const {isopenSider} = GlobalContext();

     return (
          <main>
               <button className="sidebar-toggle" onClick={isopenSider}>
                    <FaBars />
               </button>
          </main>
     )
}

export default Home
