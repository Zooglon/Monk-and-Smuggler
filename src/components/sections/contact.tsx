import { Paragraph, Subtitle, Title } from "../tools";

export const Contact = () => {
  return (
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
