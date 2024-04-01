import { useRef } from 'react';
import { Card } from '../../component/card';
import HighlightHOC, { HighlightHOCRef } from '../../hoc';
import Modal from '../../component/modal';
import TestPage from '../test-page';
import ModalTestPage from '../modal-test-page';

export default function TestPage2() {
  const HighlightLinkCard = HighlightHOC(Card.Link);
  const ref = useRef<HighlightHOCRef>(null);
  const modalRef = useRef<any>(null);
  return (
    <div data-page="test-page2">
      {/* // # Test // ref.current?.open(); // ref.current?.close(); // ref.current?.toggle(); //{' '} */}
      <button onClick={() => modalRef.current?.toggle()}>Modal Toggle</button>

      <Modal ref={modalRef}>
        <ModalTestPage />
        <div>TESTMODAL CHLDEREN</div>
      </Modal>
      <h3>카드</h3>
      <hr />
      <Card.Link title="타이틀" description="데스크립션" url={'/test'} />
      <Card
        title="타이틀2"
        description="데스크립션"
        onClick={() => {
          console.log('click');
        }}
      />
      <Card title="타이틀2" description="데스크립션" />
      <Card title="타이틀2" description="데스크립션" />
      <HighlightLinkCard ref={ref} title="타이틀" description="데스크립션" url={'/component-example'} />
      <button onClick={() => ref.current?.setColor('#FAED7D')}>변경</button>
      <button onClick={() => ref.current?.setColor('')}>해제</button>
      <HighlightLinkCard title="타이틀" description="데스크립션" url={'/component-example'} />
    </div>
  );
}
