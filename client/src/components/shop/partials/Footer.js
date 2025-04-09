import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#000", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Rohail Kamal Fragrance © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default Footer;
