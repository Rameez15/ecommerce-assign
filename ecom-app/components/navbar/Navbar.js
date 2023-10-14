import Link from "next/link";
import App from "../button/Button";

const Navbar = () => {
  const btnHandler = (res) => res.preventDefault();
  const inputStyle = {
    height: "2.3em",
    marginTop: "16px",
    borderRadius: "4px",
    minWidth: "140px",
    width: "300px",
    paddingLeft: "10px",
  };
  const ibContStyle = {
    display: "flex",
    width: "470px",
    justifyContent: "space-evenly",
    marginLeft: "11em",
  };
  const btnStyle = { lineHeight: "62px" };
  const headStyle = {
    fontSize: "36px",
    lineHeight: "2.2em",
    paddingRight: "13em",
  };
  return (
    <>
      <div id="nav-main">
        <div>
          <Link href="./" style={{ textDecoration: "none", color: "#33a3ff" }}>
            {" "}
            <h1 style={headStyle}>SAYZ</h1>
          </Link>
        </div>
        <div style={ibContStyle}>
          <input
            style={inputStyle}
            id="searchInput"
            type="text"
            placeholder="search for items..."
          />
          <div style={btnStyle}>
            <App onClick={btnHandler}>Search</App>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
