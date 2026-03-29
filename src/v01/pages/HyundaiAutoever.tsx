import styled from "@emotion/styled";

const Slide = styled.img`
  width: 100%;
`;

export const HyundaiAutoever = () => {
  return (
    <>
      {Array.from({ length: 32 }, (_, i) => (
        <Slide
          key={i + 1}
          src={`/hyundai-autoever/${String(i + 1).padStart(2, "0")}.png`}
          alt={`hyundai-autoever-${i}`}
        />
      ))}
    </>
  );
};

export default HyundaiAutoever;
