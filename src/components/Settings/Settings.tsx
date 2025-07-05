import { motion } from 'motion/react';
import { usePomodoroStore } from '../../store/pomodoroStore';

const Settings = () => {
  const setIsSettingsClicked = usePomodoroStore(
    (state) => state.setIsSettingsClicked
  );
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className="mt-20 md:mt-36 lg:mt-16"
    >
      <img
        onClick={() => setIsSettingsClicked(true)}
        className="cursor-pointer"
        src="/assets/icon-settings.svg"
        alt="settings icon"
      />
    </motion.div>
  );
};

export default Settings;
