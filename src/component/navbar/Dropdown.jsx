import React, {useState} from 'react'
import {MenuItems} from '../navbar/MenuItems'
import {Link} from 'react-router-dom'
import './dropdown.css'

const Dropdown = () => {
    const [clicked, setClicked] = useState(false)
    
    const handleClicked = () => setClicked(!clicked)

    return (
        <>
           <ul 
           onClick={handleClicked} 
           className={clicked ? 'dropdown-menu clicked' : 'dropdown-menu'}
           >
               {MenuItems.map((item, index) =>{
                   return (
                       <li key={index}>
                           <Link to={item.path} className={item.cName} onClick={() => setClicked(false)}>
                               {item.title}
                           </Link>
                       </li>
                   )
               })}
           </ul> 
        </>
    )
}

export default Dropdown
