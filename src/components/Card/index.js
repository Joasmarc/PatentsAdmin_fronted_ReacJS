import React, { useState } from 'react'
import { gender } from '../../constants'
import { getRequestAPI } from '../../services'
import { Button } from '../Button'
import { Form } from '../Form'
import { FormEdit } from '../FormEdit'
import './style.css'

export const Card = ({patient, refreshAction}) => {

    const [editing, setEditing] = useState(false);

    const deletePantent = async()=>{
        if(window.confirm(`Esta segur@ de eliminar a "${patient.name.toUpperCase()} ${patient.last_name.toUpperCase()}" ?`)){

            try {
                if (await getRequestAPI(`delete&id=${patient.id}`)){
                    await refreshAction();
                    alert('usuario eliminado con exito');
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            {(editing) ? 
            <FormEdit
            initialValue={patient}
            cancelAction={()=> setEditing(false)}
            urlServer="update"
            refreshAction={refreshAction}
            color="#C697E2"
            />
            : 
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
                        <div className='cardValue'>{gender[patient.sex]}</div>
                        <div className='cardValue'>{patient.type_id.toUpperCase()}</div>
                        <div className='cardValue'>{patient.id.toUpperCase()}</div>
                    </div>
                </div>
                <div className='containerBtn'>
                    <Button text='❌' size="small" onClick={()=>deletePantent()}/>
                    <Button text='📝' size="small" onClick={()=>{setEditing(true)}}/>
                </div>
            </div>
            }
        </>
    )
}
