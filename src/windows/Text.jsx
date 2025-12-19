import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window.js"

const Text = () => {
    const { windows } = useWindowStore();
    const { data } = windows.txtfile;

    if (!data) return null;

    return (
        <div className="flex flex-col h-full bg-white rounded-lg shadow-xl overflow-hidden">
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 select-none">
                <div className="flex items-center ">
                    <WindowControls target="txtfile" />
                    <span className="font-medium text-gray-600 ml-4 text-sm">{data.name}</span>
                </div>
            </div>
            <div className="p-8 overflow-y-auto w-full max-w-3xl min-w-[300px] md:min-w-[500px]">
                <div className="flex items-center gap-4 mb-6">
                    {data.icon && <img src={data.icon} alt="icon" className="w-16 h-16 object-contain" />}
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">{data.name}</h1>
                        {data.subtitle && <p className="text-sm text-gray-500 mt-1 p-2">{data.subtitle}</p>}
                    </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed break-words pr-4 mr-4">
                    {data.description && Array.isArray(data.description) ?
                        data.description.map((para, i) => <p key={i}>{para}</p>) :
                        (data.description && <p className="p-2">{data.description}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
