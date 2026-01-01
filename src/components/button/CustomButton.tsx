import { cn } from "@/utils";

interface CustomButtonProps {
  label: string;
  style?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function CustomButton({
  label,
  style,
  type = "button",
  onClick,
}: CustomButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "w-fit rounded-md bg-white p-[8px_28px_5px] border border-zinc-200 cursor-pointer",
        style
      )}
    >
      {label}
    </button>
  );
}

export default CustomButton;
