import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { Search } from "lucide-react"

const Finder = () => {
  return (
    <>
    
    <div id="window-header" className="flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
        <WindowControls target="finder"/>
        <Search  className=" p-1 hover:bg-gray-200 rounded hover:cursor-default"/>

    </div></>
  )
}

const FinderWindow = WindowWrapper(Finder , "finder");
export default FinderWindow