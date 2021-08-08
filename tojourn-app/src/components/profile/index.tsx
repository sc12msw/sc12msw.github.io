import React from "react";
import { Skills } from "@components";

export const Profile: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src="/img/profile.jpg"
                className="rounded-full h-40 w-40 items-center justify-center object-cover mb-10"
            />
          
            <Skills />
        </div>
    );
};
