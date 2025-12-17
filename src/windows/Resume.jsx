import { WindowControls } from '#components/index.js'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react';
const Resume = () => {
    return (
        <>
            <div id='wondow-header' className='flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400'>

                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a href="files/My_Resume.pdf" title='Download Resume' download="My_Resume.pdf" className='cursor-pointer'>
                    <Download className="p-1 hover:bg-gray-200 rounded hover:cursor-default" /></a>


            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow