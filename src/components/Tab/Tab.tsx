import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { usePomodoroStore, type TabActive } from '../../store/pomodoroStore';

type TabTypeProps = {
  tab: {
    id: number;
    label: string;
    value: string;
  };
};

const Tab = ({ tab }: TabTypeProps) => {
  const fontFamilyState = usePomodoroStore((state) => state.fontFamilyState);
  const isActiveTab = usePomodoroStore((state) => state.isActiveTab);
  const setIsActiveTab = usePomodoroStore((state) => state.setIsActiveTab);
  const isColorActive = usePomodoroStore((state) => state.isColorActive);
  const setIsRunning = usePomodoroStore((state) => state.setIsRunning);

  return (
    <motion.ul
      layout
      onClick={() => {
        setIsActiveTab(tab.value as TabActive);
        setIsRunning(false);
      }}
      className={cn(
        'relative z-20 flex cursor-pointer flex-col items-center justify-center rounded-full p-2 text-blue-100/40 md:px-6 md:py-4'
      )}
    >
      <motion.li
        layout
        className={cn(
          'md:text-kumbh-desktop-sm text-kumbh-mobile-sm font-kumbh font-bold',
          fontFamilyState === 'roboto' &&
            'font-roboto text-roboto-mobile-sm md:text-roboto-desktop-sm font-bold',
          fontFamilyState === 'mono' &&
            'md:text-mono-desktop-sm text-mono-mobile-sm font-mono font-bold',
          isActiveTab === tab.value && 'text-blue-850'
        )}
      >
        {tab.label}
      </motion.li>
      {isActiveTab === tab.value && (
        <motion.div
          layoutId="indicator"
          className={cn(
            'absolute -z-10 size-full rounded-full',
            isColorActive === 'red' && 'bg-red-400',
            isColorActive === 'cyan' && 'bg-cyan-300',
            isColorActive === 'purple' && 'bg-purple-400'
          )}
        />
      )}
    </motion.ul>
  );
};

export default Tab;
