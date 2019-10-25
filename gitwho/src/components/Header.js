import Link from 'next/link';
import 'bulma/css/bulma.min.css';
import { Navbar, Container } from "react-bulma-components";

export default function Header() {
  return(
    <Navbar fixed='top' color='link' active={false}>
      <Container>
        <Navbar.Brand>
          <Navbar.Item>
              <span className="is-uppercase">
                GitWho?
              </span>
          </Navbar.Item>
          <Navbar.Burger/>
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container position="end">
            <Link href="/">
              <a className="navbar-item" >Index</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}