import { useEffect, useState } from 'react';
import Radio from '../../component/radio';
import Checkbox from '../../component/checkbox';
import { Card } from '../../component/card';

export default function TestPage() {
  // radio
  const [selectedValue, setSelectedValue] = useState<string | undefined>('cherry');
  const [radioValues, setRadioValues] = useState<string[]>(['a', 'b']);

  // radio (gpt)
  const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션

  const plainOptions = ['a', 'b', 'c'];

  useEffect(() => {
    console.log(`client : ${selectedValue}`);
  }, [selectedValue]);

  return (
    <div data-page="test-page">
      <Card.Link title="타이틀" description="데스크립션" url={'/component-example'} />
      <Card title="타이틀2" description="데스크립션" />
      <Card title="타이틀2" description="데스크립션" />
      <Card title="타이틀2" description="데스크립션" />


      <hr></hr>
      <hr></hr>
      <h3>체크박스</h3>

      <div style={{ display: 'flex' }}>
        <Checkbox
          value={radioValues}
          onChange={(v) => {
            console.log(v);
          }}
        >
          <Checkbox.Item value="a">A</Checkbox.Item>
          <Checkbox.Item value="b">B</Checkbox.Item>
          <Checkbox.Item value="c">C</Checkbox.Item>
        </Checkbox>
      </div>

      <h3>라디오1</h3>
      <button
        onClick={() => {
          console.log(selectedValue);
        }}
      >
        확인w
      </button>
      <input />
      <p>{selectedValue}</p>
      <Radio
        value={selectedValue}
        onChange={(v) => {
          setSelectedValue(v);
        }}
      >
        <Radio.Item value="apple">사과</Radio.Item>
        <Radio.Item value="banana">바나나</Radio.Item>
        <Radio.Item value="cherry">체리</Radio.Item>
      </Radio>
      <br />
      <button
        onClick={() => {
          setSelectedValue('apple');
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelectedValue('banana');
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectedValue('cherry');
        }}
      >
        3
      </button>
      <h3>라디오2</h3>
      <p>{selectedOption}</p>
      <RadioGroup
        selectedOption={selectedOption}
        onChange={(value: any) => setSelectedOption(value)}
        options={[
          { label: '옵션 1', value: 'option1' },
          { label: '옵션 2', value: 'option2' },
          { label: '옵션 3', value: 'option3' },
        ]}
      />
      <button
        onClick={() => {
          setSelectedOption('option1');
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelectedOption('option2');
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectedOption('option3');
        }}
      >
        3
      </button>
    </div>
  );
}

export function RadioGroup({ selectedOption, onChange, options }: any) {
  return (
    <div>
      {options.map((option: any) => (
        <label key={option.value}>
          <input type="radio" value={option.value} checked={selectedOption === option.value} onChange={() => onChange(option.value)} />
          {option.label}
        </label>
      ))}
    </div>
  );
}
