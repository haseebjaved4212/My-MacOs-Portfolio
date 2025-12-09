import React from 'react'   
import { navLinks } from '#constants/index.js'

const Navbar = () => {


    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold '> Haseeb's Portfolio </p>
                <ul>
                    {navLinks.map(({id, name}) => (
                        <li key={id}>
                           <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar