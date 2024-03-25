// 1. Radio, Radio.Item 컴포넌트를 만들자
// 2. Radio 컴포넌트는 children으로 Radio.Item을 받는다
// 3. Radio 컴포넌트는 props로 defaultValue를 받는다.
// 4. defaultValue에 해당되는 Radio.Item에 하이라이트 CSS를 적용한다(checked)
// 5. 위 기능을 context로 구현
// 6. 과제는 라디오 버튼 클릭까지 가능하도록, 클릭하면 하나만 선택되도록 구현

// 7. + 가능하면 하는 과제:  Checkbox 만들고 독립적으로 Checkbox.Item을 사용할 수 있도록(단, 체크박스는 여러개 선택이 가능하다)
// 7. + 추가추가 과제: Checkbox로 감사준 Checkbox.Item은 Checkbox에 ref를 넣어주는걸로 useImperativeHandle를 통해서 getValues 함수를 쓸 수 있도록 처리

import { createContext, useContext, useEffect, useState } from 'react';
import './style.scss';

interface RadioContextType {
  value: string | undefined;
  setValue: (value: string | undefined) => void;
}

const RadioContext = createContext<RadioContextType>({
  value: '',
  setValue: () => {},
});

interface RadioProps {
  defaultValue?: string | undefined;
  children: React.ReactElement | React.ReactElement[];
  value?: string | undefined;
  onChange?: (value: string | undefined) => void;
}

// value -> 외부에서 value 값을 바꾸겠다, Radio 컴포넌트가 내부에서 set 못하도록 제한하겠다
// onChange -> 내부 state 값이 바뀌면 실행해줌
// defaultValue -> 내부 state를 사용, 기본값 적용하고 싶음
// value, onChange(setter 있음) -> 외부에서 value 값을 바꾸겠다, 다만 내부에서 값이 변경되면 value를 변경 가능하게 권한을 줌
// value, onChange(setter 없음) -> 외부에서 value 값을 바꾸겠다, 값이 변경되면 함수를 실행하겠다.(안해줄 수도 있음)
// onChange, defaultValue -> 내부 state를 사용, 기본값도 적용하고 싶음, 내부 state가 변경되면 어떤 처리를 하고 싶음

function Radio({ defaultValue, value, onChange, children }: RadioProps) {
  const [innerValue, setInnerValue] = useState<typeof defaultValue>(defaultValue);

  // useEffect(() => {
  //   if (defaultValue != undefined) {
  //     setInnerValue(defaultValue);
  //   }
  // }, [defaultValue])

  // value -> 내부 state 사용 안함, value로 대체, value가 변경 되면 onChange 호출
  // onChange -> 내부 state 사용, set함수 호출 시 onChange 호출
  // defaultValue -> 내부 state에 defaultValue 값이 세팅됨
  // value, onChange -> value 값이 바뀌면 onChange 호출(안해줌)
  // onChange, defaultValue -> 내부 state 사용, state 변경 시 onChange 호출, defaultValue 기본값 적용

  const selectedValue = value != undefined ? value : innerValue;
  const setSelectedValue = (v: string | undefined) => {
    // if (value === undefined && onChange !== undefined) {
    //   onChange(v);
    //   return;
    // }
    setInnerValue(v);
    onChange && onChange(v);
  };

  // useEffect(() => {
  //   onChange && onChange(value);
  // }, [value])

  // useEffect(() => {
  //   setSelectedValue(value);
  // }, [value]);

  // useEffect(() => {
  //   setValue && setValue(selectedValue);
  // }, [selectedValue]);

  return (
    <div data-component="radio">
      <RadioContext.Provider value={{ value: selectedValue, setValue: setSelectedValue }}>{children}</RadioContext.Provider>
    </div>
  );
}

namespace Radio {
  export interface ItemProps {
    value: string;
    children: React.ReactNode;
  }

  export function Item({ value, children }: ItemProps) {
    const { value: selectedValue, setValue: setSelectedValue } = useContext(RadioContext);
    return (
      <label data-component="radio.item">
        <input
          type="radio"
          value={value}
          checked={selectedValue === value}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        />
        <span>{children}</span>
      </label>
    );
  }
}

export default Radio;
