type genderType = "male" | "female";

type userDataType = {
  name: string;
  birthdate: string;
  birthtime: null | string;
  gender: genderType;
  phone: string;
};

export type { genderType, userDataType };
