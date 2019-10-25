import Layout from '../components/Layout';
import { Heading, Section } from 'react-bulma-components';

const MarginTop10 = {
  marginTop: '10px'
};


export default function About() {
  return (
    <Layout title="About">
      <Section className="has-text-centered">
          <Heading>
            About
          </Heading>

          <Heading subtitle>
            Tell me your Github nickname and I'll tell you who you are.
          </Heading>
      </Section>
    </Layout>
  );
}
