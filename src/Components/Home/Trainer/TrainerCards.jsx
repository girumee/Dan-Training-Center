import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function TrainerCard() {
  return (
    <div className="bg-slate-50 w-80 h-auto border-gray-200 border m-3 p-3 pt-4 rounded-xl shadow-2xl">
      <div className="text-start">
        <img
          src="/assets/trainer.png"
          alt="trainer"
          className="w-28 h-28 inline rounded-3xl "></img>
        <div className="inline-block w-auto absolute mt-12 ml-2">
          <h2 className="text-xl">John Doe</h2>
          <h4>Trainer</h4>
        </div>
        <p className="text-justify my-2">
          Are you looking to take your skills to the next level? Our company's
          training program is here to help you do just that.{" "}
        </p>
        <div className="flex gap-3 my-2">
          <div className="p-1 bg-slate-200 rounded-md">
            <Link to="/">
              <FaFacebookF />
            </Link>
          </div>
          <div className="p-1 bg-slate-200 rounded-md">
            <Link to="/">
              <FaInstagram />
            </Link>
          </div>
          <div className="p-1 bg-slate-200 rounded-md">
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
          <div className="p-1 bg-slate-200 rounded-md">
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
