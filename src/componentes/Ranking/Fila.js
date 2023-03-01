
function Fila(props){

    

    return(
         <tr>
            <th scope="row">{props.numero}</th>
            <td>{props.nick}</td>
            <td>{props.puntaje}</td>
            <td>{props.fecha}</td>
        </tr>
    );
}

export default Fila;