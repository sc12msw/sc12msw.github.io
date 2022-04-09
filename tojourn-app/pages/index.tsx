import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
    return (
        <Container backgroundClass="bg-nordic bg-fixed bg-cover ">
            <Container backgroundClass="bg-black bg-opacity-50">
                <Header />
                <Main />
                <Cards />
                <Footer />
            </Container>
        </Container>
    );
};

export default Home;
