import React from "react";

export const Header: React.FC = () => {
    return (
        <div className="text-center" data-testid="container">
            <h1
                title="Tojourn in Elder Futhark runic alphabet"
                className="text-white text-xl m-4"
            >
                {"ᛏᛟᛃᛟᚢᚱᚾ"}
            </h1>
        </div>
    );
};
