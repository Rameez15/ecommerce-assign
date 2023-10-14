const Content = ({ children }) => {
  const contentStyle = {
    color: "#fff",
    backgroundColor: "#f1f1f1",
    paddingTop: "5em",
  };
  return <div style={contentStyle}>{children}</div>;
};
export default Content;
