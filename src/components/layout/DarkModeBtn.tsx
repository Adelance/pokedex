import React, { useState } from 'react'

const DarkModeBtn = () => {

    const [darkMode, setDarkMode] = useState(false);

    const onClick = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle('dark');
    }
    
    return (
        <div className='fixed-action-btn'>
            <a className="btn-floating btn-large" onClick={onClick}>
             {darkMode ? (<i className='material-icons'>dark_mode</i>
             ) : (
                <i className='material-icons'>light_mode</i>
             )}
                
            </a>
        </div>
    )
}

export default DarkModeBtn; 