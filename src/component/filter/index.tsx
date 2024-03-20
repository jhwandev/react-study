
interface FilterProps {
  children?: React.ReactNode;
}

function Filter({ children }: FilterProps) {
  return <div data-component="filter">{children}</div>;
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
}

interface HeaderProps {
  title: string;
  open?: boolean;

  children?: React.ReactNode;
}
export function Header({ title, open = false, children }: HeaderProps) {
  return (
    <div data-component="filter.header">
      <h3>{title}</h3>
      {open && <div>{children}</div>}
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

export default Filter;
