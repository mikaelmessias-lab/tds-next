import React, { useState } from 'react';
import Router from "next/router";

import { Section, Heading, Container, Columns, Button } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import '../styles/index.css';

import Layout from '../components/Layout';

export default function Index() {
  const [login, setLogin] = useState("");

  const SubmitHandler = () => {
    Router.push(`/user/${login}`);
  }

  return (
    <Layout title="GitWho?">
      <Section className="has-text-centered">
        <Heading renderAs="p" className="git-logo">
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" />
        </Heading>

        <Heading>
          GitWho?
        </Heading>

        <Heading subtitle>
          Diga-me com quem tu andas que direi quem tu és.
        </Heading>
      </Section>

      <Container>
        <form onSubmit={SubmitHandler}>
          <Columns>
            <Columns.Column size={3}/>

            <Columns.Column size={4}>
              <div className="control">
                <input 
                  id="login"
                  className="input"
                  type="text"
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                  placeholder="Type your login..."
                />
              </div>
            </Columns.Column>

            <Columns.Column size={2}>
              <div className="control">
                <Button
                  type="submit"
                  className="is-fullwidth is-danger"
                >
                  Go
                </Button>
              </div>
            </Columns.Column>
          </Columns>
        </form>
      </Container>
    </Layout>
  );
};