import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";
import TablasList from "./TablasList";

const TablasListContainer = () => {
  const [grupos, setGrupos] = useState([]);

  useEffect(()=>{
    const gruposCollection = collection(db, "grupos");
    const consulta = getDocs(gruposCollection);
    consulta
    .then((resultado)=>{
      const grupos = resultado.docs.map(doc=>{
        const gruposConId = {
          ...doc.data(),
          id: doc.id
        }
        return gruposConId
      })
      setGrupos(grupos)
    })
    .catch((error)=>{
    })
    .finally(()=>{
    })},
    []);
    
  return (
    <div className="container mx-lg-auto container__table">
      <table className="table table-striped">
        {grupos.map(grupos=>{
          return(
          <TablasList key={grupos.id} grupos={grupos}/>
          )
        })}
      </table>
    </div>
  )
}

export default TablasListContainer