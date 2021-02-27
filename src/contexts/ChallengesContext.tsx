import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challanges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number; 
  currentExperience: number; 
  challengesCompleted: number; 
  activeChallenge: Challenge; 
  experienceToNextLevel: number;
  startNewChallenge: () => void; 
  levelUp: () => void;
  resetChallenge: () => void;
  completedChallenge: () => void;
}


interface ChallengeProviderProps {
  children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({children}: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2); 

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];


    new Audio("/notification.mp3").play();

    if (Notification.permission === 'granted') {
      new Notification("Novo Desafio 🏃🏻", {
        body: `Valendo ${challenge.amount}xp`
      })
    }

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge
    
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp()
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }
  
  return (
    <ChallengeContext.Provider
     value={{
      level, 
      currentExperience, 
      challengesCompleted, 
      activeChallenge,
      experienceToNextLevel,
      startNewChallenge, 
      levelUp,
      resetChallenge,
      completedChallenge,
    }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}