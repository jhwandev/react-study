import { useContext, useEffect, useReducer, useState } from 'react';
import './style.scss';
import { FilterActionType, FilterContext, filterReducer, initialState } from './context';

interface FilterProps {
  children?: React.ReactNode;
}

function Filter({ children }: FilterProps) {
  return <div data-component="filter">{children}</div>;
}

/**
 * useToggle Hook
 * 토글 상태를 관리하는 Hook
 * @param initialState
 * @returns
 */
function useToggle(initialState: boolean = false): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState(initialState);

  function toggle() {
    setState(!state);
  }

  return [state, toggle, setState];
}

namespace Filter {
  interface SearchProps {
    placeholder?: string;
  }
  export function Search({ placeholder = '' }: SearchProps) {
    const [, dispatch] = useContext<FilterContext>(FilterContext);
    return (
      <div data-component="filter.search">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch({
              type: FilterActionType.UPDATE_SEARCH_TEXT,
              searchText: e.target.value,
            });
          }}
        />
      </div>
    );
  }
  interface HeaderProps {
    title: string;
    open?: boolean;
    children?: React.ReactNode;
  }
  export function Header({ title, open = false, children }: HeaderProps) {
    const [isOpen, toggle] = useToggle(open);
    const a = useReducer(filterReducer, initialState);
    const [state, dispatch] = a;
    const [parentState, parentDispatch] = useContext<FilterContext>(FilterContext);

    useEffect(() => {
      dispatch({
        type: FilterActionType.ADD_FIND_TEXT,
        findText: [title],
      });
    }, []);

    useEffect(() => {
      parentDispatch({
        type: FilterActionType.ADD_FIND_TEXT,
        findText: [...state.findText, title],
      });
    }, [state.findText]);

    useEffect(() => {
      dispatch({
        type: FilterActionType.UPDATE_SEARCH_TEXT,
        searchText: parentState.searchText,
      });
    }, [parentState.searchText]);


    return (
      <div data-component="filter.header">
        <div className="title-area" onClick={() => toggle()}>
          <h3>{title}</h3>
        </div>
        {isOpen && (
          <>
            <FilterContext.Provider value={a}>
              {children}
              <div style={{ color: 'blue' }}>
                <b>{state.searchText}</b>
              </div>
            </FilterContext.Provider>
          </>
        )}
      </div>
    );
  }

  interface ItemProps {
    label: string;
    suffix?: string;
    value?: string;
    onChange?: (value: boolean) => void;
  }

  export function Item({ label, suffix, value, onChange }: ItemProps) {
    // const [state] = useReducer(filterReducer, initialState);

    const b = useContext<FilterContext>(FilterContext);
    const [parentState] = b;

    return (
      <button
        data-component="filter.item"
        onClick={() => {
          console.log('click');
          onChange && onChange(true);
        }}
      >
        <div style={{ color: 'red' }}>{parentState.findText}</div>
        <p>{label}</p>
        <div>{suffix}</div>
        <div>{value}</div>
      </button>
    );
  }
}

export default Filter;
