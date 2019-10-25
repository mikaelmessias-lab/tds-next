

export default function Header() {
  const navStyle = {
    width: "30%",
    backgroundColor: "#ccc",
  }

  return (
    <nav id="menu" style={navStyle}>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          outline: 0;
          box-sizing: border-box;
        }

        #menu {
          height: 100%;
        }

        #menu > ul {
          list-style: none;
          width: 100%;
        }

        #menu > ul > li > a {
          display: block;
          padding: 20px;
          background: #eee;
          color: #333;
        }

        #menu > ul > li > a:hover {
          background: #ccc;
          color: #fff;
        }
      `}</style>
    </nav>
  );
}