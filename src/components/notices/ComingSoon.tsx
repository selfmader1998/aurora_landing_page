// import ErrorOutlineIcon from "@/assets/svgs/aleart/error_outline.svg?react";

function ComingSoon() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-6 max-sm:gap-2">
      {/* <ErrorOutlineIcon
        fill="currentColor"
        className="size-50 max-sm:size-40"
        color={PALETTE.ORANGE[400]}
      /> */}
      <div className="flex items-center text-6xl text-gray-700 max-sm:text-5xl max-[450px]:flex-col">
        <p className="font-semibold">서비스 준비중</p>입니다.
      </div>
      <p className="text-center text-gray-600 max-sm:text-sm leading-6 max-sm:leading-5">
        보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.
        <br />
        빠른 시일내에 준비하여 찾아뵙겠습니다.
      </p>
    </div>
  );
}

export default ComingSoon;
