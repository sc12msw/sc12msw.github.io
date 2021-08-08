import React from "react";

import data from "@public/meta.json";

export const Skills: React.FC = () => (
    <div className="container mb-5  text-white">
        {(data?.skills ?? []).map((skill) => (
            <div
                key={skill.name}
                className="shadow bg-gray-800 my-1 text-xs max-w-2xl w-screen grid-flow-col grid grid-cols-4"
            >
                <div className="col-span-1">
                    <p className="text-left pl-3">{skill.name}</p>
                </div>
                <div className="col-span-3">
                    <div
                        className="bg-blue-800 text-left text-white pl-3"
                        style={{ width: `${skill.percentage}%` }}
                    >
                        {skill.percentage}
                    </div>
                </div>
            </div>
        ))}
        <p className="text-left text-s mt-5 p-1">
            <b>{"Scale"}</b>
        </p>
        <ul className="text-left text-xs p-2">
            <li>{"(0-30) Basic, used a few times"}</li>
            <li>
                {
                    "(31-60) Good understanding, have developed actively with them commercially, but knowledge off the top my head is thin"
                }
            </li>
            <li>
                {
                    "(61-80) Experienced, understand most concepts can teach others, but still learning myself"
                }
            </li>
            <li>{"(81-100) Mastered, have mastered most aspects of it"}</li>
        </ul>
    </div>
);
