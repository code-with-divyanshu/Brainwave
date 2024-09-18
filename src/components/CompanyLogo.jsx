import React from "react";
import { companyLogos } from "../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline text-center mb-6 text-n-1/50">
        Helping People Create Beautiful Content At
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 has-[8.5rem]:"
          >
            <img
              src={logo}
              alt="Company Logo"
              width={134}
              height={28}
              className=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
