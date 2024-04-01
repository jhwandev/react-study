import Counter, { CounterActionType } from '../../component/counter';

export default function TestPage3() {
  const CounterLabel = ({ children }: { children: React.ReactNode }) => {
    return <div data-component="counter-label">{children}</div>;
  };

  interface CounterCountProps {
    value: number;
    onChange: (value: number) => void;
  }
  const CounterCount = ({ value, onChange }: CounterCountProps) => {
    return <div data-component="counter-count">count : {value}</div>;
  };

  interface CounterItemProps {
    children: React.ReactNode;
    onClick: () => void;
  }
  const CounterDecrease = ({ children, onClick }: CounterItemProps) => {
    return (
      <button data-component="counter-decrease" onClick={onClick}>
        {children}
      </button>
    );
  };
  const CounterIncrease = ({ children, onClick }: CounterItemProps) => {
    return (
      <button data-component="counter-decrease" onClick={onClick}>
        {children}
      </button>
    );
  };

  return (
    <div data-page="test-page3">
      <>
        <Counter>
          <Counter.Label>라벨</Counter.Label>
          <Counter.Count />
          <Counter.Decrease>-</Counter.Decrease>
          <Counter.Increase>+</Counter.Increase>
        </Counter>

        <Counter>
          {(value, dispatch) => {
            return (
              <>
                <CounterLabel>커스텀 라벨</CounterLabel>
                <CounterCount
                  value={value}
                  onChange={(v) =>
                    dispatch({
                      type: CounterActionType.SET,
                      value: v,
                    })
                  }
                />
                <CounterDecrease
                  onClick={() =>
                    dispatch({
                      type: CounterActionType.INCREASE,
                    })
                  }
                >
                  +
                </CounterDecrease>
                <CounterIncrease
                  onClick={() =>
                    dispatch({
                      type: CounterActionType.DECREASE,
                    })
                  }
                >
                  -
                </CounterIncrease>
              </>
            );
          }}
        </Counter>
      </>
    </div>
  );
}
