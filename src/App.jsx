import { useState } from "react"
import Listado from "./componentes/Listado"
import Formulario from "./componentes/formulario"
import "./App.css"

const personasDefault = [
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: true},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: false},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: false},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: true}
    
]

export default function App() {
  const [personas, setPersonas] = useState(personasDefault)
  
  const guardar = (persona) => {
    console.log(persona);
    
    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);
  }

  return (
    <div className="App">
      <h1>Componente APP</h1>
      <div className="Contenedor">
      <Formulario
        guardar={(persona) => guardar(persona)}
      />
      <Listado
        personas={personas}
      />
      </div>
    </div>
  )
  }

