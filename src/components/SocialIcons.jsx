// import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 justify-center items-center mt-10 flex-wrap">
      {/* Google */}
      <div className="border border-white py-9 px-8 w-[160px] rounded-4xl flex flex-col items-center justify-center bg-slate-800 
        transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
        <div className="flex justify-center items-center">
          <IoLogoGoogle className="w-20 h-20 text-white" />
        </div>
      </div>

      {/* Instagram */}
      <div className="border border-white py-9 px-8 w-[160px] rounded-4xl flex flex-col items-center justify-center bg-slate-800 
        transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
        <div className="flex justify-center items-center">
          <FaInstagram className="w-20 h-20 text-white" />
        </div>
      </div>

      {/* Pinterest */}
      <div className="border border-white py-9 px-8 w-[160px] rounded-4xl flex flex-col items-center justify-center bg-slate-800 
        transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
        <div className="flex justify-center items-center">
          <FaPinterestP className="w-20 h-20 text-white" />
        </div>
      </div>

      {/* Facebook */}
      <div className="border border-white py-9 px-8 w-[160px] rounded-4xl flex flex-col items-center justify-center bg-slate-800 
        transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
        <div className="flex justify-center items-center">
          <FaFacebookF className="w-20 h-20 text-white" />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
