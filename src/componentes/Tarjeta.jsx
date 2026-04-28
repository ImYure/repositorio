export default function Tarjeta({documento, nombres, apellidos, alumno}) {

    return(
        <div className="Tarjeta"
            style={{backgroundColor: alumno ? "aquamarine" : "blueviolet",
                    color: alumno ? "black" : "white "
            }}
        >
            <h2>{documento}</h2>
            <h3>{apellidos}, {nombres}</h3>
        </div>
    )
}

