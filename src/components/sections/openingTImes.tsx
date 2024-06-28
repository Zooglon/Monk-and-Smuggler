import { Paragraph, Subtitle, Title } from "../tools";

export const OpeningTimes = () => {
  return (
    <div className="tileContainer flex col gap-l" style={{ backgroundColor: "var(--cream)" }}>
      <Title>OPENING TIMES:</Title>
      <div>
        <Subtitle>Monday: 8am - 4pm</Subtitle>
        <Subtitle>Tuesday: 8am - 4pm</Subtitle>
        <Subtitle>Wednesday: 8am - 4pm</Subtitle>
        <Subtitle>Thursday: 8am - 4pm</Subtitle>
        <Subtitle>Friday: 8am - 4pm</Subtitle>
        <Subtitle>Saturday: 8am - 4pm</Subtitle>
        <Subtitle>Sunday: Closed</Subtitle>
      </div>
    </div>
  );
};
