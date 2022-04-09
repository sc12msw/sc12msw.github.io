import React from "react";

export const Main: React.FC = () => {
    return (
        <div>
            <div className="sbg text-center font-light py-5 bg-white mb-8">
                <div className="bg-white p-5 mx-auto flex flex-col justify-center items-center">
                    <h3
                        data-test="main-heading"
                        className="text-lg mb-8 max-w-xs"
                    >
                        Currently employed at Sky Betting & Gaming as a Senior
                        Software Engineer
                    </h3>
                    <a
                        href="https://www.skybetcareers.com/"
                        className="mb-8"
                        target="_blank"
                    >
                        {" "}
                        <img
                            src="/img/SBG-Logo.png"
                            className="max-w-xs mb-8"
                        />
                        Come join us!
                    </a>
                    <p className="text-m mb-3 max-w-xs">
                        Part of the Gaming Data Streaming squad working with
                        Kotlin / Kafka / Kubernetes / Typescript / Chef / AWS /
                        Docker / Jenkins / Jira / Confluence / Git (bitbucket)
                        and lots of other technologies!
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
                        <img src="/img/uol.png" className="max-w-xs mb-4" />
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
