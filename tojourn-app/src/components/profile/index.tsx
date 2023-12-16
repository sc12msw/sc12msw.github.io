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
            <p className="text-justify p-8 bg-black"> Hi I'm Matt, I'm a generalist software engineer who has a range of skills and knowledge in various domains of software development, with a soft spot for devops and tooling. I can advance a software project from requirements to release and understand all of the phases within the software development lifecycle. During my career I have mainly coded in Java using Springboot and have used Kafka, Redis, AWS, and Postgres to build scalable and reliable applications. I am bit of a polyglot however and have done other projects in different languages like JS/TS and Python! This website for example is NextJs and Tailwind using Github pages :D. Some of my hobbies are bbqing, skatebording, gaming and wood work. I'm looking for a team that shares my passion for quality and innovation, and that doesn't mind my occasional puns and jokes. <b> How do librarians connect to remote computers? SSH!</b> I was born in South Africa, but I moved to the UK a when I was 10. I love to travel, learn about different cultures and try lots of different food.</p>
        </div>
    );
};
