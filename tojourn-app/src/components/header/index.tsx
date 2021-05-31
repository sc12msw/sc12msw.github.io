import React from "react";
import { Profile } from "@components";

export const Header: React.FC = () => (
    <div className="text-center" data-testid="container">
        <h1
            title="Tojourn in Elder Futhark runic alphabet"
            className="text-white text-xl mt-5 mb-10"
        >
            {"ᛏᛟᛃᛟᚢᚱᚾ"}
        </h1>
        <div className="flex justify-center mb-5">
            <Profile />
        </div>
    </div>
);
