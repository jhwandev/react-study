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
  selectedValue: string | undefined;
  setSelectedValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const RadioContext = createContext<RadioContextType>({
  selectedValue: '',
  setSelectedValue: () => {},
});

interface RadioProps {
  value?: string | undefined;
  setValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  children: React.ReactElement | React.ReactElement[];
}

function Radio({ value, setValue, children }: RadioProps) {
  const [selectedValue, setSelectedValue] = useState<typeof value>(value || '');

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    setValue && setValue(selectedValue);
  }, [selectedValue]);

  return (
    <div data-component="radio">
      <RadioContext.Provider value={{ selectedValue, setSelectedValue }}>{children}</RadioContext.Provider>
    </div>
  );
}

namespace Radio {
  export interface ItemProps {
    value: string;
    children: React.ReactNode;
  }

  export function Item({ value, children }: ItemProps) {
    const { selectedValue, setSelectedValue } = useContext(RadioContext);

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
