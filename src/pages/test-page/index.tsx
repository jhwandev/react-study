import { useEffect, useState } from 'react';
import Radio from '../../component/radio';

export default function TestPage() {
  // radio
  const [selectedValue, setSelectedValue] = useState<string | undefined>('cherry');

  // radio (gpt)
  const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션

  useEffect(() => {
    console.log(`client : ${selectedValue}`);
  }, [selectedValue]);

  const [a, setA] = useState(1);

  const [checkedMap, setCheckedMap] = useState({
    a: false,
    b: false,
    c: false,
  });

  return (
    <div data-page="test-page">
      <h3>체크박스</h3>
      {checkedMap['a'] ? <p>checked</p> : <p>unchecked</p>}
      {checkedMap['b'] ? <p>checked</p> : <p>unchecked</p>}
      {checkedMap['c'] ? <p>checked</p> : <p>unchecked</p>}
      <input
        type="checkbox"
        checked={checkedMap['a']}
        value={'a'}
        onChange={(e) => {
          e.target.checked ? setCheckedMap({ ...checkedMap, a: true }) : setCheckedMap({ ...checkedMap, a: false });
        }}
      />
      <input
        type="checkbox"
        checked={checkedMap['b']}
        value={'b'}
        onChange={(e) => {
          e.target.checked ? setCheckedMap({ ...checkedMap, b: true }) : setCheckedMap({ ...checkedMap, b: false });
        }}
      />
      <input
        type="checkbox"
        checked={checkedMap['c']}
        value={'c'}
        onChange={(e) => {
          e.target.checked ? setCheckedMap({ ...checkedMap, c: true }) : setCheckedMap({ ...checkedMap, c: false });
        }}
      />
      <h3>라디오1</h3>
      <p>{selectedValue}</p>
      <Radio value={selectedValue} setValue={setSelectedValue}>
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
