import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProjectForm, projectSchema } from "../../../interfaces/schemas";
import { editProject, getProjectByID } from "../../../api/project";
import upLoadFile from "../../../upload";
import { IProject } from "../../../interfaces/project";
import { ITechology } from "../../../interfaces/techology";
import { ICategory } from "../../../interfaces/category";

type Props = {
  techologies: ITechology[];
  categories: ICategory[];
};

const EditProject = ({ techologies, categories }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectForm>({
    resolver: yupResolver(projectSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProjectById(id);
      }
    },
  });

  const fetchProjectById = async (id: number | string) => {
    try {
      const { data } = await getProjectByID(id);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSubmit = async (data: any) => {
    try {
      const imgUrl = await upLoadFile(data.imgUrl[0]);

      if (id) {
        await editProject(id, { ...data, imgUrl });
      }
      navigate("/admin/projects");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("title")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.title && errors.title.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="file"
          // type="text"
          {...register("imgUrl")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {" "}
          {errors.imgUrl && errors.imgUrl.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Image
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("siteUrl")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.siteUrl && errors.siteUrl.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Site URL
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          {...register("projectCategoryId")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose a category</option>
          {categories.map((item, index) => (
            <option key={index} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="text-red-500 text-sm block my-2">
          {" "}
          {errors.projectCategoryId && errors.projectCategoryId.message}
        </span>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          multiple
          id="countries"
          {...register("technologyId")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {techologies.map((item, index) => (
            <option key={index} value={item._id}>
              {item.name}
            </option>
          ))}
          {/* <option value="Web Design">Web Design</option>
          <option value="Ux">Ux</option> */}
        </select>
        <span className="text-red-500 text-sm block my-2">
          {" "}
          {errors.technologyId && errors.technologyId.message}
        </span>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6"></div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          {...register("description")}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
          rows={10}
        ></textarea>
        <span className="text-red-500 text-sm block my-2">
          {" "}
          {errors.description && errors.description.message}
        </span>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default EditProject;
