export default function Tarjeta({documento, nombres, apellidos, alumno, division, curso}) {

    return(
        <div className="Tarjeta"
            style={{backgroundColor: alumno ? "aquamarine" : "blueviolet",
                    color: alumno ? "black" : "white "
            }}
        >
            <span
             className="Eliminar"
             onClick={() => alert("Eliminar")}
             >X</span>
            <h2>{documento}</h2>
            <h3>{apellidos}, {nombres}</h3>
            <h4>{curso}, {division}</h4>
        </div>
    )
}

