import useForm from "@/hooks/useForm";
import { cn, validateSearch } from "@/utils";
import { useContext, useRef, useState } from "react";
import InputField from "../input/InputField";
import CustomRadioButton from "../button/CustomRadioButton";
import CustomButton from "../button/CustomButton";
import type { genderType, userDataType } from "@/types";
import CustomCheckBox from "../action/CustomCheckBox";
import useModal from "@/hooks/useModal";
import TermsModal from "../modal/TermsModal";
import { MainScrollContext } from "@/contexts/Scroll";

interface UserFormProps {
  onSubmit: (data: userDataType) => void;
}

function UserForm({ onSubmit }: UserFormProps) {
  const [birthTimeDisable, setBirthTimeDisable] = useState(false);
  const [gender, setGender] = useState<genderType | null>(null);

  const [isTermsAgree, setIsTermsAgree] = useState(false);

  const initialValue = { name: "", birthdate: "", birthtime: "", phone: "" };
  const userInfo = useForm({
    initialValue,
    validate: validateSearch,
  });

  const [isDataCondition, setIsDataCondition] = useState<boolean | "" | null>(
    false
  );

  const handleChangeData = () => {
    const { name, birthdate, birthtime, phone } = userInfo.values;
    const dataCondition =
      name && birthdate && gender && birthtime && phone && isTermsAgree;

    setIsDataCondition(dataCondition);

    if (dataCondition)
      onSubmit({
        ...userInfo.values,
        birthtime: birthTimeDisable ? null : birthtime,
        gender,
        phone,
      });
  };

  const termsRef = useRef<HTMLInputElement>(null);

  const modalOption = useModal();

  const scrollContext = useContext(MainScrollContext);

  const handleChangeTerms = () => {
    if (!isTermsAgree) {
      scrollContext?.setIsScrollVisible(false);
      modalOption.show();
    } else {
      scrollContext?.setIsScrollVisible(true);
      setIsTermsAgree(false);
      modalOption.hide();
    }
  };

  const [isFocusedBirthDateInput, setIsFocusedBirthDateInput] = useState(false);

  const handleFocusBirthDate = () => setIsFocusedBirthDateInput(true);
  const handleBlurBirthDate = () => setIsFocusedBirthDateInput(false);

  return (
    <div className="flex flex-col bg-white w-full justify-center items-center gap-1 mt-10">
      <div className="flex flex-col gap-5 w-90 max-[400px]:w-full max-sm:gap-3 p-6">
        <p className="text-xl font-medium mb-2">사전예약</p>
        <InputField
          label="이름"
          placeholder="홍길동"
          minLength={2}
          {...userInfo.getTextInputProps("name")}
        />
        <div>
          <InputField
            label="생년월일"
            maxLength={10}
            // type="date"
            onFocus={handleFocusBirthDate}
            placeholder="2000/01/01"
            {...userInfo.getTextInputProps("birthdate")}
            onBlur={() => {
              handleBlurBirthDate();
              userInfo.getTextInputProps("birthdate").onBlur();
            }}
          />
          <p
            className={cn(
              "opacity-0 text-xs text-[#C89EE1] transition-opacity ml-2",
              isFocusedBirthDateInput && "opacity-100"
            )}
          >
            양력으로 입력해 주세요.
          </p>
        </div>
        <InputField
          label="생시"
          placeholder="06:30"
          maxLength={5}
          disabled={birthTimeDisable}
          {...userInfo.getTextInputProps("birthtime")}
          checkBox={{
            label: "생시 모름",
            name: "unknownBirthtime",
            onChange: (event) => {
              setBirthTimeDisable(event.target.checked);
            },
          }}
        />
        <InputField
          label="전화번호"
          placeholder="010-1234-5678"
          maxLength={13}
          {...userInfo.getTextInputProps("phone")}
        />
        <CustomRadioButton
          label="성별"
          items={[
            {
              label: "남",
              name: "gender",
              value: "male",
              onChange: (e) => {
                if (e.target.checked) setGender("male");
              },
            },
            {
              label: "여",
              name: "gender",
              value: "female",
              onChange: (e) => {
                if (e.target.checked) setGender("female");
              },
            },
          ]}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 max-sm:gap-6">
        <div className="flex gap-2 justify-center">
          <CustomCheckBox
            onChange={handleChangeTerms}
            ref={termsRef}
            checked={isTermsAgree}
          />
          <p className="text-sm">개인정보 수집 및 이용에 동의합니다 (필수)</p>
        </div>
        <CustomButton
          label="완료"
          onClick={handleChangeData}
          style={cn(isDataCondition && "border-[#C89EE1] text-[#C89EE1]")}
        />
      </div>
      {modalOption.isVisible && (
        <TermsModal onConfirm={setIsTermsAgree} hideOption={modalOption.hide} />
      )}
      {/* <KakaoChannelAddButton /> */}
    </div>
  );
}

export default UserForm;
