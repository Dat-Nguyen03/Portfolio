import React from "react";
// import projects from "../../assets/data/portfolioData";
import { IPortfolio } from "../../interfaces/portfolio";
import { Link } from "react-router-dom";
import { IProject } from "../../interfaces/project";
type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeID: string | number | null;
  projects: IProject[];
};

const Modal = ({ setShowModal, activeID, projects }: Props) => {
  const project = projects.find((item: IProject) => item._id === activeID);
  console.log(project);

  return (
    <div>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
        <div className="w-[90%] max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
          <div>
            <div>
              <img className="rounded-[8px]" src={project?.imgUrl} alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-headingColor font-[800] my-5">
              {project?.title}
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <h4 className="text-headingColor text-[18px] font-[700]">
                Category
              </h4>
              <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                {project?.projectCategoryId.name}
              </span>
            </div>
            <p className="text-[15px] leading-7 text-smallTextColor">
              {project?.description}
            </p>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <h4 className="text-headingColor text-[18px] font-[700]">
                Technologies
              </h4>
              {project?.technologyId.map((item, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <a href={project?.siteUrl}>
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Live site
              </button>
            </a>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
