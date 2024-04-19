import { useCallback, useState } from 'react';
import Item from '../../shared/types/item';
import List from '../../shared/components/List';

const languageList: Array<Item> = [
  {
    id: 0,
    name: 'English',
  },
  {
    id: 1,
    name: '繁體中文',
  },
];

function LanguageList() {
  const [isListShow, setIsListShow] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Item | null>(languageList[0]);
  const setSelectedItemAndCloseList = useCallback((emittedItem: Item) => {
    setIsListShow(false);
    setSelectedLanguage(emittedItem);
  }, []);

  return (
    <div className="relative">
      <List
        items={languageList}
        styleClass={
          [
            'rounded-[0.5rem] absolute left-[0] -top-[0.5rem] right-[0] translate-y-[-100%] bg-white-default shadow-[0_0_0.25rem_0_rgba(0,0,0,0.3)]',
            isListShow ? 'block' : 'hidden',
          ].join(' ')
        }
        outerFnc={setSelectedItemAndCloseList}
      />
      <button
        type="button"
        className="flex items-center text-black mr-[0.25rem]"
        onClick={() => setIsListShow((prev) => !prev)}
      >
        <span className="material-symbols-outlined fontIconFill mr-[0.25rem]">
          language
        </span>
        <span className="text-grey">{!!selectedLanguage && selectedLanguage.name}</span>
        <span className="material-symbols-outlined fontIconFill">
          expand_more
        </span>
      </button>
    </div>
  );
}

export default LanguageList;
