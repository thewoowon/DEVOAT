import styled from "@emotion/styled";
import Image from "next/image";

export type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <Container className="card">
      <Image src={image} alt="card" width={150} height={150} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 150px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px 10px;
  margin: 10px;
  transition: transform 0.3s;
`;
