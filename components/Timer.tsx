import styles from '../styles/Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
  key: any;
  duration: number;
  timesUp: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={150}
        isPlaying
        onComplete={props.timesUp}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}