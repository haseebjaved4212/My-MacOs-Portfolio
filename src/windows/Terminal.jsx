

const Terminal = () => {
    return (
        <>
            <div className="" id='window-header'>

                <p>Window Controls </p>
                <h2>Tech Stack </h2>
            </div>
            <div className="tectstack">
                <p>
                    <span className='font-bold'>
                        @Haseeb %
                    </span>
                    show tech stack
                </p>
            </div>
        </>
    )
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow ;