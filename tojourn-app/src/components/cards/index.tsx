import React from "react";

import data from "@public/meta.json";

export const Cards: React.FC = () => {
    return (
        <div className="bg-gray-900 py-5 mb-8">
               <div className="bg-white pt-8">
                    <h3 className="text-3xl text-center font-bold text-gray-900"> Work Experience</h3>
        <div className="flex-1  max-w-screen-lg mx-auto p-5 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(data?.info ?? []).map((info) => (
                    <div
                        key={info.name}
                        className="col-span-1 rounded-md border border-gray-300 p-5 bg-gray-900"
                        data-testid="container"
                    >
                        <h2 className="text-xl font-semibold p-0 m-0 ">
                            {info.name}
                        </h2>
                        <p className="mb-2 text-xs font-bold mb-5">{info.subtitle} {info.sub2}</p>
                        <ul>{info.list?.map(((item, index) => 
                             <li key={index} className="mb-2 text-sm">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
    );
};
