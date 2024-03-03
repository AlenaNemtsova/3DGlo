const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(); //переводим в таймстамп время дедлайна
        let dateNow = new Date().getTime(); //таймстамп текущего времени

        let timeRemaining = (dateStop - dateNow) / 1000; //мс в секунды
        let days = Math.floor(timeRemaining / 60 / 60 / 24); //в днях
        let hours = Math.floor((timeRemaining / 60 / 60) % 24); //переводим сек в часы, получаем остаток от дней в часах
        let minutes = Math.floor((timeRemaining / 60) % 60); //остаток минут
        let seconds = Math.floor((timeRemaining) % 60); //остаток секуднд
        // console.log(days);

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const addZero = (timerElement) => {
        if (timerElement < 10) {
            timerElement = `0${timerElement}`;
        }
        return timerElement;
    }

    // //реализация через setTimeout
    // const updateClock = () => {
    //     let getTime = getTimeRemaining();

    //     timerHours.textContent = getTime.hours;
    //     timerMinutes.textContent = getTime.minutes;
    //     timerSeconds.textContent = getTime.seconds;
    //     if (getTime.timeRemaining > 0) {
    //         setTimeout(updateClock, 1000)
    //     }
    // }

    // updateClock();


    //реализация через setInterval
    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.timeRemaining > 0) {
            timerHours.textContent = addZero(getTime.hours);
            timerMinutes.textContent = addZero(getTime.minutes);
            timerSeconds.textContent = addZero(getTime.seconds);
        } else {
            clearInterval(idInterval);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    let idInterval = setInterval(updateClock, 1000)


}

export default timer;
