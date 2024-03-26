import { Card } from '../../component/card';
import HighlightHOC from '../../hoc';

export default function TestPage2() {

  const HighlightLinkCard = HighlightHOC(Card.Link);
  
  return (
    <div data-page="test-page2">
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
      
      <HighlightLinkCard  title="타이틀" description="데스크립션" url={'/component-example'} />
    </div>
  );
}
