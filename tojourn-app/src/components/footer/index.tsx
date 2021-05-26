import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
    return (
        <div className="text-center py-2">
            <ul
                className="flex justify-center list-none p-0 m-0 pb-8"
                data-testid="icons-container"
            >
                <li className="mx-3 text-white">
                    <a href="https://github.com/sc12msw">
                        <FontAwesomeIcon icon={faGithub} className="fa-2x" />
                    </a>
                </li>
                <li className="mx-3 text-white">
                    <a href="https://twitter.com/mattchupichuw">
                        <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                    </a>
                </li>

                <li className="mx-3 text-white">
                    <a href="https://instagram.com/mattchupichuw">
                        <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                    </a>
                </li>

                <li className="mx-3 text-white">
                    <a href="https://www.linkedin.com/in/matthew-watson-686a1a86/">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
                    </a>
                </li>
            </ul>
            <div className="text-xs">
                <p className="text-white flex-col flex">
                    <a
                        className="mb-2"
                        href="https://www.instagram.com/tobias.bjorkli/"
                    >
                        {"Image credit: Tobias Bjorkli"}
                    </a>
                    <a href="https://www.pexels.com/search/norway/">
                        {"Via: Pexels"}
                    </a>
                </p>
            </div>
        </div>
    );
};
