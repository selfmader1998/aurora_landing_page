import KakaoLogo from "@/assets/svgs/KakaoLogo.svg?react";

function KakaoChannelAddButton() {
  const handleAddChannel = () => {
    if (window.Kakao) {
      window.Kakao.Channel.addChannel({
        channelPublicId: "_bKpyn",
      });
    }
  };

  return (
    <button
      onClick={handleAddChannel}
      className="flex gap-2 cursor-pointer bg-white border border-zinc-200 w-fit p-2 pl-4 pr-4 rounded-full justify-center items-center"
    >
      <KakaoLogo className="size-6" />
      <p>카카오톡으로 사전예약하기</p>
    </button>
  );
}

export default KakaoChannelAddButton;
