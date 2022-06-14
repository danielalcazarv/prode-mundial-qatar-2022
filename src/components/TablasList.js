import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";
import TablaPartido from "./TablaPartido";

const TablasList = ({grupos}) => {
  const [partidos, setPartidos] = useState([]);

  useEffect(()=>{
    const partidosCollection = collection(db, "partidos");
    const queryCollection = query(partidosCollection, orderBy("date"))
    const consulta = getDocs(queryCollection)
    consulta
    .then((resultado)=>{
      const partidos = resultado.docs.map(doc=>{
        const partidosConId = {
          ...doc.data(),
          id: doc.id
        }
        return partidosConId
      })
      setPartidos(partidos)
    })
    .catch((error)=>{
    })
    .finally(()=>{
    })},
    []);

  return (
    <>
      <thead className="table-secondary">
        <tr>
          <th colSpan="7" className="grupo pt-4" scope="col">{grupos.group}</th> 
        </tr>
      </thead>
      <tbody className="table-success">
        {partidos.filter(partido=>partido.group===grupos.group).map(partidos=>{
          return(
            <TablaPartido key={partidos.id} partidos={partidos}/>
          )
          })
        }
      </tbody>
    </>
  )
}

export default TablasList