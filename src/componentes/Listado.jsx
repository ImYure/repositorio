import Tarjeta from "./Tarjeta";


export default function Listado({personas, eliminar}) {

    return(
        <div style={{flex: 3}}> 
            <h1>Componente Listado</h1>
            <div className="Listado">
            {personas.map((persona, index) =>

            <Tarjeta 
                key={persona.id}
                documento={persona.documento}
                apellidos={persona.apellidos}
                nombres={persona.nombres}
                alumno={persona.alumno}
                curso={persona.curso}
                division={persona.division}
                eliminar={() => eliminar(persona.id)}
            />

            )}
            </div>
        </div>
    )
}
