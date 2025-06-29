import { Tab } from '../../components';
import { tabsList } from '../../lib/tabsUtil';

const Tabs = () => {
  return (
    <div className="mt-10 flex items-center justify-evenly rounded-full bg-blue-900 px-2.5 py-2 md:mt-14">
      {tabsList.map((item) => (
        <Tab key={item.id} tab={item} />
      ))}
    </div>
  );
};

export default Tabs;
