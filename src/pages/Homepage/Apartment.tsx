import { useParams } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import data from "../../data/data.json";
import { Tag } from "../../components/Tag";
import { ReactComponent  as Star }  from "../../assets/images/star.svg";
import { Dropdown } from "../../components/Dropdown";
import { DropdownList } from "../../components/DropdownList";

export const Apartment = () => {
  const { id } = useParams();
  const rightApartment: any = data.find((apartment) => apartment.id === id);

  return (
    <main className="apartment">
      <Carousel pictures={rightApartment.pictures} />
      <div className="container-apartment-infos">
        <div className="titles-tags">
          <h1>{rightApartment.title}</h1>
          <h3>{rightApartment.location}</h3>
          <div className="container-tags">
            {rightApartment.tags.map((tag: string, index: number) => (
              <Tag text={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="host">
          <div className="infos-host">
            <p>
              {rightApartment.host.name.split(" ")[0]} <br />{" "}
              {rightApartment.host.name.split(" ")[1]}{" "}
            </p>
            <img
              src={rightApartment.host.picture}
              alt={`${rightApartment.host.name} profil `}
            />
          </div>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={
                  star <= rightApartment.rating ? "star colorized" : "star none"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="dropdown-container">
        <Dropdown title="Description" content={rightApartment.description} />
        <DropdownList
          title="Equipements"
          equipments={rightApartment.equipments}
        />
      </div>
    </main>
  );
};
