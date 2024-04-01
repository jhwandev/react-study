import { Reducer, createContext, useContext, useReducer } from 'react';

// 컴포넌트 연습 - Counter
// Counter 컴포넌트는 context를 이용해 value를 컨트롤 할 수 있도록 구현해 주세요.
// Counter.Increase, Counter.Decrease는 reducer의 dispatch를 이용하여 클릭 시 증가, 감소 하도록 구현해 주세요
// Counter는 children으로 (value, dispatch) => React.ReactNode형태의 render 함수를 받을 수 있도록 하여 커스텀 Label, Count, Decrease, Increase를 구현해 주세요
// dispatch 함수의 CounterActionType.SET 에서만 value 값을 강제하도록 type을 잘 만들어 주세요.

//===============================================================
// Reducer
//===============================================================

export enum CounterActionType {
  SET,
  INCREASE,
  DECREASE,
}

export type CounterAction = {
  type: CounterActionType;
  value?: number;
};

export const counterReducer: Reducer<number, { type: CounterActionType; value?: number }> = (state, action) => {
  switch (action.type) {
    case CounterActionType.INCREASE:
      return state + 1;
    case CounterActionType.DECREASE:
      return state - 1;
    case CounterActionType.SET:
      return action.value ?? 0;
    default:
      throw new Error();
  }
};

//===============================================================
// Context
//===============================================================

type CounterValueType = number | undefined;

type CounterContextType = [value: CounterValueType, setValue: React.Dispatch<CounterAction>];

const CounterContext = createContext<CounterContextType>([0, () => {}]);

//===============================================================
// Counter
//===============================================================

export interface CounterProps {
  children?:
    | React.ReactNode
    | ((state: number, dispatch: React.Dispatch<{ type: CounterActionType; value?: number | undefined }>) => React.ReactNode);
}

export function Counter({ children }: CounterProps) {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div data-component="counter">
      <CounterContext.Provider value={[state, dispatch]}>
        {children instanceof Function ? children(state, dispatch) : children}
      </CounterContext.Provider>
    </div>
  );
}

//===============================================================
// Counter Label
//===============================================================

Counter.Label = function CounterLabel({ children }: { children: React.ReactNode }) {
  return <div data-component="counter-label">{children}</div>;
};

//===============================================================
// Counter Count
//===============================================================

Counter.Count = function CounterCount() {
  const [state] = useContext(CounterContext);
  return <div data-component="counter-count">count : {state}</div>;
};

//===============================================================
// Counter Buttons
//===============================================================

export interface CounterButtonProps {
  children: React.ReactNode;
}

Counter.Increase = function CounterIncrease({ children }: CounterButtonProps) {
  const [, dispatch] = useContext(CounterContext);
  return (
    <button
      data-component="counter-increase"
      onClick={() => {
        dispatch({ type: CounterActionType.INCREASE });
      }}
    >
      {children}
    </button>
  );
};

Counter.Decrease = function CounterDecrease({ children }: CounterButtonProps) {
  const [, dispatch] = useContext(CounterContext);
  return (
    <button
      data-component="counter-decrease"
      onClick={() => {
        dispatch({ type: CounterActionType.DECREASE });
      }}
    >
      {children}
    </button>
  );
};

export default Counter;
