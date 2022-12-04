import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Form } from "../components/Form";
import { getRequestAPI } from "../services";
import './style.css'

function App() {

    const [patients, setPatients] = useState([]);
    const [creating, setCreating] = useState(false);

    const getPatients = async() =>{
        const response = await getRequestAPI('findAll');
        setPatients(response);
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
                        refreshAction={getPatients}
                        color={'rgb(74, 40, 208)'}
                        />
                    }
                    <div>
                        {
                            (patients.length >= 1) ? 
                            patients.map((patient) => {
                                return(
                                    <Card refreshAction={getPatients} setStatus={setPatients} status={patients} patient={patient} key={patient.id} />
                                )
                            })
                            :
                            <h3>Por los momento no hay pacientes😅.</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;