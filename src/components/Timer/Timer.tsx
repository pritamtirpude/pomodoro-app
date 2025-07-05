import { AnimateNumber } from 'motion-plus/react';
import { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { usePomodoroStore } from '../../store/pomodoroStore';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';

const Timer = () => {
  const pomodoroValue = usePomodoroStore((state) => state.pomodoroValue);
  const shortValue = usePomodoroStore((state) => state.shortValue);
  const longValue = usePomodoroStore((state) => state.longValue);
  const isRunning = usePomodoroStore((state) => state.isRunning);
  const setIsRunning = usePomodoroStore((state) => state.setIsRunning);
  const isActiveTab = usePomodoroStore((state) => state.isActiveTab);
  const timeLeft = usePomodoroStore((state) => state.timeLeft);
  const setTimeLeft = usePomodoroStore((state) => state.setTimeLeft);
  const fontFamily = usePomodoroStore((state) => state.fontFamilyState);

  useEffect(() => {
    if (isActiveTab === 'pomodoro') {
      setTimeLeft(pomodoroValue * 60);
    }
    if (isActiveTab === 'short') {
      setTimeLeft(shortValue * 60);
    }

    if (isActiveTab === 'long') {
      setTimeLeft(longValue * 60);
    }
  }, [isActiveTab, pomodoroValue, shortValue, longValue, setTimeLeft]);

  useEffect(() => {
    if (timeLeft === 1 && isActiveTab === 'pomodoro') {
      setIsRunning(false);
      setTimeLeft(pomodoroValue * 60);
    }

    if (timeLeft === 1 && isActiveTab === 'short') {
      setIsRunning(false);
      setTimeLeft(shortValue * 60);
    }

    if (timeLeft === 1 && isActiveTab === 'long') {
      setIsRunning(false);
      setTimeLeft(longValue * 60);
    }
  }, [
    timeLeft,
    isActiveTab,
    pomodoroValue,
    shortValue,
    longValue,
    setIsRunning,
    setTimeLeft,
  ]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft > 1 ? timeLeft - 1 : 0);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActiveTab, isRunning, setIsRunning, timeLeft, setTimeLeft]);

  const handleTimer = () => {
    setIsRunning(!isRunning);
  };

  const pad = (n: number | undefined) => String(n ?? 0).padStart(2, '0');

  return (
    <div className="mt-12 md:mt-28 lg:mt-9">
      <div className="bg-gradient circle-shadow size-[300px] rounded-full p-4 md:size-[410px] md:p-5">
        <div className="relative flex size-[267px] flex-col items-center justify-center rounded-full bg-blue-900 p-2.5 md:size-[366px] md:p-3.5">
          <div className="absolute inset-0 z-10 flex items-center justify-center p-2.5 md:p-3.5">
            <CircularProgressBar />
          </div>
          <div className="z-20 flex flex-col items-center justify-center gap-y-2">
            <div
              className={cn(
                'flex flex-1 items-center justify-center text-blue-100'
              )}
            >
              <AnimateNumber
                className={cn(
                  'text-kumbh-mobile-lg md:text-kumbh-desktop-lg font-bold',
                  fontFamily === 'roboto' &&
                    'text-roboto-mobile-lg font-roboto md:text-roboto-desktop-lg font-bold',
                  fontFamily === 'mono' &&
                    'md:text-mono-desktop-lg text-mono-mobile-lg font-mono font-bold'
                )}
                format={{
                  minimumIntegerDigits: 2,
                }}
              >
                {timeLeft && pad(Math.floor(timeLeft / 60))}
              </AnimateNumber>
              <div
                className={cn(
                  'text-kumbh-mobile-lg md:text-kumbh-desktop-lg font-bold',
                  fontFamily === 'roboto' &&
                    'text-roboto-mobile-lg font-roboto md:text-roboto-desktop-lg font-bold',
                  fontFamily === 'mono' &&
                    'md:text-mono-desktop-lg text-mono-mobile-lg font-mono font-bold'
                )}
              >
                :
              </div>
              <AnimateNumber
                className={cn(
                  'text-kumbh-mobile-lg md:text-kumbh-desktop-lg font-bold',
                  fontFamily === 'roboto' &&
                    'text-roboto-mobile-lg font-roboto md:text-roboto-desktop-lg font-bold',
                  fontFamily === 'mono' &&
                    'md:text-mono-desktop-lg text-mono-mobile-lg font-mono font-bold'
                )}
                format={{
                  minimumIntegerDigits: 2,
                }}
              >
                {timeLeft && pad(timeLeft % 60)}
              </AnimateNumber>
            </div>

            <div
              className={cn(
                'font-kumbh text-kumbh-desktop-md',
                fontFamily === 'roboto' && 'font-roboto text-roboto-desktop-md',
                fontFamily === 'mono' && 'text-mono-desktop-md font-mono'
              )}
            >
              <button
                onClick={handleTimer}
                className="cursor-pointer font-bold text-blue-100 uppercase"
              >
                {isRunning ? 'pause' : 'start'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
