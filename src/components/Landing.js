import CountDownWidget from "./CountDownWidget";

const Landing = () => {
    return (
        <>
            <CountDownWidget/>
            <div className="mx-auto my-4 bg__event">
                <h3 className="text-center">Reglas del Prode</h3>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <ul className="col-lg-6">
                        <li className="pt-3">1. Cada participante deberá completar un fixture del Mundial Qatar 2022 junto a su formulario correspondiente. 
                            Este se encuentra en la sección Mi Prode. En el fixture podrán cargar los
                            resultados de todos los partidos de la fase de grupos, ingresando el resultado exacto numérico. 
                            Posteriormente se irán agregando los partidos de las próximas fases.
                        </li>
                        <li className="pt-3">2. Podrán realizar la carga de su fixture y del formulario, hasta 24 horas antes del comienzo del primer partido del torneo.
                            El primer partido (Senegal vs. Paises Bajos) tiene fecha lunes 21/11/2022 a las 07:00 horas (UTC-03:00) Buenos Aires. Todos los ingresos posteriores no serán tomados en cuenta.
                        </li>
                        <li className="pt-3">3. Puntuación: <br/>
                            Ganas 2 (dos) puntos. Si aciertas el resultado de partido, ya sea elgiendo al ganador o declarando un empate, pero no aciertas el resultado numérico.<br/>
                            Ganas 3 (tres) puntos. Si aciertas el resultado exacto del partido con los goles de cada equipo.<br/>
                            Los partidos que no acierten no suman puntos.
                        </li>
                        <li className="pt-3">4. Para asegurar la transparencia del juego, cada particpante podrá ver los fixtures propio y el de sus rivales en la seccion
                            Galeria. También podrán ver el ranking de posiciones, según los puntajes obtenidos, en la sección Tablas.
                        </li>
                        <li className="pt-3">5. El participante con mayor cantidad de puntos, al finalizar el Mundial Qatar 2022, será declarado ganador. En caso de empate de dos o más jugadores,
                            se proclamará ganador al que tenga mayor cantidad de partidos exactos acertados ( los de 3 puntos obtenidos). Si el empate persiste, se nombrará ganadores a dichos jugadores.
                        </li>
                        <li className="pt-3">Mucha Suerte!</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Landing