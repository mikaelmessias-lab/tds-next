// pages/Index.js

import Layout from '../components/Layout';

export default function Index() {
  const title = <h1>Hello world!</h1>

  return (
    <Layout title="Home">
      <section id="post">
        {title}

        <p>
          This is my first post ever! I'm so happy.
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
