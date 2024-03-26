// [과제 1]
// Card, Card.Link 컴포넌트를 구현해 주세요
// 1. Container/Presentational 패턴으로 구현해 주세요
// 2. CardCore 컴포넌트와 variation props를 사용하여 Card, Card.Link 컴포넌트를 구현해 주세요
// 3. Card 컴포넌트는 title, description?, onClick? 만을 props로 사용하도록 제한해 주세요
// 4. Card.Link 컴포넌트는 title, description?, url? 만을 props로 사용하도록 재한해 주세요
// 5. Card 컴포넌트는 onClick 함수를 받으면 클릭시 onClick 함수를 실행하도록 해주세요
// 6. Card.Link 컴포넌트는 url 값을 받으면 클릭시 해당 URL로 이동하도록 해주세요(const navigate = useNavigate(); 사용)
// 7. Card.Link 컴포넌트는 url를 받으면 하단에 url를 보여주도록 디자인 해주세요

import { useNavigate } from 'react-router-dom';
import './style.scss';

export interface CardProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export function Card(props: CardProps) {
  return <CardCore {...props} />;
}

//모든 variation을 포함하는 super set
interface CardCoreProps {
  title: string;
  description?: string;
  onClick?: () => void;
  url?: string;
  variation?: 'default' | 'link';
}

//cardcore
function CardCore({ title, description, onClick, variation = 'default', url }: CardCoreProps) {
  const navigate = useNavigate();
  return (
    <div
      data-component="card"
      onClick={() => {
        if (variation === 'link' && url) {
          navigate(url);
          return;
        }
        onClick && onClick();
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {/*  */}
      {variation === 'link' && <div>{url}</div>}
    </div>
  );
}

export interface LinkCardProps {
  title: string;
  description?: string;
  url?: string;
}

Card.Link = function LinkCard(props: LinkCardProps) {
  return (
    <>
      <CardCore {...props} variation="link" />
    </>
  );
};
