import { useState } from "react";
import './style.scss'

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
    return (
      <div data-component="filter.search">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            console.log(e.target.value);
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

    return (
      <div data-component="filter.header">
        <div className="title-area" onClick={()=>toggle()}>
          <h3>{title}</h3>
        </div>
        {isOpen && children}
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
    return (
      <button
        data-component="filter.item"
        onClick={() => {
          console.log('click');
          onChange && onChange(true);
        }}
      >
        <p>{label}</p>
        <div>{suffix}</div>
        <div>{value}</div>
      </button>
    );
  }
}

export default Filter;
