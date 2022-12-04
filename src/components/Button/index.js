import React from 'react';
import './style.css';

export const Button = ({text, onClick, size, color='light'}) => {

    const sizeType = {
        medium: '195px',
        small: '50px',
    };

    const colorType = {
        light: '#7433FF',
        dark: '#39216c',
    };

    return (
        <div className='containerButton' >
            <button
            onClick={()=>onClick()}
            className='buttonComponente'
            style={{width: sizeType[size], backgroundColor: colorType[color]}}
            >
                <div className='textButton'>{text}</div>
            </button>
        </div>
    );
}
