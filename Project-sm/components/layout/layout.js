import { Fragment } from "react";
import MainHeader from "./main-header";

function Layout(props) {
  <Fragment>
    <MainHeader />
    <main>{props.children}</main>
  </Fragment>
}

export default Layout;
