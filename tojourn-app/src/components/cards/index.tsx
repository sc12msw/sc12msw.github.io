import React from "react";

import data from "@public/meta.json";

export const Cards: React.FC = () => {
    return (
        <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(data?.jobs ?? []).map((info) => (
                    <div
                        key={info.name}
                        className="col-span-1 rounded-md border border-gray-300 p-5 bg-gray-900"
                        data-testid="container"
                    >
                        <h2 className="text-xl font-semibold p-0 m-0 ">
                            {info.name}
                        </h2>
                        <p className="mb-2 text-xs font-bold mb-5">{info.role} / {info.date}</p>
                        <ul>{info.list?.map(((item, index) => 
                             <li key={index} className="mb-2 text-sm">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
