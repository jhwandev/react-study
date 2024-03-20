import { useState } from 'react';
import './style.scss';
import { ALL_ATTRIBUTES, AttributeType } from './data';
import Filter from '../../component/filter';

export default function ComponentExPage() {
  // 속성값 샘플 데이터
  const [attributes] = useState<AttributeType[]>(ALL_ATTRIBUTES.attributes);

  return (
    <div data-page="component-ex-page">
      <div className="filter-area">
        {/* 컴포넌트 입력할 곳 */}
        {attributes[0].key}
        {attributes[0].values[0].value}
        <hr />
        <hr />
        <hr />
        <Filter>
          <Filter.Header title="A">
            <Filter.Search placeholder="A Search" />
            <Filter.Header title="B1">
              <Filter.Search placeholder="B Search" />
              <Filter.Item label="[B1]1" />
              <Filter.Item label="[B1]2" />
              <Filter.Item label="[B1]3" />
            </Filter.Header>
            <Filter.Header title="B2">
              <Filter.Search placeholder="B Search" />
              <Filter.Item label="[B2]1" />
              <Filter.Item label="[B2]2" />
              <Filter.Item label="[B2]3" />
            </Filter.Header>
          </Filter.Header>
        </Filter>
      </div>
    </div>
  );
}
