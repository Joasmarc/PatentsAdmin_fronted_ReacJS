import React from 'react'
import { gender } from '../../constants'
import { getRequestAPI } from '../../services'
import { Button } from '../Button'
import './style.css'

export const Card = ({patient, setStatus, status}) => {

    // delete&id=1605201800
    const deletePantent = ()=>{
        if (getRequestAPI(`delete&id=${patient.id}`)){
            const newStatus = status.filter(current => current.id !== patient.id )
            setStatus(newStatus);
        }
    }

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
                    <div className='cardValue'>{patient.name.toUpperCase()}</div>
                    <div className='cardValue'>{patient.last_name.toUpperCase()}</div>
                    <div className='cardValue'>{patient[gender[patient.sex]]}</div>
                    <div className='cardValue'>{patient.type_id.toUpperCase()}</div>
                    <div className='cardValue'>{patient.id.toUpperCase()}</div>
                </div>
            </div>
            <div className='containerBtn'>
                <Button text='❌' size="small" onClick={()=>deletePantent()}/>
                <Button text='📝' size="small"/>
            </div>
        </div>
    )
}
