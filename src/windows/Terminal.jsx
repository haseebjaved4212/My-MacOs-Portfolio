

import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants/index.js";

const Terminal = () => {
    return (
        <>
            <div className="" id='window-header'>

                <p>Window Controls </p>
                <h2>Tech Stack </h2>
            </div>
            <div className="tectstack p-4">
                <p>
                    <span className='font-bold'>@Haseeb %  </span> show tech stack
                </p>
                <div className=" flex items-center ms-6 mt-7">
                    <p className="w-32 "> Category</p>
                    <p>Technologies</p>
                </div>
                <ul className="content ">
                    {techStack.map((tech, index) => (
                        <li key={index} className="flex items-center my-3">
                            <h3 className="w-32 font-bold text-green-600 font-roboto">{tech.category}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {tech.items.map((item, i) => (
                                    <li key={i} className="text-gray-600 font-roboto">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;