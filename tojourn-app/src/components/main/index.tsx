import React from "react";

export const Main: React.FC = () => {
    const newLocal = "Gonna be using all this jazz below, check back soon!";
    return (
        <div className="text-center font-light py-5 bg-black bg-opacity-40">
            <div className="container mx-auto">
                <h3
                    data-test="main-heading"
                    className="text-white text-3xl mb-8"
                >
                    {" Currently Under Development "}
                </h3>
                <p className="text-lg text-white mb-3">{newLocal}</p>
            </div>
        </div>
    );
};
