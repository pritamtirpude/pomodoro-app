import { Color } from '../../components';
import { colorList } from '../../lib/colorUtil';

const ColorSettings = () => {
  return (
    <div className="my-6 flex flex-col items-center justify-center gap-y-4 md:flex-row md:justify-between">
      <span className="text-kumbh-setting-preset-three font-bold uppercase">
        Color
      </span>

      <div className="flex items-center gap-x-4">
        {colorList.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorSettings;
