import { WindowControls } from "#components"
import { locations } from "#constants"
import { Search } from "lucide-react"
import WindowWrapper from "#hoc/WindowWrapper"
import useLocationStore from "#store/location"
import clsx from "clsx";
import useWindowStore from "#store/window.js"

const Finder = () => {
  const {openWindow} = useWindowStore();
  const { activeLocations: activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
  if(item.fileType === "pdf") return openWindow("resume");
  if(item.kind === "folder") return setActiveLocation(item);
  if(['fig', 'url'].includes(item.fileType) && item.href) window.open (item.href, "_blank");
   openWindow(`${item.fileType}${item.kind}` , item);
   
  }

  const renderList = (name, items) =>
    <div className="flex flex-col">
      <h3>{name}</h3>

      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => setActiveLocation(item)}
            className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>

  return (
    <>

      <div id="window-header" className="flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
        <WindowControls target="finder" />
        <Search className=" p-1 hover:bg-gray-200 rounded hover:cursor-default" />

      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar w-3/12 flex-none bg-gray-50 border-r border-gray-200 flex flex-col p-5">


          {renderList("Favorites", Object.values(locations))}



          {renderList("My Projects", locations.work.children)}


        </div>
        <ul className="col-span-10 space-y-3">
          {activeLocation?.children.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p className="text-sm font-medium truncate">{item.name}</p>
            </li>
          ))}

        </ul>

      </div>



    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow