import chevron from "../assets/icons/chevron.svg";
import { useState } from "react";

type InfosPropsType = {
  title: string;
  equipments: string[];
};

export const DropdownList: React.FC<InfosPropsType> = ({ title, equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className={isOpen ? "dropdown-title opened" : "dropdown-title"} onClick={() => setIsOpen(!isOpen)}>
        <h3> {title} </h3>
        <span>
          <img src={chevron} alt="chevron" />
        </span>
      </div>
      {isOpen ? (
        <div className="dropdown-infos">
          <ul>
            {equipments.map((equipment, index) => <li key={index} >{equipment}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
