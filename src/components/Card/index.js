import React from 'react'
import { gender } from '../../constants'
import { Button } from '../Button'
import './style.css'

export const Card = ({name, last_name, type_id, id, sex}) => {

    

    return (
        <div className='cardContainer'>
            <div className='containerData'>
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
                    <div className='cardValue'>{gender[sex]}</div>
                    <div className='cardValue'>{type_id.toUpperCase()}</div>
                    <div className='cardValue'>{id.toUpperCase()}</div>
                </div>
            </div>
            <div className='containerBtn'>
                <Button text='❌' size="small"/>
                <Button text='📝' size="small"/>
            </div>
        </div>
    )
}
