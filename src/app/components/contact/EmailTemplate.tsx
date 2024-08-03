import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = "https://www.webdevewan.com";

export default function EmailTemplate(name: string, message: string) {
  const previewText = `Thank you for getting in touch!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`${baseUrl}/logo.png`}
              width="100"
              height="36"
              alt="WebDevEwan"
            />
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={paragraph}>Hey {name},</Text>
              <Text style={paragraph}>Thank you for getting in touch!</Text>
              <Text style={paragraph}>
                I&apos;ll review your message as soon as possible and get back
                to you shortly.
              </Text>
              <Text style={paragraph}>Have a great day!</Text>
              <Text style={paragraph}>Ewan</Text>
              <Text style={ps}>
                P.S. here&apos;s a copy of your message for your records:
              </Text>
              <Text style={review}>{message}</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const ps = {
  ...paragraph,
  fontStyle: "italic",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};
