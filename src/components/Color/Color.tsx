import { cn } from '../../lib/utils';
import { usePomodoroStore } from '../../store/pomodoroStore';

type ColorPropsType = {
  color: {
    id: number;
    color: string;
    value: string;
  };
};

const Color = ({ color }: ColorPropsType) => {
  const setIsColorActive = usePomodoroStore((state) => state.setIsColorActive);
  const isColorActive = usePomodoroStore((state) => state.isColorActive);
  return (
    <div
      onClick={() => setIsColorActive(color.value)}
      className={cn(
        'flex size-10 cursor-pointer flex-col items-center justify-center rounded-full',
        color.color
      )}
    >
      {isColorActive === color.value && (
        <img src="/assets/check.svg" alt="icon check" />
      )}
    </div>
  );
};

export default Color;
