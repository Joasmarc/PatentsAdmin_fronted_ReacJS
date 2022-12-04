import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Form } from "../components/Form";
import { getRequestAPI } from "../services";
import './style.css'

function App() {

    const [patients, setPatients] = useState([]);

    // const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);

    const getPatients = async() =>{
        const response = await getRequestAPI('findAll');
        setPatients(response);
    }

    const createPatient = async(patient)=>{
        console.log(patient);
    }
    
    useEffect(() => {
        getPatients();
    }, [])

    return (
        <>
            <div className="baseInterface">
                <div className="smallBody">
                    <h1 className="bigTittle">Bienvenido al administrador de pacientes</h1>
                    <nav className="navBar">
                        <Button onClick={()=>setCreating(!creating)} text='Registrar Paciente' size="medium" />
                    </nav>
                    {
                        creating && 
                        <Form
                        cancelAction={()=> setCreating(false)}
                        urlServer="create"
                        setStatus={setPatients}
                        status={patients}
                        />
                    }
                    <div>
                        {/* {
                            patients.map((patient) => {
                                return(
                                    <Card name={patient.name} last_name={patient.last_name} type_id={patient.type_id} id={patient.id} sex={patient.sex} key={patient.id} />
                                )
                            })
                        } */}
                        {
                            (patients.length >= 1) ? 
                            patients.map((patient) => {
                                return(
                                    <Card name={patient.name} last_name={patient.last_name} type_id={patient.type_id} id={patient.id} sex={patient.sex} key={patient.id} />
                                )
                            })
                            :
                            <h3>Por los momento no hay paciente.</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;