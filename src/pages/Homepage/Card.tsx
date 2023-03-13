import { Link } from "react-router-dom";

type CardPropsType = {
  key: string,
  id: string,
  title: string,
  cover: string,
};

export const Card: React.FC<CardPropsType> = ({ id, title, cover }) => {
  return (
    <article className="card">
      <img src={cover} />
      <Link className="link" to={`/apartment/${id}`}>
        <h3>{title}</h3>
      </Link>
    </article>
  );
};
