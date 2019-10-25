// pages/Index.js

import Layout from '../components/Layout';

export default function Index() {
  const title = <h1>Contact me anywhere</h1>;

  return (
    <Layout title="Contact">
      <section id="post">
        {title}

        <p>
          Call me!
        </p>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
        }

        #post {
          padding: 0 20px;
        }
      `}</style>
    </Layout>
  );
}
