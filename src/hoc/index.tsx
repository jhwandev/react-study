// [과제 2]
// HighlightHOC Higher Order Component를 구현해 주세요
// 1. 컴포넌트를 파라미터로 받아 가공하여 컴포넌트를 return 하도록 구현해 주세요
// 2. 파라미터로 받은 컴포넌트의 배경색을 변경시켜 주세요

import { Children, forwardRef, useImperativeHandle, useState } from 'react';

// # 참고
// HighlightHOC<T extends object>(WrappedComponent: React.ComponentType<T>)

// # Test
// const HighlightLinkCard = HighlightHOC(Card.Link);
// ...
// <HighlightLinkCard title="타이틀" description="데스크립션" url={'/component-example'} />

// [과제 3]
// HighlightHOC에 forwardRef를 적용하고 useImperativeHandle hook을 사용하여 setColor 함수를 전달해 주세요

// # 참고
// export interface HighlightHOCRef {
//   setColor: (color: string) => void;
// }
// ...
// forwardRef<HighlightHOCRef, T>
// ...
// HighlightHOC<T extends object>(WrappedComponent: React.ComponentType<T>)

// # Test
// const HighlightLinkCard = HighlightHOC(Card.Link);
// const ref = useRef<HighlightHOCRef>(null);
// ...
// <HighlightLinkCard ref={ref} title="타이틀" description="데스크립션" url={'/component-example'} />
// <button onClick={() => ref.current?.setColor('#FAED7D')}>변경</button>

export interface HighlightHOCRef {
  setColor: (color: string) => void;
  testFunction: () => void;
}

function HighlightHOC<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return forwardRef<HighlightHOCRef, T>((props, ref) => {
    const [color, setColor] = useState<string>('');

    useImperativeHandle(ref, () => ({
      setColor: (color: string) => {
        setColor(color);
      },
      testFunction: () => {
        console.log('testtest');
      },
    }));

    return (
      <div style={{ background: color }}>
        <WrappedComponent {...props} />
      </div>
    );
  });
}

export default HighlightHOC;
