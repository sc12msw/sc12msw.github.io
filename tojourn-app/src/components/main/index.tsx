import React from "react";

const styles = {
    mwLogo : {
        maxWidth: '200px',
        marginBottom: '20px',
        margin: 'auto'
    }
}

export const Main: React.FC = () => {
    return (
        <div>
            <div className="text-center font-light py-5 bg-purple mb-8">
                <div className="bg-white p-5 mx-auto flex flex-col justify-center items-center">
                    <h3
                        data-test="main-heading"
                        className="text-lg mb-8 max-w-xs font-bold"
                    >
                        Currently employed at 10x Banking
                        Senior Software Engineer
                    </h3>
                    <a
                        href="https://www.10xbanking.com/community/10x-spotlight-matt-watson-software-engineer"
                        className="mb-8"
                        target="_blank"
                    >
                        {" "}
                        <img
                            src="/img/tenx.svg"
                            style={styles.mwLogo}
                        />
                        Read my article featured on 10x's website!
                    </a>
                    <p className="text-m text-justify mb-3 max-w-xs">
                    Part of a SCA (Strong Customer Authentication) and Oauth Token management feature team. 
                    Providing high risk login flows and JWT management to over 2 million customers with 99.99% (four nines) availability. 
                    We used Java 17 Springboot microservices with Postgres (Aurora), Kafka and Redis (Elasticache) on AWS EKS for Kubernetes. 
                    CI/CD using Jenkins and Bitbucket.
                    </p>
                </div>
            </div>
            <div className="bg-black py-5 mb-8">
                <div className="bg-white py-8 flex flex-col justify-center items-center">
                    <h3
                        data-test="main-heading"
                        className="text-3xl text-center mb-4 font-bold"
                    >
                        Education
                    </h3>
                    <a
                        target="_blank"
                        className="pb-1 items-center justify-center flex flex-col text-m "
                        href="https://eps.leeds.ac.uk/computing"
                    >
                        <img src="/img/uol.png" style={styles.mwLogo} />
                        <p className="text-lg mb-3 max-w-xs text-center">
                            Bachelor of Science Honours Class 1 <br></br>in{" "}
                            <br></br> Information Technology
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};
