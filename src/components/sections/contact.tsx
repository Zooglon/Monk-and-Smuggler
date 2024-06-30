import { Paragraph, Subtitle, Title } from "../tools";

const MobilePage = () => (
  <div className="pageContainer" style={{ backgroundColor: "var(--brown)", color: "var(--cream)" }}>
    <Title>CONTACT US</Title>
    <Title>We are a super friendly bunch so please pop in anytime</Title>
    <Subtitle>Got a question?</Subtitle>
    <Paragraph>Sometimes a new place can be scary. We understand.</Paragraph>
    <Paragraph>
      Drop us a DM on insta or{" "}
      <a href="mailto:hello@monkandsmuggler.co.uk" style={{ color: "var(--cream)" }}>
        email us
      </a>{" "}
      with any questions.
    </Paragraph>
    <a
      href="mailto:hello@monkandsmuggler.co.uk"
      style={{ color: "var(--cream)", fontSize: "0.75rem" }}>
      <h1>hello@monkandsmuggler.co.uk</h1>
    </a>
  </div>
);

export const Contact = ({ mobile }: { mobile?: boolean }) => {
  return mobile ? (
    <MobilePage />
  ) : (
    <div className="tileContainer flex col gap-l" style={{ backgroundColor: "var(--brown)" }}>
      <Title>CONTACT US</Title>
      <Title>We are a super friendly bunch so please pop in anytime</Title>
      <Subtitle>Got a question?</Subtitle>
      <Paragraph>Sometimes a new place can be scary. We understand.</Paragraph>
      <Paragraph>
        Drop us a DM on insta or{" "}
        <a href="mailto:hello@monkandsmuggler.co.uk" style={{ color: "var(--cream)" }}>
          email us
        </a>{" "}
        with any questions.
      </Paragraph>
      <a href="mailto:hello@monkandsmuggler.co.uk" style={{ color: "var(--cream)" }}>
        <h1>hello@monkandsmuggler.co.uk</h1>
      </a>
    </div>
  );
};
