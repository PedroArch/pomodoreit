import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {

  const hasActiveChallenge = true;
  
  return (
    <div className={styles.challengBoxContainer}>

      {hasActiveChallenge ? (
          <div className={styles.challengeActive}>
            <header>
              Ganhe 400xp
            </header>
            
            <main>
              <img src="/icons/body.svg" alt="body" />
              <strong>Novo desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos.</p>
            </main>
            
            <footer>
              <button 
                type="button"
                className={styles.challengeFailed}
              >
                  Falhei
              </button>
              <button 
                type="button"
                className={styles.challengeSucceeded}
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
