import {useState} from "react";

export default function Formulario({guardar}) {
    const [documento, setDocumento] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [curso, setCurso] = useState("");
    const [division, setDivision] = useState("");
    const [rol, setRol] = useState("");

    const hanlderSubmit = (e) => {
        e.preventDefault();
        console.log({documento, apellidos, nombres, rol, curso, division});

        const alumno = rol === "alumno";
        const persona = {
            documento,
            apellidos,
            nombres,
            alumno,
            curso,
            division
        }
        guardar(persona);
    }

    
    return(
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={hanlderSubmit}>
                <input
                    type="text"
                    placeholder="Documento"
                    onChange={(e) => setDocumento(e.target.value)}
                    value={documento}
                />

                <input
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) => setApellidos(e.target.value)}
                    value={apellidos}
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setNombres(e.target.value)}
                    value={nombres}
                />
                <input
                    type="text"
                    placeholder="Curso"
                    onChange={(e) => setCurso(e.target.value)}
                    value={curso}
                />
                <input
                    type="text"
                    placeholder="Division"
                    onChange={(e) => setDivision(e.target.value)}
                    value={division}
                />
                <select
                    onChange={(e) => setRol(e.target.value)}
                    value={rol}
                >
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}