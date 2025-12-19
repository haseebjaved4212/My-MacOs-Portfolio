import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import WindowControls from '#components/WindowControls'
const Contact = () => {
    return (
        <>
            <div className="flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
                <WindowControls target="contact" className="size-5" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5 ">
                <img src="images/Haseeb-3.jpeg" alt="Haseeb" className="w-20 h-20 rounded-full object-cover " />
                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to Squash? Or Just Wanna talk tech, I am in.</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} className='size-5' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>



            </div></>
    )
}
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow