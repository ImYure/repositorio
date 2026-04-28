import Tarjeta from "./Tarjeta";


export default function Listado({personas}) {

    return(
        <div style={{flex: 3}}> 
            <h1>Componente Listado</h1>
            <div className="Listado">
            {personas.map((persona, index) =>

            <Tarjeta 
                key={index}
                documento={persona.documento}
                apellidos={persona.apellidos}
                nombres={persona.nombres}
                alumno={persona.alumno}
            />

            )}
            </div>
        </div>
    )
}

