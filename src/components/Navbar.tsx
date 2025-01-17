import search from "../assets/icons/search.svg";
import user from "../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-stretch font-jose mb-8">
      <p
        className="no-underline text-black font-normal text-3xl hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        LOGO
      </p>
      <div className="min-w-max rounded-full px-6 py-3 shadow-[#E1C9F7] shadow-lg border">
        <input
          className="border-none focus:outline-none min-w-96"
          type="text"
          name=""
          id=""
        />
        <img src={search} alt="search" className="inline" />
      </div>
      <div className="flex w-max justify-center items-center gap-8 flex-wrap">
        <p className="hover:cursor-pointer" onClick={() => navigate("/dashboard")}>Dashboard</p>
        <p className="hover:cursor-pointer" onClick={() => navigate("/pricing")}>Pricing</p>
        <p className="hover:cursor-pointer" onClick={() => navigate("/features")}>Features</p>
        <p className="hover:cursor-pointer" onClick={() => navigate("/about")}>About Us</p>
        <img src={user} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
