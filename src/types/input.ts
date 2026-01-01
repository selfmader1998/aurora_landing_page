import type { InputHTMLAttributes, Ref } from "react";
import type { setState, useStateType } from "./hook";

type InputAttributesType = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

type TextFieldProps<T> = InputAttributesType & {
  setValue: useStateType<setState, Record<keyof T, string>>;
  touched?: boolean;
  error?: string;
};

type CheckBoxProps = InputAttributesType & {
  label?: string;
};

type RadioButtonProps = {
  label?: string;
  items: (InputAttributesType & {
    label?: string;
  })[];
};

export type {
  InputAttributesType,
  CheckBoxProps,
  RadioButtonProps,
  TextFieldProps,
};
