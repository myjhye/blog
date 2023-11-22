// 화면 렌더링 시 -> 클라이언트 측에서 react를 사용하도록 하는 -> 명령어
'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Carousel 컴포넌트를 반응형으로 설정하는 -> 설정 객체
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

// Props 타입 정의 -> children 속성을 받는다
type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  return (
    // infinite -> 무한루프 설정
    // autoPlay -> 자동 재생 설정
    // responsive -> 위에서 정의한 반응형 설정 적용
    // itemClass='m-2' -> Carousel 내부 아이템의 클래스 설정 -> 마진 2 적용
    <Carousel 
        infinite autoPlay responsive={responsive} 
        itemClass='m-2'
    >
      {children}
    </Carousel>
  );
}
