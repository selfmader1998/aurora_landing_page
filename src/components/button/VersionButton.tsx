import { Link } from "react-router-dom";

function VersionButton() {
  // 서버에서 현재 디자인시스템의 버전 가져오는 코드
  const ver = "1.0";

  return (
    <Link
      to=""
      className="flex border border-zinc-200 p-[4px_10px] rounded-full text-xs text-black"
    >
      v{ver}
    </Link>
  );
}

export default VersionButton;
