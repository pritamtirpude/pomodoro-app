import { usePomodoroStore } from '../../store/pomodoroStore';

export default function CircularProgressBar() {
  const timeLeft = usePomodoroStore((state) => state.timeLeft);
  const isActiveTab = usePomodoroStore((state) => state.isActiveTab);
  const pomodoroValue = usePomodoroStore((state) => state.pomodoroValue);
  const shortValue = usePomodoroStore((state) => state.shortValue);
  const longValue = usePomodoroStore((state) => state.longValue);
  const isColorActive = usePomodoroStore((state) => state.isColorActive);

  return (
    <svg width="100%" height="100%" viewBox="0 0 366 366" className="block">
      <circle
        cx="183"
        cy="183"
        r="170"
        fill="none"
        stroke={
          isColorActive === 'red'
            ? '#f87070'
            : isColorActive === 'cyan'
              ? '#70f3f8'
              : '#d881f8'
        }
        strokeWidth="12"
        strokeDasharray={2 * Math.PI * 170}
        strokeDashoffset={
          (1 -
            timeLeft /
              ((isActiveTab === 'pomodoro'
                ? pomodoroValue
                : isActiveTab === 'short'
                  ? shortValue
                  : longValue) * 60 || 1)) *
          2 *
          Math.PI *
          170
        }
        style={{ transition: 'stroke-dashoffset 1s linear' }}
        strokeLinecap="round"
        transform="rotate(-90 183 183)"
      />
    </svg>
  );
}
