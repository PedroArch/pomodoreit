import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


function Profile() {

  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedroarch.png" alt="Pedro Carvalho" />
      <div>
        <strong>Pedro Carvalho</strong>
        <p>
          <img src="/icons/level.svg" alt="level up"/>
          Level {level}
          </p>
      </div>    
    </div>
  )
}

export default Profile
