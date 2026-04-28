import Listado from "./componentes/Listado"
import Formulario from "./componentes/formulario"
import "./App.css"

const personas = [
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: false},
    {documento: "12345678", apellidos: "Perez", nombres: "Juan", alumno: true}
    
]

export default function App() {
  
  return (
    <div className="App">
      <h1>Componente APP</h1>
      <div className="Contenedor">
      <Formulario />
      <Listado
        personas={personas}
      />
      </div>
    </div>
  )
}

