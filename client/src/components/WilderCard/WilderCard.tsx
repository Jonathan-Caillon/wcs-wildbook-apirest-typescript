import blank_profile from "../../assets/blank_profile.png";
import "./WilderCard.css";
import { deleteWilder } from "../../wildersData";
import IWilder from "../../interface/IWilder";
import { useWilders } from "../../contexts/WilderContext";

interface WilderData {
  wilder: IWilder;
}

const WilderCard: React.FC<WilderData> = ({ wilder }: WilderData) => {
  const { fetchData } = useWilders();
  const deleteData = async (): Promise<void> => {
    await deleteWilder(wilder.id);
    void fetchData();
  };

  return (
    <article className="card">
      <img src={blank_profile} alt={`${wilder.name} Profile`} />
      <h3>{wilder.name}</h3>
      <h4>{wilder.city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {wilder.skills.map((skill, index) => (
          <li key={index}>
            {skill.name}
            {/* <span className="votes">{skill.votes}</span> */}
          </li>
        ))}
      </ul>
      <h4>Actions</h4>
      <button
        title={`Delete ${wilder.name}`}
        className="btn"
        onClick={() => {
          void deleteData();
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default WilderCard;
