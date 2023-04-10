import { useEffect, useState } from "react";
// import data from "../../assets/data/portfolioData";
import { IPortfolio } from "../../interfaces/portfolio";
import Modal from "./Modal";
import { getAll } from "../../api/project";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState<number>(6);
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
  const [selecttab, setSelectTab] = useState<string>("all");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<null | string | number>(0);

  const handleShowModal = (id: number | string) => {
    setShowModal(true);
    if (typeof id === "string" || typeof id === "number") {
      setActiveId(id);
    }
  };
  const handleLoadMore = () => {
    setNextItems((prev) => prev + 3);
  };
  const handleLoadLess = () => {
    setNextItems(6);
  };

  // console.log("portfolio", portfolio.length);
  // console.log("nextItems", nextItems);

  useEffect(() => {
    (async () => {
      const { data } = await getAll();
      if (selecttab === "all") {
        setPortfolios(data);
      }
      if (selecttab === "web-design") {
        const filterData = data.filter((item: IPortfolio) => {
          return item.category === "Web Design";
        });
        setPortfolios(filterData);
      }

      if (selecttab === "ux-design") {
        const filterData = data.filter((item: IPortfolio) => {
          return item.category === "Ux";
        });
        setPortfolios(filterData);
      }
    })();
  }, [selecttab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-10">
          {Array.isArray(portfolios) &&
            portfolios
              ?.slice(0, nextItems)
              ?.map((item: IPortfolio, index: number) => (
                <div
                  key={index}
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="group max-w-full w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                >
                  <div className="w-full">
                    <img
                      className="rounded-[8px] w-full object-cover"
                      src={item.imgUrl}
                      alt=""
                    />
                  </div>
                  <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-[8px]">
                    <div className="w-full h-full flex items-center justify-center">
                      <button
                        onClick={() => handleShowModal(item._id)}
                        className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className="text-center mt-6">
          {portfolios.length <= 3 || portfolios.length <= 6 ? (
            ""
          ) : nextItems >= portfolios.length ? (
            <button
              onClick={handleLoadLess}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              See Less
            </button>
          ) : (
            <button
              onClick={handleLoadMore}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              See More
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          activeID={activeId}
          portfolios={portfolios}
        />
      )}
    </section>
  );
};

export default Portfolio;
