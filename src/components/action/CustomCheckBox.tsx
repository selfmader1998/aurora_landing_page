import { useId } from "react";
import type { CheckBoxProps } from "@/types";
import { cn } from "@/utils";
import CheckIcon from "@/assets/svgs/check.svg?react";

function CustomCheckBox({ label, ...props }: CheckBoxProps) {
  const checkBoxId = useId();

  return (
    <div className="flex justify-center gap-1">
      <input
        className={cn("peer appearance-none relative")}
        type="checkbox"
        id={checkBoxId}
        {...props}
      ></input>

      <label
        htmlFor={checkBoxId}
        className={cn(
          "flex text-sm text-zinc-500 transition-all items-center select-none cursor-pointer gap-1",
          "peer-checked:text-black peer-checked:[&_svg:first-child]:hidden peer-checked:[&_svg:last-child]:block"
        )}
      >
        <CheckIcon className="border border-zinc-300 text-zinc-400 rounded-xs size-4.5 bg-white" />
        <CheckIcon className="hidden border border-[#C89EE1] text-[#C89EE1] rounded-xs size-4.5" />
        {label}
      </label>
    </div>
  );
}

export default CustomCheckBox;
