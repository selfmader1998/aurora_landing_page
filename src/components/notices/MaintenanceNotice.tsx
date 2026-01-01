// import WarningIcon from "@/assets/svgs/aleart/warning_amber.svg?react";
// import { PALETTE } from "@/constants";

function MaintenanceNotice() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-6 max-sm:gap-2">
      {/* <WarningIcon
        fill="currentColor"
        className="size-50 max-sm:size-40"
        color={PALETTE.RED[500]}
      /> */}
      <div className="flex items-center text-6xl text-gray-700 max-sm:text-5xl max-[450px]:flex-col">
        <p className="font-semibold">서비스 점검중</p>입니다.
      </div>
      <p className="text-center text-gray-600 max-sm:text-sm leading-6 max-sm:leading-5">
        서비스 이용에 불편을 끼쳐드려서 죄송합니다. <br />
        빠른 시간 내에 정상적인 서비스가 가능하도록 최선을 다하겠습니다.
        <br />
        감사합니다.
      </p>
    </div>
  );
}

export default MaintenanceNotice;
