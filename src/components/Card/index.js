import React from 'react'
import './style.css'

export const Card = ({name, last_name, type_id, id, sex}) => {
    return (
        <div className='cardContainer'>
            <div className='containerLabel'>
                <div className='cardLabel'>Nombre</div>
                <div className='cardLabel'>Apellido</div>
                <div className='cardLabel'>Genero</div>
                <div className='cardLabel'>Tipo ID</div>
                <div className='cardLabel'>ID</div>
            </div>
            <div className='containerValue'>
                <div className='cardValue'>{name.toUpperCase()}</div>
                <div className='cardValue'>{last_name.toUpperCase()}</div>
                <div className='cardValue'>{sex.toUpperCase()}</div>
                <div className='cardValue'>{type_id.toUpperCase()}</div>
                <div className='cardValue'>{id.toUpperCase()}</div>
            </div>
        </div>
    )
}
