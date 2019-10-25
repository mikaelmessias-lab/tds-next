import Head from 'next/head';
import Header from './Header';
import { Container } from 'react-bulma-components';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>

      <Header/>

      <Container>
        {props.children}
      </Container>
      
    </div>
  );
}