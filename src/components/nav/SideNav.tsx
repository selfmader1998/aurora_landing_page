import { cn } from "@/utils";
// import DotIcon from "@/assets/svgs/fiber_manual_record.svg?react";
import { useDarkMode } from "@/hooks/useDarkMode";
import CustomButton from "../button/CustomButton";

interface SideNavProps {
  containerStyle?: string;
}

function SideNav({ containerStyle }: SideNavProps) {
  const [isDark, setIsDark] = useDarkMode();

  const handlePressTheme = () => setIsDark(!isDark);

  return (
    <div className={cn("pl-6", containerStyle)}>
      {/* <DotIcon className="size-4 text-[#C89EE1]" /> */}
      <CustomButton
        label={isDark ? "Light Mode" : "Dark Mode"}
        onClick={handlePressTheme}
      />
    </div>
  );
}

export default SideNav;
