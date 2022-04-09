import React from "react";
import { Skills } from "@components";

export const Profile: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center text-white py-5">
            <img
                src="/img/profile.jpg"
                className="rounded-full h-40 w-40 items-center justify-center object-cover mb-10"
            />
             <h3>Matt Watson</h3>
            <p className="pb-5">Handles: @Tojourn @mattchupichu</p>
            <Skills />
        </div>
    );
};
