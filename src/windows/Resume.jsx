import { WindowControls } from '#components/index.js'
import WindowWrapper from '#hoc/WindowWrapper'
const Resume = () => {
  return (
   <>
   <div id='wondow-header' className='flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400'>

    <WindowControls  target="resume"/>
    <h2>Resume.pdf</h2>
    <a href="files/My_Resume.pdf" download="My_Resume.pdf">Download</a>
      
    
   </div>
   </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow