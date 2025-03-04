import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const visible2 = location.pathname === "/signwithgoogle" ? "hidden" : "";
  const bgColor =
    location.pathname === "/" || location.pathname === "/form"
      ? "bg-white"
      : "bg-gray-900 text-white";

  const iconColor =
    location.pathname === "/" || location.pathname === "/form"
      ? "text-gray-700 "
      : " text-white";
  return (
    <footer className={`${bgColor} ${visible2} border-y border-black`}>
      <div className="mx-auto h-fit w-full max-w-screen-xl  pt-4   lg:pt-8 flex flex-col">
        <div className="container flex justify-evenly ">
          <div>
            <img src="./logo.png" className="h-16 w-auto " alt="Logo" />
          </div>
          <div className="flex justify-evenly gap-20">
            <ul>
              <li className="font-bold">Resources</li>
              <li>Home</li>
              <li>About</li>
            </ul>
            <ul>
              <li className="font-bold">Follow us</li>
              <li>
                <Link
                  className="hover:underline "
                  to={"https://www.instagram.com/rana__anus/"}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  to={
                    "https://www.youtube.com/watch?v=wL8Gbb_m4nQ&list=RDwL8Gbb_m4nQ&start_radio=1"
                  }
                >
                  Youtube
                </Link>
              </li>
            </ul>
            <ul>
              <li className="font-bold">Legal</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="main-footer h-20 mt-5 border-t border-gray-400 flex items-center justify-evenly">
          <div className="text-center ">
            <span> © 2025 Fastway - All Right reserved.</span>
          </div>
          <div>
            <ul className="flex gap-5">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={`${iconColor}`}
                />
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faYoutube} className={`${iconColor}`} />
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className={`${iconColor}`} />
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTwitter} className={`${iconColor}`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
