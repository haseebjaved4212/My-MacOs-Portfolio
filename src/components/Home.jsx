
import { locations } from '#constants';
import { useGSAP } from '@gsap/react';
import { clsx } from 'clsx';
import { Draggable } from 'gsap/Draggable';
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { openWindow, focusWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const handleOpen = (project) => {
    // Open finder with this project active
    setActiveLocation(project);
    openWindow("finder");
    focusWindow("finder");
    // Also open the project window itself if needed, but usually finder is enough 
    // effectively simulating "opening the folder" in finder
  }

  useGSAP(() => {
    Draggable.create(".desktop-icon", {
      bounds: "main",
      inertia: true,
      type: "x,y"
    })
  }, [])

  return (
    <section id="home" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <ul className="w-full h-full relative pointer-events-none">
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("desktop-icon absolute flex flex-col items-center justify-center gap-1 w-24 cursor-pointer p-2 rounded hover:bg-white/20 transition-colors pointer-events-auto", project.windowPosition)}
            onDoubleClick={() => handleOpen(project)}
          >
            <img src={project.icon || "/images/folder.png"} alt={project.name} className="w-14 h-14 object-contain drop-shadow-lg" />
            <p className="text-white text-xs font-semibold drop-shadow-md text-center break-words leading-tight shadow-black/50">{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home