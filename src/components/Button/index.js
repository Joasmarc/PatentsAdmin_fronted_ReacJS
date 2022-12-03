import React from 'react';
import './style.css';

export const Button = ({color, text, onClick}) => {



    return (
        <div className='containerButton' >
            <button onClick={()=>onClick()} className='buttonComponente'>
                <div className='textButton'>{text}</div>
            </button>
        </div>
    )
}
