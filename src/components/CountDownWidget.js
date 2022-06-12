import { useEffect, useRef, useState } from "react";

const CountDownWidget = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    let interval = useRef();

    const startTimer = () => {
        const fechaLimite = 'November 21 2022 06:59:59'
        const countdownDate = new Date(fechaLimite).getTime();
        interval.current = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24))/ (1000*60*60)).toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});
            const minutes = Math.floor((distance % (1000*60*60)) / (1000*60)).toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});
            const seconds = Math.floor((distance % (1000*60)) / 1000).toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});

            if (distance < 0){
                clearInterval(interval.current)
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect (()=>{
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <section className="container__layout">
            <section className="timer">
                <div>
                    <h3>CUANTO FALTA PARA EL MUNDIAL</h3>
                </div>
                <div className="timer__cd border">
                    <section>
                        <p>{timerDays}</p>
                        <p className="timer__cd-tag">Días</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p className="timer__cd-tag">Horas</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p className="timer__cd-tag">Minutos</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p className="text-danger">{timerSeconds}</p>
                        <p className="timer__cd-tag">Segundos</p>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default CountDownWidget