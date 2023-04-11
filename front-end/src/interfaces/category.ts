import { IProject } from "./project";

export interface ICategory {
  _id?: string | number;
  name: string;
  project: IProject[];
  updatedAt?: string;
  createdAt?: string;
}
