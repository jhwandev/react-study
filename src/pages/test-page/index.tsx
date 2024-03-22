import Radio from "../../component/radio";

export default function TestPage() {

  return (
    <div data-page="test-page">

      <Radio defaultValue="2">
        <Radio.Item value="1">사과</Radio.Item>
        <Radio.Item value="2">바나나</Radio.Item>
        <Radio.Item value="3">체리</Radio.Item>
      </Radio>
      {/* <Radio defaultValue="banana">
        <Radio.Item value="apple">사과</Radio.Item>
        <Radio.Item value="banana">바나나</Radio.Item>
        <Radio.Item value="cherry">체리</Radio.Item>
      </Radio> */}

    </div>
  );
}
