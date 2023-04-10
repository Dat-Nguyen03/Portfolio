import React from "react";
// import portfolios from "../../assets/data/portfolioData";
import { IPortfolio } from "../../interfaces/portfolio";
import { Link } from "react-router-dom";
type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeID: string | number | null;
  portfolios: IPortfolio[];
};

const Modal = ({ setShowModal, activeID, portfolios }: Props) => {
  const portfolio = portfolios.find(
    (item: IPortfolio) => item._id === activeID
  );
  console.log(portfolio);

  return (
    <div>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
        <div className="w-[90%] max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
          <div>
            <div>
              <img className="rounded-[8px]" src={portfolio?.imgUrl} alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-headingColor font-[700] my-5">
              {portfolio?.title}
            </h2>
            <p className="text-[15px] leading-7 text-smallTextColor">
              {portfolio?.description}
            </p>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <h4 className="text-headingColor text-[18px] font-[700]">
                Technologies
              </h4>
              {portfolio?.technologies.map((item: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                >
                  {item}
                </span>
              ))}
            </div>
            <a href={portfolio?.siteUrl}>
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
