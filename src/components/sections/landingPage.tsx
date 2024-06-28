import { Logo, Paragraph, Subtitle, Title } from "../tools";

const comments = [
  "Feel like i'm on holiday",
  "Finally, good vegan options",
  "You've brought Shoreditch to Stafford",
  "Best coffee shop in town!",
  "Amazing coffee, I was sad when it was over",
  "Best cappuccino I've ever had",
  "I love the clearly labelled food",
  "VEGAN CAKES!",
  "You're giving me house decór inspo!",
  "This is just what Stafford needs",
  "I've been waiting for something this",
  "The coffee is so good",
  "Oh Wow!!!",
  "I can't believe this is plant based!",
];

const mobilePage = (
  <div className="pageContainer" style={{ backgroundColor: "var(--brown)" }}>
    <div className="logoOverlay"></div>
    <div className="logoContainer">
      <Logo />
    </div>
    <div id="os_main" className="metaContainer">
      <h1>Monk & Smuggler</h1>
      <h2>Coffee | Books | Culture</h2>
    </div>
    <div className="textContainer">
      <h3>Something is brewing...</h3>
    </div>
  </div>
);

const fullPage = (
  <div className="tileContainer flex col center" style={{ backgroundColor: "var(--green)" }}>
    {/* <Logo /> */}
    <Subtitle>Hello</Subtitle>
    <Title>We are Monk & Smuggler</Title>
    <Subtitle>Passion for Coffee</Subtitle>
    <Paragraph>
      All are welcome and we strive to have a little something for everyone. A great place to sip
      coffee, catch up with friends or catch up with yourself
    </Paragraph>
    <Paragraph>
      We are proud to serve Ozone coffee and we love to highlight incredible products from amazing
      producers that share our love of people and the environment.
    </Paragraph>
    <Subtitle>FAQ's:</Subtitle>
    <Paragraph>
      <h5>I don't drink coffee, should I bother coming?</h5>
      We get it, coffee isn't for everyone. Thats why we have an amazing selection of other drinks
      from teas and hot chocolate to cold cans and Kombuchas.
    </Paragraph>
    <Paragraph>
      <h5>Do you cater to allergies/dietary requirements?</h5>
      Yeah we do! All our snacks are clearly labeled with allergen and dietary info. Our team are on
      hand for any specific needs
    </Paragraph>
    <Paragraph>
      <h5>Do you carry any Vegan options?</h5>
      Do we ever! Plant based options are our favourite and labelled up to help you choose. We carry
      Oat and Soya milk and the vast majority of out canned and bottled drinks are also plant based.
    </Paragraph>
  </div>
);

export const LandingPage = ({ mobile }: { mobile?: boolean }) => (!mobile ? fullPage : mobilePage);
