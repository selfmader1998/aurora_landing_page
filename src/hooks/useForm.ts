import { useState, type ChangeEvent } from "react";
import { formatDate, formatTime } from "../utils";

interface useFormProps<T> {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>;
}

function useForm<T>({ initialValue, validate }: useFormProps<T>) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeText = (name: keyof T, text: string) => {
    let formatText = text;
    if (name === "birthdate") formatText = formatDate(text);
    else if (name === "birthtime")
      formatText = formatTime(formatText.replace(/\D/g, ""));
    else if (String(name) === "phone") {
      const digits = text.replace(/\D/g, "").slice(0, 11); // 최대 11자리 숫자
      if (digits.length <= 3) formatText = digits;
      else if (digits.length <= 7)
        formatText = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      else
        formatText = `${digits.slice(0, 3)}-${digits.slice(
          3,
          7
        )}-${digits.slice(7)}`;
    }
    const updatedValues = { ...values, [name]: formatText };
    setValues(updatedValues);
    const newErrors = validate(updatedValues);
    setErrors(newErrors);
  };

  const handleBlur = (name: keyof T) =>
    setTouched({ ...touched, [name]: true });

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
      handleChangeText(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur, name };
  };

  return { values, setValues, errors, touched, getTextInputProps };
}

export default useForm;
