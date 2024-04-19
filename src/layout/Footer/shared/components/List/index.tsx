import { Link } from 'react-router-dom';
import Item from '../../types/item';

interface ListProps<T> {
  styleClass?: string;
  items: Array<T>;
  outerFnc?: (arg: T) => void
}

function List({ styleClass, items, outerFnc }: ListProps<Item>) {
  return (
    <ul className={styleClass}>
      {
        items.map((item) => (
          <li
            key={item.id}
            className="p-[0.5rem] cursor-pointer"
          >
            <Link
              to="/"
              className="w-full block"
              onClick={outerFnc ? (() => outerFnc(item)) : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default List;
