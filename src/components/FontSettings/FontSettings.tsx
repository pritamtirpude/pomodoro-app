import { cn } from '../../lib/utils';
import { usePomodoroStore } from '../../store/pomodoroStore';

const FontSettings = () => {
  const fontFamilyState = usePomodoroStore((state) => state.fontFamilyState);
  const setFontFamilyState = usePomodoroStore(
    (state) => state.setFontFamilyState
  );

  return (
    <div className="my-6 flex flex-col items-center justify-center gap-y-4 md:flex-row md:justify-between">
      <span className="text-kumbh-setting-preset-three font-bold uppercase">
        Font
      </span>

      <div className="flex items-center gap-x-4">
        <div
          onClick={() => setFontFamilyState('kumbh')}
          className={cn(
            'text-blue-850/72 flex size-10 cursor-pointer flex-col items-center justify-center rounded-full bg-blue-50 transition-colors duration-500',
            fontFamilyState === 'kumbh' && 'bg-blue-900 text-white'
          )}
        >
          <span className="text-roboto-setting-preset-one font-kumbh font-bold">
            Aa
          </span>
        </div>
        <div
          onClick={() => setFontFamilyState('roboto')}
          className={cn(
            'text-blue-850/72 flex size-10 cursor-pointer flex-col items-center justify-center rounded-full bg-blue-50 transition-colors duration-500',
            fontFamilyState === 'roboto' && 'bg-blue-900 text-white'
          )}
        >
          <span className="text-roboto-setting-preset-one font-roboto font-bold">
            Aa
          </span>
        </div>
        <div
          onClick={() => setFontFamilyState('mono')}
          className={cn(
            'text-blue-850/72 flex size-10 cursor-pointer flex-col items-center justify-center rounded-full bg-blue-50 transition-colors duration-500',
            fontFamilyState === 'mono' && 'bg-blue-900 text-white'
          )}
        >
          <span className="text-roboto-setting-preset-one font-mono font-bold">
            Aa
          </span>
        </div>
      </div>
    </div>
  );
};

export default FontSettings;
