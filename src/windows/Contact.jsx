import WindowWrapper from '#hoc/WindowWrapper'
const Contact = () => {
  return (
    <>
    <div className="flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
       <h2>Contact Me</h2>
        </div>
        
        <div className="p-5 space-y-5 ">
            <img src="images/adrin.jpg" alt="Haseeb" /></div></>
  )
}
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow