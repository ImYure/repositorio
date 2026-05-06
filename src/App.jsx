import { useState } from "react"
import Listado from "./componentes/Listado"
import Formulario from "./componentes/formulario"
import "./App.css"

const personasDefault = [
    {id: 1, documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: true},
    {id: 2, documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: false},
    {id: 3, documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: false},
    {id: 4, documento: "12345678", apellidos: "Perez", nombres: "Juan", curso: "7mo", division: "2da", alumno: true}
    
];

export default function App() {
  const [personas, setPersonas] = useState(personasDefault)
  
  const guardar = (persona) => {
    console.log(persona);
    
    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);
  }

  const eliminar = (personas_id) => {
    const nuevasPersonas = personas.filter((persona) => persona.id != personas_id);

    console.log(nuevasPersonas);
    
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
        eliminar={(personas_id) => eliminar(personas_id)}
      />
      </div>
    </div>
  )
  }
