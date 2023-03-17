import ISkill from "./ISKill";

export default interface IWilder {
  id: number;
  name: string;
  city: string;
  skills: ISkill[];
}
