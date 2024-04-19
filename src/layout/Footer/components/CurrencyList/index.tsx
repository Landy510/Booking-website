import { useCallback, useState } from 'react';

import Item from '../../shared/types/item';
import List from '../../shared/components/List';

const currencyList: Array<Item> = [
  {
    id: 0,
    name: 'TWD',
  },
  {
    id: 1,
    name: 'USD',
  },
];

function CurrencyList() {
  const [isListShow, setIsListShow] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Item | null>(currencyList[0]);

  const setSelectedItemAndCloseList = useCallback((emittedItem: Item): void => {
    setSelectedCurrency(emittedItem);
    setIsListShow(false);
  }, []);

  return (
    <div className="relative">
      <List
        items={currencyList}
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
        className="flex items-center"
        onClick={() => setIsListShow((prev) => !prev)}
      >
        <span className="material-symbols-outlined fontIconFill mr-[0.25rem]">attach_money</span>
        <span className="text-grey">{!!selectedCurrency && selectedCurrency.name}</span>
        <span className="material-symbols-outlined fontIconFill">expand_more</span>
      </button>
    </div>
  );
}

export default CurrencyList;
