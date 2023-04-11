import { ICategory } from "./category";
import { ITechology } from "./techology";

export interface IProject {
  _id?: string | number;
  title: string;
  projectCategoryId: ICategory;
  imgUrl: string;
  description: string;
  technologyId: ITechology[];
  updatedAt?: string;
  createdAt?: string;
}
