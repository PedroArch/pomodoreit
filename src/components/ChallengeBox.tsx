import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext)
  

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengBoxContainer}>

      {activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>
              {`Ganhe ${activeChallenge.amount}xp`}
            </header>
            
            <main>
              <img src={`/icons/${activeChallenge.type}.svg`} alt="body" />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            
            <footer>
              <button 
                type="button"
                className={styles.challengeFailed}
                onClick={handleChallengeFailed}
              >
                  Falhei
              </button>
              <button 
                type="button"
                className={styles.challengeSucceeded}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
            <img src="/icons/level-up.svg" alt="level-up" />
            Avance de level completando desafios.
            </p>
          </div>
      )}

    </div>
  )
}

export default ChallengeBox
