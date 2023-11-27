import { useContext } from 'react';
import React from 'react'
import {FaBars} from 'react-icons/fa';
import { AppContext } from './context';
function Home() {

     const data = useContext(AppContext);
     
     return (
          <main>
               <button className="sidebar-toggle">
                    <FaBars />
               </button>
          </main>
     )
}

export default Home
