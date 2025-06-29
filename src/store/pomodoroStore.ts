import { create } from 'zustand';

type FontFamily = 'kumbh' | 'roboto' | 'mono';
export type TabActive = 'pomodoro' | 'short' | 'long';
type PomodoroInitialState = {
  fontFamilyState: FontFamily;
  setFontFamilyState: (font: FontFamily) => void;
  isSettingClicked: boolean;
  setIsSettingsClicked: (bool: boolean) => void;
  isActiveTab: TabActive;
  setIsActiveTab: (val: TabActive) => void;
  isColorActive: string;
  setIsColorActive: (color: string) => void;
  pomodoroValue: number;
  shortValue: number;
  setShortValue: (val: number) => void;
  setPomodoroValue: (num: number) => void;
  longValue: number;
  setLongValue: (val: number) => void;
  isRunning: boolean;
  setIsRunning: (val: boolean) => void;
  timeLeft: number;
  setTimeLeft: (time: number) => void;
  reset: () => void;
};

export const usePomodoroStore = create<PomodoroInitialState>((set) => ({
  fontFamilyState: 'kumbh' as FontFamily,
  isSettingClicked: false,
  isActiveTab: 'pomodoro',
  isColorActive: 'red',
  timeLeft: 0,
  setTimeLeft: (time: number) => {
    set({
      timeLeft: time,
    });
  },
  pomodoroValue: 25,
  setPomodoroValue: (val: number) => {
    set({
      pomodoroValue: val,
    });
  },
  shortValue: 15,
  setShortValue: (val: number) => {
    set({
      shortValue: val,
    });
  },
  longValue: 30,
  setLongValue: (val: number) => {
    set({
      longValue: val,
    });
  },
  isRunning: false,
  setIsRunning: (val: boolean) => {
    set({
      isRunning: val,
    });
  },
  setIsColorActive: (color: string) => {
    set({
      isColorActive: color,
    });
  },
  setIsActiveTab: (tab: TabActive) => {
    set({
      isActiveTab: tab,
    });
  },
  setIsSettingsClicked: (isClicked: boolean) => {
    set({
      isSettingClicked: isClicked,
    });
  },
  setFontFamilyState: (font: FontFamily) => {
    set({
      fontFamilyState: font,
    });
  },
  reset: () => {
    set({
      isRunning: false,
      pomodoroValue: 25,
      shortValue: 15,
      longValue: 30,
      timeLeft: 0,
    });
  },
}));
