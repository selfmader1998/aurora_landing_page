import Logo from "@/assets/images/Logo.png";
import LogoText from "@/assets/images/LogoText.png";
import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/constants/navLinks";
import MenuIcon from "@/assets/svgs/menu.svg?react";
import { useState } from "react";

function Nav() {
  const location = useLocation();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handlePressMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div
      className={cn(
        "fixed flex w-full min-h-20 h-20 shadow-sm bg-white pl-10 pr-10 gap-20 items-center justify-between z-1000",
        "max-sm:pl-6 max-sm:pr-6"
        // "dark:bg-zinc-800"
      )}
    >
      <Link
        to="/"
        className="flex justify-center items-center gap-2 max-sm:gap-1"
      >
        <figure className="h-13 max-sm:h-11">
          <img src={Logo} alt="logo" className="size-full" />
        </figure>
        <figure className="h-5 max-sm:h-4">
          <img src={LogoText} alt="LogoText" className="size-full" />
        </figure>
      </Link>
      <div
        className={cn(
          "flex flex-col bg-white justify-between",
          "max-sm:absolute max-sm:top-0 max-sm:-right-2/5 max-sm:h-[calc(100vh-80px)] max-sm:w-2/5 max-sm:mt-20 max-sm:shadow-xl max-sm:pl-8 max-sm:pt-14 max-sm:pb-20 max-sm:transition-[right] max-sm:duration-300",
          isMenuVisible && "max-sm:right-0"
        )}
      >
        <div
          className={cn(
            "flex gap-5",
            "max-sm:items-start max-sm:gap-7 max-sm:flex-col"
          )}
        >
          {Object.values(navLinks).map((link, i) => (
            <Link
              key={i}
              to={link.title.link}
              className={cn(
                "hover:text-[#C89EE1] transition-all relative max-sm:text-sm",
                // "dark:text-white",
                location.pathname === link.title.link &&
                  "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:-bottom-1.5 after:left-0"
              )}
            >
              {link.title.title}
            </Link>
          ))}
        </div>
        {/* <CustomButton
          label="사전예약하기"
          style={cn(
            "border-[#C89EE1] bg-[#C89EE1] opacity-70 text-white hidden",
            "max-sm:block"
          )}
          onClick={handlePressMoveToPreReg}
        /> */}
      </div>
      <MenuIcon
        className="size-8 hidden cursor-pointer max-sm:block"
        onClick={handlePressMenu}
      />
    </div>
  );
}

export default Nav;
