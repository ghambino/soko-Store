import React from 'react'
import {Link} from 'react-router-dom'
import './button.css'

function Button() {
    return (
        <>
         <button className='button'>
             <Link className='button-link' to='/sign-up'>Sign Up</Link>
             </button>   
        </>
    )
}

export default Button
