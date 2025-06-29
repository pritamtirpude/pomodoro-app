import { usePomodoroStore } from '../../store/pomodoroStore';

const Settings = () => {
  const { setIsSettingsClicked } = usePomodoroStore();
  return (
    <div className="mt-20 md:mt-36 lg:mt-16">
      <img
        onClick={() => setIsSettingsClicked(true)}
        className="cursor-pointer"
        src="/assets/icon-settings.svg"
        alt="settings icon"
      />
    </div>
  );
};

export default Settings;
