import Layout from '../../components/Layout';
import { Section, Heading, Columns, Level, Box } from 'react-bulma-components';
import Fetch from 'isomorphic-unfetch';

import 'bulma-divider/dist/css/bulma-divider.min.css'

export default function UserSearch({profile, repos}) {
  var layout = '';
  var repos_list = '';
  var title = '';
  
  if(typeof repos.message === "undefined") {

    title = `${profile.login} >> GitWho?`;
    
    repos_list = repos.map((item) => { 
      return (
        <Columns.Column size={3}>
          <Box>
            <Heading size={5} className="has-text-centered">
              <a href={item.svn_url} className="button is-fullwidth is-danger">
                {item.name}
              </a>
            </Heading>
            <hr/>
            <p>
              {item.description}
            </p>
            <hr/>
            <p>
              <span className="is-size-7 has-text-weight-bold">Criado em:</span> <span className="is-size-7">{item.created_at}</span>
            </p>
            <p>
              <span className="is-size-7 has-text-weight-bold">Tamanho:</span> <span className="is-size-7">{item.size}</span>
            </p>
            <p>
              <span className="is-size-7 has-text-weight-bold">Stargazers:</span> <span className="is-size-7">{item.stargazers_count}</span>
            </p>
            <p>
              <span className="is-size-7 has-text-weight-bold">Forks:</span> <span className="is-size-7">{item.forks}</span>
            </p>
            <p>
              <span className="is-size-7 has-text-weight-bold">Linguagem:</span> <span className="is-size-7">{item.language}</span>
            </p>
          </Box>
        </Columns.Column>
      );
    });

    layout = (
      <div>
        <Columns>
          <Columns.Column size={4}>
            <Section className="has-text-centered"> 
              <Heading renderAs="p">
                  <img src={profile.avatar_url} style={{width: '70%'}}/>
              </Heading>

              <Heading>
                {profile.name}
              </Heading>

              <Heading subtitle renderAs="h3">
                <a href={profile.html_url}>{profile.html_url}</a>
              </Heading>
            </Section>

            <Level style={{textAlign: 'center'}}>
              <Level.Item>
                <div style={{marginRight: '10px'}}>
                  <Heading renderAs="p" heading>
                    Seguindo
                  </Heading>
                  <Heading renderAs="p">
                    {profile.following}
                  </Heading>
                </div>
                <div style={{marginRight: '10px'}}>
                  <Heading renderAs="p" heading>
                    Seguidores
                  </Heading>
                  <Heading renderAs="p">
                    {profile.followers}
                  </Heading>
                </div>
                <div>
                  <Heading renderAs="p" heading>
                    Repositórios
                  </Heading>
                  <Heading renderAs="p">
                    {profile.public_repos}
                  </Heading>
                </div>
              </Level.Item>
            </Level>
          </Columns.Column>

          <div className="is-divider-vertical" />

          <Columns.Column>
            <Section>
              <Heading renderAs="p" heading>
                Biografia
              </Heading>
              <Heading renderAs="p" size={3}>
                {profile.bio}
              </Heading>
              <hr/>
              <Columns className="has-text-centered">
                <Columns.Column>
                  <Heading renderAs="p" heading>
                    Organização
                  </Heading>
                  <Heading renderAs="p" size={4}>
                    {profile.company}
                  </Heading>
                </Columns.Column>
                <Columns.Column>
                  <Heading renderAs="p" heading>
                    Localização
                  </Heading>
                  <Heading renderAs="p" size={4}>
                    {profile.location}
                  </Heading>
                </Columns.Column>
                <Columns.Column>
                  <Heading renderAs="p" heading>
                    Blog
                  </Heading>
                  <Heading renderAs="p" size={6}>
                    {profile.blog}
                  </Heading>
                </Columns.Column>
              </Columns>
            </Section>
          </Columns.Column>
        </Columns>

        <hr/>

        <Columns>
          <Columns.Column>
            <Heading heading>
              Repositórios
            </Heading>

            <Columns>
              {repos_list}
            </Columns>
          </Columns.Column>
        </Columns>
     </div>
    );
  }
  else {
    title = "Erro >> GitWho?";

    layout = (
      <Section className="hero is-warning" style={{marginTop: '20px'}}>
        <Heading>
          Error
        </Heading>

        <span className="has-text-weight-normal">
          {profile.message}
        </span>
      </Section>
    );
  }

  return (
    <Layout title={title}>
      {layout}
    </Layout>
  );
}

UserSearch.getInitialProps = async function( { query } ) {
  const user_res = await Fetch(`https://api.github.com/users/${query.login}`);
  const user_data = await user_res.json();
  
  if(user_data.message != undefined) {
    console.log("ERROR: " + user_data.message);
  }
  else {
    console.log(`Profile fetched.`);
  }

  const repos_res = await Fetch(`https://api.github.com/users/${query.login}/repos`);
  const repos_data = await repos_res.json();

  return {
    profile: user_data,
    repos: repos_data
  };
}