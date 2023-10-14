import { Fragment } from "react";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Structure = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};

export default Structure;
