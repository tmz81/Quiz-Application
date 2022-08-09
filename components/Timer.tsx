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
        size={120}
        isPlaying
        onComplete={props.timesUp}
        colors={[
          '#BCE596',
          '#F7B801',
          '#ED827A',
        ]}
        colorsTime={[1, 2, 3]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}