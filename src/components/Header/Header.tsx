import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ISetting } from "../../interfaces/setting";

type Props = {
  headerData: ISetting[];
};
const Header = ({ headerData }: Props) => {
  const menuRef = useRef<any>(null);
  // const [header, setHeader] = useState<IHeader[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await getHeader();
  //     setHeader(data);
  //   })();
  // }, []);
  const { user } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : false;

  const toggleMenu = () => {
    if (menuRef) {
      menuRef.current.classList.toggle("show__menu");
    }
  };
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {headerData.map((item, index) => (
            <div className="flex items-center gap-[10px]" key={index}>
              <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                {item.logoTitle}
              </span>

              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">
                  {item.bigTitle}
                </h2>
                <p className="text-smallTextColor text-[14px] font-[500]">
                  {item.smallTitle}
                </p>
              </div>
            </div>
          ))}

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex relative items-center gap-10">
              <i className="ri-arrow-right-double-fill block md:hidden text-2xl absolute bg-smallTextColor text-white px-2 py-1 cursor-pointer top-0 left-0 z-[1000]"></i>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#sevices">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <Link to="/admin">
                  <i className="ri-send-plane-fill"></i> Let's Talk
                </Link>
              </button>
            ) : (
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
                <Link to="/sign-in">
                  <i className="ri-login-box-line"></i> Sign in
                </Link>
              </button>
            )}

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
