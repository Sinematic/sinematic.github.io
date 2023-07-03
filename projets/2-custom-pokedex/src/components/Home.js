import Pokedex from "./Pokedex";
import Header from './Header';
import Footer from "./Footer";
import { Fragment } from "react";

function Home() {
    return (
        <Fragment>
            <Header />
            <Pokedex />
            <Footer />
        </Fragment>
    )
}

export default Home