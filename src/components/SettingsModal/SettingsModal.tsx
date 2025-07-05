import { motion, type TargetAndTransition } from 'motion/react';
import { useEffect, useRef } from 'react';
import {
  ColorSettings,
  FontSettings,
  Separator,
  TimerSettings,
} from '../../components';
import { usePomodoroStore } from '../../store/pomodoroStore';

const dialogOpenState: TargetAndTransition = {
  opacity: 1,
  filter: 'blur(0px)',
  rotateX: 0,
  rotateY: 0,
  z: 0,
  transition: {
    delay: 0.2,
    duration: 0.5,
    ease: [0.17, 0.67, 0.51, 1],
    opacity: {
      delay: 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const dialogInitialState: TargetAndTransition = {
  opacity: 0,
  filter: 'blur(10px)',
  z: -100,
  rotateY: 25,
  rotateX: 5,
  transformPerspective: 500,
  transition: {
    duration: 0.3,
    ease: [0.67, 0.17, 0.62, 0.64],
  },
};

const SettingsModal = () => {
  const setIsSettingsClicked = usePomodoroStore(
    (state) => state.setIsSettingsClicked
  );
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.showModal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => ref?.current?.close();
  }, [ref]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsSettingsClicked(false)}
      className="fixed top-0 right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-center bg-blue-950 px-6 md:px-0"
    >
      <motion.dialog
        initial={dialogInitialState}
        animate={dialogOpenState}
        exit={dialogInitialState}
        style={{ transformPerspective: 500 }}
        open={true}
        className="relative w-full rounded-2xl bg-white md:w-[540px]"
        onClick={(e) => e.stopPropagation()}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => setIsSettingsClicked(false)}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-9 md:py-8">
          <h2 className="text-kumbh-setting-preset-one font-bold">Settings</h2>
          <img
            onClick={() => setIsSettingsClicked(false)}
            className="cursor-pointer"
            src="/assets/icon-close.svg"
            alt="icon close"
          />
        </div>
        <Separator />
        {/* Settings */}
        <div className="px-6 py-4 md:px-9 md:py-8">
          {/* Time */}
          <TimerSettings />
          <Separator />
          {/* Font */}
          <FontSettings />
          <Separator />
          {/* Color */}
          <ColorSettings />
        </div>

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => setIsSettingsClicked(false)}
            className="text-kumbh-setting-preset-two cursor-pointer rounded-full bg-red-400 px-11 py-4 font-bold text-white"
          >
            Apply
          </button>
        </div>
      </motion.dialog>
    </motion.div>
  );
};

export default SettingsModal;
