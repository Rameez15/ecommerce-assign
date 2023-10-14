import Navbar from "../navbar/Navbar";

const Header = () => {
  const headerStyle = {
    display: "flex",
    zIndex: "99",
    position: "fixed",
    color: "#33a3ff",
    height: "5em",
    width: "100%",
    backgroundColor: "#d7d7d7",
  };

  return (
    <div style={headerStyle}>
      <Navbar />
    </div>
  );
};
export default Header;
