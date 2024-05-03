import styled from "@emotion/styled";
import { Card } from "../Cards";

// 메인 콘텐츠 영역
const Contents = () => {
  return (
    <Container>
      <Card
        title="hello"
        description="저는 카드입니다."
        image="https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/dce535dc-3979-49f0-8ae8-dbb6b2dee300/public"
      />
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
