import { Settings, SettingsModal, Tabs, Timer, Title } from './components';
import { usePomodoroStore } from './store/pomodoroStore';

const App = () => {
  const isSettingClicked = usePomodoroStore((state) => state.isSettingClicked);
  return (
    <main className="bg-blue-850 relative flex min-h-screen flex-col items-center justify-center px-4 md:px-0">
      <Title />
      <Tabs />
      <Timer />
      <Settings />
      {isSettingClicked && <SettingsModal />}
    </main>
  );
};

export default App;
