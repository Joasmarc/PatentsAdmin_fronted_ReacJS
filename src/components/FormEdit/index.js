import React, { useEffect, useState } from 'react';
import { transform_sex } from '../../constants';
import { useForm } from '../../Hook/useForm';
import { getRequestAPI, postRequestAPI } from '../../services';
import { dataValidator } from '../../utils/dataValidaotr';
import { Button } from '../Button';
import './style.css';

export const FormEdit = ({
    urlServer,
    cancelAction,
    color,
    refreshAction,
    initialValue,
}) => {

    // const [id_types, setId_types] = useState([])
    const [sex_types, setSex_types] = useState([])

    const {name, last_name, id, type_id, onChange, form} = useForm(initialValue)

    // const getIdTypes = async() =>{
    //     const response = await getRequestAPI('typeId');
    //     setId_types(response);
    // }

    const getSexTypes = async() => {
        const response = await getRequestAPI('sex');
        setSex_types(response);
    }

    const sendData = async() =>{
        if(dataValidator(form)){

            try {
                await postRequestAPI(urlServer, form)
                await refreshAction();
                alert('Paciente Editado Con Exito');
                cancelAction();
            } catch (error) {
                console.log(error)
            }

        }else{
            alert('Datos incompletos');
        }
    }

    useEffect(() => {
        // getIdTypes();
        form.sex = transform_sex[form.sex];
        getSexTypes();
    }, [])
    

    return (
        <div className='formContainer' style={{backgroundColor: color}}>
            <div className='formComponent'>

                <div className='formRow'>
                    <h3 className='formLabel'>Nombre</h3>
                    <input value={name} onChange={(event)=>onChange(event.target.value, 'name')} className='formInput' placeholder='Jose'/>
                </div>

                <div className='formRow'>
                    <h3 className='formLabel'>Apellido</h3>
                    <input value={last_name} onChange={(event)=>onChange(event.target.value, 'last_name')} className='formInput' placeholder='Quijada'/>
                </div>

                <div className='formRow'>
                    <h3 className='formLabel' >Tipo ID</h3>
                    <select className='formInput' onClick={(event)=>onChange(event.target.value, 'type_id')} disabled>
                        <option value="0">{type_id}</option>
                    </select>
                    <div style={{color:'red'}}>No se puede modificar el id por seguridad</div>
                </div>

                <div className='formRow'>
                    <h3 className='formLabel'>ID</h3>
                    <input value={id} onChange={(event)=>onChange(event.target.value, 'id')} className='formInput' placeholder='cv112544' disabled />
                </div>

                <div className='formRow'>
                    <h3 className='formLabel'>Genero</h3>
                    <select className='formInput' onClick={(event)=>onChange(event.target.value, 'sex')}>
                        <option value={transform_sex[form.sex]}>{transform_sex[form.sex]}</option>
                        {(sex_types.length >= 1) &&
                            sex_types.map(sex=> <option value={sex.id} key={sex.id}>{sex.name}</option>)
                        }
                    </select>
                </div>

                <div className='formRow'>
                    <Button text="Crear" onClick={()=>sendData()} size="medium" />
                    <Button text="Cancelar" onClick={()=>cancelAction()} size="medium" color='dark' />
                </div>

            </div>
        </div>
    )
}
