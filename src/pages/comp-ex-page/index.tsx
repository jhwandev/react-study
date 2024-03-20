import { useState } from 'react';
import './style.scss';
import { ALL_ATTRIBUTES, AttributeType } from './data';

export default function ComponentExPage() {

    // 속성값 샘플 데이터
    const [attributes] = useState<AttributeType[]>(ALL_ATTRIBUTES.attributes);

    return <div data-page="component-ex-page">
        <div className='filter-area'>
            {/* 컴포넌트 입력할 곳 */}
            {attributes[0].key}
            {attributes[0].values[0].value}
        </div>
    </div>
  }
  