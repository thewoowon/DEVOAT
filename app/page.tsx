"use client";
import Contents from "@/components/Contents";
import Shorts from "@/components/Shorts";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <LeftSide>
        {/* 콘텐츠 영역 */}
        <Contents />
      </LeftSide>
      <RightSide>
        {/* 쇼츠 영역 */}
        <Shorts />
      </RightSide>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
