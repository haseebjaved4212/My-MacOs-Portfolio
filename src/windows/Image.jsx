import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window.js"

const Image = () => {
    const { windows } = useWindowStore();
    const { data } = windows.imgfile;

    if (!data) return null;

    return (
        <div className="flex flex-col h-full bg-white rounded-lg shadow-xl overflow-hidden">
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 select-none">
                <div className="flex items-center ">
                    <WindowControls target="imgfile" />
                    <span className="font-medium text-gray-600 ml-4 text-sm">{data.name}</span>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-100 overflow-hidden relative">
                {data.imageUrl ? (
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className="max-w-full max-h-full object-contain p-4"
                    />
                ) : (
                    <div className="text-gray-400">No image available</div>
                )}
            </div>
        </div>
    )
}

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
