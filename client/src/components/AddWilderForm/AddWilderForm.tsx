import { FormEvent, useState } from "react";
import { addWilder } from "../../wildersData";
import style from "./AddWilderForm.module.css";
import IWilder from "../../interface/IWilder";
import { useWilders } from "../../contexts/WilderContext";

const AddWilderForm: React.FC = () => {
  const { fetchData } = useWilders();
  const [name, setName] = useState<IWilder["name"]>("");
  const [city, setCity] = useState<IWilder["city"]>("");
  const sendWilder = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const json = { name, city };
    try {
      const addWilders = await addWilder(json);
      console.log(addWilders.data);
      void fetchData();
      setName("");
      setCity("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Add new Wilder</h2>
      <form
        className={style.form}
        id="addWilderForm"
        onSubmit={(e) => {
          void sendWilder(e);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddWilderForm;
