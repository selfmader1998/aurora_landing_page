import type { RadioButtonProps } from "@/types";
import { cn } from "@/utils";

function CustomRadioButton({ label, items }: RadioButtonProps) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <div className="flex gap-3 p-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="radio"
              id={String(item.value)}
              className={cn(
                "appearance-none",
                "after:flex after:outline after:outline-zinc-300 after:size-4 after:rounded-full after:border-3 after:border-white after:cursor-pointer after:transition-all",
                "checked:after:outline-[#C89EE1] checked:after:bg-[#C89EE1]"
              )}
              {...item}
            />
            <label
              htmlFor={String(item.value)}
              className="text-sm text-zinc-700 cursor-pointer"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomRadioButton;
