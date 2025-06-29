import { usePomodoroStore } from '../../store/pomodoroStore';

const TimerSettings = () => {
  const pomodoroValue = usePomodoroStore((state) => state.pomodoroValue);
  const setPomodoroValue = usePomodoroStore((state) => state.setPomodoroValue);
  const shortValue = usePomodoroStore((state) => state.shortValue);
  const setShortValue = usePomodoroStore((state) => state.setShortValue);
  const longValue = usePomodoroStore((state) => state.longValue);
  const setLongValue = usePomodoroStore((state) => state.setLongValue);

  return (
    <div className="mb-6 flex flex-col gap-y-4">
      <div className="flex items-center justify-center md:items-start md:justify-start">
        <span className="text-kumbh-setting-preset-three font-bold uppercase">
          Time (Minutes)
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-6">
        <div className="flex w-full flex-row items-center justify-between md:flex-col md:items-stretch md:justify-normal md:gap-y-2">
          <span className="text-kumbh-setting-preset-four text-blue-850/40 flex-1 font-bold">
            pomodoro
          </span>
          <input
            type="number"
            className="text-kumbh-setting-preset-three flex-1 rounded-md bg-blue-50 p-4 font-bold focus:outline-0"
            value={pomodoroValue}
            min={1}
            max={60}
            onChange={(e) => {
              const value = e.target.value.slice(0, 2); // Only allow 2 digits
              setPomodoroValue(Number(value));
            }}
          />
        </div>

        <div className="flex w-full flex-row items-center justify-between gap-y-2 md:flex-col md:items-stretch md:justify-normal">
          <span className="text-kumbh-setting-preset-four text-blue-850/40 flex-1 font-bold">
            short break
          </span>
          <input
            type="number"
            className="text-kumbh-setting-preset-three flex-1 rounded-md bg-blue-50 p-4 font-bold focus:outline-0"
            min={1}
            max={60}
            value={shortValue}
            onChange={(e) => setShortValue(Number(e.target.value))}
          />
        </div>

        <div className="flex w-full flex-row items-center justify-between gap-y-2 md:flex-col md:items-stretch md:justify-normal">
          <span className="text-kumbh-setting-preset-four text-blue-850/40 flex-1 font-bold">
            long break
          </span>
          <input
            type="number"
            className="text-kumbh-setting-preset-three flex-1 rounded-md bg-blue-50 p-4 font-bold focus:outline-0"
            min={1}
            max={60}
            value={longValue}
            onChange={(e) => setLongValue(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
