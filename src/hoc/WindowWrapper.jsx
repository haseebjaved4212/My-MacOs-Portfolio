import useWindowStore from "#store/window.js"
import { useRef } from "react"


const WindowWrapper = (Component, windowKey) => {

    const wrapped = (props) => {
        const { windows, focusWindow } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        const ref = useRef(null);

        return <section id={windowKey} ref={ref} style={{ zIndex, }}></section>
    }
    return (
        <div></div>
    )
}

export default WindowWrapper