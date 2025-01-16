import search from "../assets/icons/search.svg";
import user from "../assets/icons/user.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-stretch font-jose">
      <p className="no-underline text-black font-normal text-3xl">LOGO</p>
      <div className="min-w-max rounded-full px-6 py-3 shadow-[#E1C9F7] shadow-lg">
        <input
          className="border-none focus:outline-none min-w-96"
          type="text"
          name=""
          id=""
        />
        <img src={search} alt="search" className="inline" />
      </div>
      <div className="flex w-max justify-center items-center gap-8 flex-wrap">
        <p>Dashboard</p>
        <p>Pricing</p>
        <p>Features</p>
        <p>About Us</p>
        <img src={user} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
