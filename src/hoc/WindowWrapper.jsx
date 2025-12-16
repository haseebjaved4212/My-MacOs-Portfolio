import useWindowStore from "#store/window.js"
import { useGSAP } from "@gsap/react";
import { useRef } from "react"


const WindowWrapper = (Component, windowKey) => {

    const Wrapped = (props) => {
        const { windows, focusWindow } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        const ref = useRef(null);

        useGSAP(()=>{
            const el = ref.current;
            if(!el || !isOpen) return;
            
            
        }, [isOpen])

        return (<section id={windowKey} ref={ref} style={{ zIndex, }} className="absolute ">
            <Component {...props} />
        </section>
        )
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return Wrapped;

}

export default WindowWrapper