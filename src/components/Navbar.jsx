import React from 'react'   
import { navIcons, navLinks } from '#constants'
import dayjs from 'dayjs'
import useWindowStore from '#store/window';

const Navbar = () => {

const {openWindow} = useWindowStore();
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold '> Haseeb's Portfolio </p>
                <ul>
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
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
                <time>{dayjs().format('ddd, MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}

export default Navbar