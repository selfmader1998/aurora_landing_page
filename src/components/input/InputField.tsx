import type { CheckBoxProps } from "@/types";
import CustomCheckBox from "../action/CustomCheckBox";
import { cn } from "@/utils";
import { useId } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checkBox?: CheckBoxProps;
}

function InputField({ label, checkBox, ...props }: InputFieldProps) {
  const inputFieldId = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={inputFieldId}>{label}</label>
      <div className="relative flex m-2">
        <input
          {...props}
          id={inputFieldId}
          className={cn(
            "w-full text-sm border-b transition-[border] focus:border-zinc-500 border-zinc-300",
            "placeholder:text-sm disabled:placeholder:text-zinc-300 disabled:text-zinc-500 placeholder:transition-all"
          )}
        />
        <div className="absolute right-0 bottom-1">
          {checkBox && <CustomCheckBox {...checkBox} />}
        </div>
      </div>
    </div>
  );
}

export default InputField;
