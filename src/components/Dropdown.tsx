import chevron from "../assets/icons/chevron.svg";
import { useState } from "react";

type InfosPropsType = {
  title: string;
  content: string;
};

export const Dropdown: React.FC<InfosPropsType> = ({ title, content }) => {
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
          <p> {content} </p>
        </div>
      ) : null}
    </div>
  );
};
