import React, { useEffect, useState } from 'react';

const DarkModeBtn = () => {
    const [darkModeIcon, setDarkModeIcon] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            document.body.classList.toggle('dark');
            setDarkModeIcon(true);
        }
    }, []);

    const onClick = () => {
        if (localStorage.getItem('theme')) localStorage.removeItem('theme');
        else localStorage.setItem('theme', 'darkOn');
        document.body.classList.toggle('dark');
        setDarkModeIcon(!darkModeIcon);
    };

    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large" onClick={onClick}>
                {darkModeIcon ? (
                    <i className="material-icons">dark_mode</i>
                ) : (
                    <i className="material-icons">light_mode</i>
                )}
            </a>
        </div>
    );
};

export default DarkModeBtn;
