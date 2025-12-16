import useWindowStore from "#store/window.js"
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react"


const WindowWrapper = (Component, windowKey) => {

    const Wrapped = (props) => {
        const { windows, focusWindow } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        const ref = useRef(null);

        useGSAP(()=>{
            const el = ref.current;
            if(!el || !isOpen) return;
            
            el.style.display = "block";
            
        }, [isOpen]);

        useLayoutEffect(()=>{
            const el = ref.current;
            if(!el) return;
            
            el.style.display = isOpen ? "block" : "none";
            
        }, [isOpen]);

        return (<section id={windowKey} ref={ref} style={{ zIndex, }} className="absolute ">
            <Component {...props} />
        </section>
        )
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return Wrapped;

}

export default WindowWrapper