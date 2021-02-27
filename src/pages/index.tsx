import Head from 'next/head'
import Profile from '../components/Profile';
import ExperienceBar from '../components/ExperienceBar';
import Countdown from '../components/Countdown';
import CompletedChallenges from '../components/CompletedChallenges';
import ChallengeBox from '../components/ChallengeBox';


import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home | pomodore it!</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div className={styles.leftContainer}>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div className={styles.rightContainer}>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>

    </div>
  )
}
