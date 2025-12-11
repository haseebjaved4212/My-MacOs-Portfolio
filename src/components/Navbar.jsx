import React from 'react'   
import { navIcons, navLinks } from '#constants'

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
            <div className="">
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                          <img src={img} alt={`icon-${id}`} className="icon-hover" />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar