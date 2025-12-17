import { useState } from 'react';
import { WindowControls } from '#components/index.js'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    return (
        <>
            <div id='window-header' className='flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400'>

                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a href="files/My-Cv.pdf" title='Download Resume' download="My-Cv.pdf" className='cursor-pointer'>
                    <Download className="p-1 hover:bg-gray-200 rounded hover:cursor-default" /></a>


            </div>
            <div className="h-[65vh] w-full overflow-y-auto bg-gray-200">
                <Document file="files/My-Cv.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)} className="flex flex-col items-center py-5">
                    {numPages && Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer
                            renderAnnotationLayer
                            className="mb-4 last:mb-0 shadow-lg"
                        />
                    ))}
                </Document>
            </div>

        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow