import usePersona from "../hooks/usePersona";

export default function Formulario({guardar}) {
    const [persona, setDatoPersona] = usePersona();


    const hanlderSubmit = (e) => {
        e.preventDefault();
        const alumno = persona.rol == "alumno";

        const id = (new Date()).getTime();

        guardar({...persona, alumno, id})
    }
    
    return(
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={hanlderSubmit}>
                <input
                    type="text"
                    placeholder="Documento"
                    onChange={(e) => setDatoPersona("documento", e.target.value)}
                    value={persona.documento}
                />

                <input
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) => setDatoPersona("apellidos", e.target.value)}
                    value={persona.apellidos}
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setDatoPersona("nombres", e.target.value)}
                    value={persona.nombres}
                />
                <input
                    type="text"
                    placeholder="curso"
                    onChange={(e) => setDatoPersona("curso", e.target.value)}
                    value={persona.curso}
                />
                <input
                    type="text"
                    placeholder="Division"
                    onChange={(e) => setDatoPersona("division", e.target.value)}
                    value={persona.division}
                />

                <select
                    onChange={(e) => setRol("Rol",e.target.value)}
                    value={persona.rol}
                >
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}