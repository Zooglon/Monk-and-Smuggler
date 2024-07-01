import { Subtitle, Title, WindowImg } from "../tools";

const MobilePage = () => (
  <div className="pageContainer" style={{ backgroundColor: "var(--cream)" }}>
    <Title>OPENING HOURS:</Title>
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

export const OpeningHours = ({ mobile }: { mobile?: boolean }) => {
  return mobile ? (
    <MobilePage />
  ) : (
    <div className="tileContainer flex col gap-l" style={{ backgroundColor: "var(--cream)" }}>
      <WindowImg inverted />
      <Title>OPENING HOURS:</Title>
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
