import { Fragment } from "react";
import classes from './Layout.module.css';
import MainHeader from "./MainHeader";
import Footer from "./Footer";

function Layout(props){
    return(
        <Fragment>
            <MainHeader />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;