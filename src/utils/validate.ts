type UserInfomation = {
  id: string;
  password: string;
};

function validateSearch(values: {
  name: string;
  birthdate: string;
  birthtime: string;
  phone: string;
}) {
  const errors = {
    name: "",
    birthdate: "",
    birthtime: "",
    phone: "",
  };

  if (!values.name) errors.name = "이름을 입력해 주세요.";

  if (!values.birthdate) errors.birthdate = "생년월일을 입력해 주세요.";
  else if (values.birthdate.length !== 10)
    errors.birthdate = "생년월일은 숫자 8자리(yyyy/mm/dd)로 입력해 주세요.";

  if (!values.birthtime) errors.birthtime = "생시를 입력해 주세요.";
  else if (values.birthtime.length !== 5)
    errors.birthtime = "생시는 숫자 4자리(hh:mm)로 입력해 주세요.";

  if (!values.phone) errors.phone = "전화번호를 입력해 주세요.";
  else if (values.phone.length !== 13)
    errors.phone = "전화번호는 숫자 11자리(000-0000-0000)로 입력해 주세요.";

  return errors;
}

function validateUser(values: UserInfomation) {
  const errors = {
    id: "",
    password: "",
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.id))
    errors.id = "올바른 이메일 형식이 아닙니다.";

  if (!(values.password.length >= 8 && values.password.length < 20))
    errors.password =
      "비밀번호는 8~20자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";

  return errors;
}

function validateLogin(values: UserInfomation) {
  return validateUser(values);
}

function validateSignup(values: UserInfomation & { passwordConfirm: string }) {
  const errors = validateUser(values);
  const signupErrors = { ...errors, passwordConfirm: "" };

  if (values.password !== values.passwordConfirm)
    signupErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";

  return signupErrors;
}

export { validateSearch, validateLogin, validateSignup };
