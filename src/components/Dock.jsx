import React, { useRef } from 'react'
const Dock = () => {
    const dockRef = useRef(null);
  return (
    <section id='dock'>
        <div ref={dockRef} className="dock-container"></div>
    </section>
  )
}
export default Dock