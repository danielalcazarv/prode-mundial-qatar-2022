import { useEffect, useState } from "react";

const TablaPartido = ({partidos}) => {
    const [bandera1, setBandera1] = useState('A Definir');
    const [bandera2, setBandera2] = useState('A Definir');
    const banderUrl1 = "https://flagcdn.com/w160/"+bandera1+".webp"
    const altUrl1 = "bandera"+bandera1
    const banderUrl2 = "https://flagcdn.com/w160/"+bandera2+".webp"
    const altUrl2 = "bandera"+bandera2

    useEffect(()=>{
        fetch('https://flagcdn.com/es/codes.json')
            .then((response)=>response.json())
            .then((jsonFlags)=>{
                const getFlagCode = (obj, value) =>{
                    return Object.keys(obj).find(key => obj[key] === value);
                }
                setBandera1(getFlagCode(jsonFlags, partidos.equipo1))
                setBandera2(getFlagCode(jsonFlags, partidos.equipo2))
            })
        }
    ,[partidos.equipo1,partidos.equipo2])
    

    return (
        <tr>
            <th scope="row">{partidos.nro}</th>
            <td>{partidos.equipo1}</td>
            <td>
                <img className="img__bandera" src={banderUrl1} alt={altUrl1}></img>
            </td>
            <td><input className="resultado__input" type="number"/></td>
            <td><input className="resultado__input" type="number"/></td>
            <td>
                <img className="img__bandera" src={banderUrl2} alt={altUrl2}></img>
            </td>
            <td>{partidos.equipo2}</td>
        </tr>
    )
}

export default TablaPartido