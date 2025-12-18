import { WindowControls } from "#components"
import { locations } from "#constants"
import { Search } from "lucide-react"
import WindowWrapper from "#hoc/WindowWrapper"
import useLocationStore from "#store/location"

const Finder = () => {
const {activeLocation, setActiveLocation} = useLocationStore;
  return (
    <>

      <div id="window-header" className="flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
        <WindowControls target="finder" />
        <Search className=" p-1 hover:bg-gray-200 rounded hover:cursor-default" />

      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar w-3/12 flex-none bg-gray-50 border-r border-gray-200 flex flex-col p-5">

          <div className="">
            <h3>Favorites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li key={item.id} onClick={() => setActiveLocation(item)}>
                  <img src={item.icon} alt={item.name} className="w-4 "/>
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
            
            </div> <div className="">
            <h3>Work</h3>
            <ul>
              ...
            </ul>
            
            </div>
            
            </div>

      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow