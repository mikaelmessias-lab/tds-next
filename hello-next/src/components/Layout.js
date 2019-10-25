// components/Layout.js

import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {

  return (
    <div id="container">
      <Head>
        <title>{props.title}</title>
      </Head>

      <Header/>
  
      <div>
        {props.children}
      </div>

      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          outline: 0;
          box-sizing: border-box;
        }

        #container {
          display: flex;
        }
      `}</style>
    </div>
  );
}