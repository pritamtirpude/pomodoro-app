import {
  ColorSettings,
  FontSettings,
  Separator,
  TimerSettings,
} from '../../components';
import { usePomodoroStore } from '../../store/pomodoroStore';

const SettingsModal = () => {
  const { setIsSettingsClicked } = usePomodoroStore();
  return (
    <div
      onClick={() => setIsSettingsClicked(false)}
      className="fixed top-0 right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-center bg-blue-950 px-6 md:px-0"
    >
      <div
        className="relative w-full rounded-2xl bg-white md:w-[540px]"
        onClick={(e) => e.stopPropagation()}
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
      </div>
    </div>
  );
};

export default SettingsModal;
