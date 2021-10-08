import React from 'react';
import styles from 'components/Timer/styles.module.css'

import { CountdownCircleTimer, CountdownCircleTimerProps} from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps: Omit<CountdownCircleTimerProps, 'duration'> = {
  isPlaying: true,
  size: 52,
  strokeWidth: 3,
  trailStrokeWidth: 1,
  colors: [["#FFF", 0.5], ["#6A7469", 0.5]],
  isLinearGradient: true,
  gradientUniqueKey: '1'
};

const renderTime = (dimension, time) => {
  return (
    <div>
      <div className={styles.time}>{time}</div>
      <div className={styles.dimension}>{dimension}</div>
    </div>
  );
};

const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Timer = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="flex mt-4">
      <div className="mr-2">
        <CountdownCircleTimer
          {...timerProps}
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(daysDuration - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>

      <div className="mx-2">
        <CountdownCircleTimer
          {...timerProps}
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > hourSeconds, 0]}
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>

      <div className="ml-2">
        <CountdownCircleTimer
          {...timerProps}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > minuteSeconds, 0]}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default Timer;