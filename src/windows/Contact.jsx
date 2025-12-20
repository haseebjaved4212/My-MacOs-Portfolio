
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import WindowControls from '#components/WindowControls'
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("contactimhaseeb@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    }

    return (
        <div className="flex flex-col h-full relative bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
                <WindowControls target="contact" className="size-5" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="images/Haseeb-3.jpeg" alt="Haseeb" className="w-20 h-20 rounded-full object-cover object-top" />

                <div>
                    <h3 className="font-bold text-gray-800 text-lg">Let's Connect</h3>
                    <p className="text-gray-600 text-sm">Got an idea? A bug to Squash? Or Just Wanna talk tech, I am in.</p>
                </div>

                <div
                    className='flex items-center justify-between gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg group cursor-pointer hover:bg-gray-100 transition-colors active:scale-95 duration-200'
                    onClick={handleCopy}
                    role="button"
                    tabIndex={0}
                >
                    <span className="text-gray-700 flex-1 truncate font-medium text-sm">contactimhaseeb@gmail.com</span>
                    {hasCopied ? (
                        <Check className='size-4 text-green-500 animate-in fade-in zoom-in duration-300' />
                    ) : (
                        <Copy className='size-4 text-gray-400 group-hover:text-gray-600 transition-colors' />
                    )}
                </div>

                <ul className='grid grid-cols-2 gap-4'>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }} className="rounded-xl overflow-hidden hover:scale-[1.02] transition-transform shadow-sm h-24">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between p-4 h-full">
                                <img src={icon} alt={text} className='size-6 text-white' />
                                <p className="text-white text-sm font-bold tracking-wide">{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {hasCopied && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                    Copied to clipboard!
                </div>
            )}
        </div>
    )
}
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow