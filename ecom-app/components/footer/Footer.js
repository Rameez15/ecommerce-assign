const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    color: "#000",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#cecece",
    padding: "30px 0px 30px 0px",
    fontSize: "20px",
  };

  return (
    <div style={footerStyle}>
      <div>
        <a
          href="javascript:void(0)"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          ABOUT US
        </a>
      </div>
      <div>
        <a
          href="javascript:void(0)"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          SAYZ
        </a>
      </div>
      <div>
        <a
          href="javascript:void(0)"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          HELP
        </a>
      </div>
      <div>
        <a
          href="javascript:void(0)"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          FOLLOW US
        </a>
      </div>
    </div>
  );
};
export default Footer;
