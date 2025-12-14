import React, { useRef } from 'react'
import { dockApps } from '#constants/index.js'


const Dock = () => {
    const dockRef = useRef(null);

const toggleApp = (app) => {

}
    return (
        <section id='dock'>
            <div ref={dockRef} className="dock-container">
                {dockApps.map(({ id, name, icon, canOper }) =>
                (
                    <div key={id} className='relative flex justify-center '>
                        <button type='button' className=' dock-icon' aria-label={name}
                        data-tooltip-id="dock-tooltip"
                        data-tooltip-content={name}
                        data-tooltip-delay-show={150}
                        disabled={!canOpen}
                        onClick={() => toggleApp({id, canOpen })}
                        ></button>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Dock