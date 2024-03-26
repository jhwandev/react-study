// 7. + 가능하면 하는 과제:  Checkbox 만들고 독립적으로 Checkbox.Item을 사용할 수 있도록(단, 체크박스는 여러개 선택이 가능하다)
// 7. + 추가추가 과제: Checkbox로 감사준 Checkbox.Item은 Checkbox에 ref를 넣어주는걸로 useImperativeHandle를 통해서 getValues 함수를 쓸 수 있도록 처리

import { Reducer, createContext, useContext, useEffect, useReducer } from 'react';

//===============================================================
// Reducer
//===============================================================

export enum CheckboxActionType {
  CHECKED,
  UNCHECKED,
  TOGGLE,
}

export type CheckboxAction = {
  type: CheckboxActionType;
  value: string;
};

export const checkboxReducer: Reducer<CheckboxValueType, CheckboxAction> = (state, action) => {
  switch (action.type) {
    case CheckboxActionType.CHECKED: {
      const { value } = action;
      const newArr = state == undefined ? [] : [...new Set([...state, value])];

      return newArr;
    }

    case CheckboxActionType.UNCHECKED: {
      const { value } = action;
      const newArr = state?.filter((v) => v !== value);
      return newArr;
    }

    case CheckboxActionType.TOGGLE:
      const { value } = action;

      if (state == undefined) return;

      if (value && state.includes(value)) {
        return checkboxReducer(state, { type: CheckboxActionType.UNCHECKED, value });
      } else {
        return checkboxReducer(state, { type: CheckboxActionType.CHECKED, value });
      }
    default:
      throw new Error();
  }
};

//===============================================================
// Context
//===============================================================

type CheckboxValueType = string[] | undefined;

type CheckboxContextType = [value: CheckboxValueType, setValue: React.Dispatch<CheckboxAction>];

const CheckboxContext = createContext<CheckboxContextType>([[], () => {}]);

//===============================================================
// Checkbox(group)
//===============================================================

interface CheckboxProps {
  defaultValue?: string[] | undefined;
  value?: string[] | undefined;
  onChange?: (value: string[] | undefined) => void;
  children: React.ReactNode;
}

function Checkbox({ defaultValue, value, children, onChange }: CheckboxProps) {
  const [innerValue, dispatch] = useReducer(checkboxReducer, defaultValue ?? []);
  const selectedValue = value != undefined ? value : innerValue;

  useEffect(() => {
    onChange && onChange(selectedValue);
  }, [selectedValue]);

  return (
    <div data-component="checkbox">
      <CheckboxContext.Provider value={[selectedValue, dispatch]}>{children}</CheckboxContext.Provider>
    </div>
  );
}

//===============================================================
// Checkbox Item
//===============================================================

export interface CheckboxItemProps {
  value: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

Checkbox.Item = function CheckboxItem({ value: outerValue, onChange, children }: CheckboxItemProps) {
  const [value, dispatch] = useContext(CheckboxContext);

  const checkbox = (
    <input
      type="checkbox"
      checked={value?.includes(outerValue)}
      value={outerValue}
      onChange={(e) => {
        dispatch({
          type: CheckboxActionType.TOGGLE,
          value: e.target.value,
        });
        onChange && onChange(e.target.value);
      }}
    />
  );

  return (
    <div data-component="checkbox.item">
      {children ? (
        <label>
          {checkbox}
          <p>{children}</p>
        </label>
      ) : (
        checkbox
      )}
    </div>
  );
};

export default Checkbox;
