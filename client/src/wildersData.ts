/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from "axios";
import IWilder from "./interface/IWilder";

axios.defaults.baseURL = "http://localhost:5000";

// Get all Wilders
export const getWilder = () => {
  return axios.get("/api/wilder");
};

// Post new Wilder
export const addWilder = (json: {
  name: IWilder["name"];
  city: IWilder["city"];
}) => {
  return axios.post("/api/wilder", json);
};

// Delete Wilder
export const deleteWilder = (id: IWilder["id"]) => {
  return axios.delete(`/api/wilder/${id}`);
};
