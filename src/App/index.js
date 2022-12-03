import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import './style.css'

function App() {

    return (
        <>
            <div className="baseInterface">
                <div className="smallBody">
                    <h1 className="bigTittle">Bienvenido al administrador de pacientes</h1>
                    <nav className="navBar">
                        <Button onClick={()=>console.log('hola mundo')} text='Clickear' />
                    </nav>
                    <div>
                        <Card name='joasmarc' last_name='quijada' type_id='CC' id='20782407' sex='Masculino' />
                        <Card name='joasmarc' last_name='quijada' type_id='CC' id='20782407' sex='Masculino' />
                        <Card name='joasmarc' last_name='quijada' type_id='CC' id='20782407' sex='Masculino' />
                        <Card name='joasmarc' last_name='quijada' type_id='CC' id='20782407' sex='Masculino' />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;