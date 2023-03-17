import { WilderCard, AddWilderForm } from "../../components/index";
import style from "./WilderGrid.module.css";
import IWilder from "../../interface/IWilder";
import { useWilders } from "../../contexts/WilderContext";
const WilderGrid: React.FC = () => {
  const { wildersData } = useWilders();

  return (
    <main className="container">
      <AddWilderForm />
      <h2>Wilders</h2>

      <section className={style.cardRow}>
        {wildersData.map((wilder: IWilder) => (
          <WilderCard wilder={wilder} key={wilder.id} />
        ))}
      </section>
      {wildersData.length === 0 && <p>No wilders yet</p>}
    </main>
  );
};

export default WilderGrid;
