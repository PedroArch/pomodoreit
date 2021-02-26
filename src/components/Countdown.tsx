import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { FiCheck } from 'react-icons/fi'

function Countdown() {

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')
  const [hasFinished, setHasFinished] = useState(false);

  let countdownTimeout: NodeJS.Timeout

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false);
    setTime(0.05 * 60)
  }


  useEffect( () => {
    if (time > 0 && isActive) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if (isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
    }
  }, [time, isActive])

  


  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
          >     
              Cliclo Encerrado
              <div className={styles.countdownCheck}>
                <FiCheck size={15} color={'rgba(255, 255, 255)'} />
              </div>
        </button>
      ) : (
        <>
        {isActive ? 
          (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
              >
              Abandonar Ciclo 

            </button>
          ) 
          : 
          (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar Ciclo
          </button>
          )}
        </>
      )}


      
     
    </div>
  )
}

export default Countdown
