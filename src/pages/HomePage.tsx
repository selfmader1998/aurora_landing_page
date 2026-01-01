import { cn } from "../utils/cn";
import { useState, type ReactNode } from "react";
import type { userDataType } from "@/types";
import { useScrollObserver } from "@/hooks/useObserver";
import Card from "@/components/card/Card";
import UserForm from "@/components/form/UserForm";
import probImg1 from "@/assets/images/prob1.png";
import probImg2 from "@/assets/images/prob2.png";
import probImg3 from "@/assets/images/prob3.png";
import probImg4 from "@/assets/images/prob4.png";

import solImg1 from "@/assets/images/sol1.png";
import solImg2 from "@/assets/images/sol2.png";
import solImg3 from "@/assets/images/sol4.png";
import solImg4 from "@/assets/images/sol3.png";
import AlertModal from "@/components/modal/AlertModal";

function HomePage() {
  // document.addEventListener("scroll", (e) => {});

  type Img = {
    src: string;
    title: string;
    description: string;
  };

  const probImgs: Img[] = [
    {
      src: probImg1,
      title: "막연하게 자만추 기다리기",
      description:
        "언젠간 인연이 나타날거라 믿으며 나의 연애를 방치하고 살진 않았나요?",
    },
    {
      src: probImg2,
      title: "쓸만한 서비스가 없음",
      description:
        "범죄의 위험에 노출될 수 있다는 걱정, 가벼운 만남을 추구하는 서비스들 때문에 쓸만한 서비스가 없다고 느껴지진 않았나요?",
    },
    {
      src: probImg3,
      title: "지난 연애에 대한 상처",
      description:
        "감정소모가 많은 연애를 마치고 또 다른 감정소모가 많은 연애를 하게 될까봐 두려워서 망설이진 않았나요?",
    },
    {
      src: probImg4,
      title: "바쁜 일상",
      description:
        "아직 내 커리어도, 모아놓은 돈도 모든 게 부족하다고 생각되어 누군가를 만날 여유가 없다고 생각되지는 않았나요?",
    },
  ];

  type SolImg = Omit<Img, "title"> & { subText: string; title: ReactNode };

  const solImgs: SolImg[] = [
    {
      src: solImg1,
      title: (
        <p>
          <span className="text-[#6036BB] font-bold">인만추</span>를 할거면
          제대로!
        </p>
      ),
      description:
        "자만추(자연스러운 만남 추구)로는 누군가를 만날 수 없습니다. 이왕 인만추(인위적인 만남 추구)를 할거라면 나를 제대로 이해하고 나와 성공적으로 연애를 시작할 누군가를 소개 받아 보세요!",
      subText:
        "사주 궁합을 보고 사주가 우수한 상대만을 자동으로 매칭 해주는 Aurora가 있습니다!",
    },
    {
      src: solImg2,
      title: (
        <p>
          딱 <span className="text-[#6036BB] font-bold">한 명</span>에게만
          보여지는 나!
        </p>
      ),
      description:
        "불특정 다수에게 노출되어 아무나 보게 되는 내 프로필 범죄에 노출될 위험도 크고 지인이 보게 될까봐 두려우셨죠? ‘오로라’는 매칭된 딱 한 명에게만 내 프로필을 보여줍니다!",
      subText:
        "사주 궁합 우수하여 매칭된 운명적인 상대! 그 사람만 내 프로필을 볼 수 있도록! ‘오로라(Aurora)’는 고객의 정보를 소중하게 생각합니다!",
    },
    {
      src: solImg3,
      title: (
        <p>
          <span className="text-[#6036BB] font-bold">감정낭비</span> 하지
          마세요!
        </p>
      ),
      description:
        "별로 끌림이 없을 상대와의 만남을 위해 허비하는 감정, 처음엔 맘에 들었지만 결국엔 상처를 받게 하는 나쁜 인연에 당신의 소중한 감정을 낭비하지 마세요!",
      subText:
        "사주 궁합이 우수한 고객을 매칭해 주기 때문에 알 수 없는 끌림이 있습니다! 결혼을 위해 정말 진지하게 알아볼만한 사람을 만나고 싶다면? 그 해답은 ‘오로라(Aurora)’에 있습니다.",
    },
    {
      src: solImg4,
      title: (
        <p>
          바빠도 <span className="text-[#6036BB] font-bold">연애</span> 할 수
          있어요!
        </p>
      ),
      description:
        "다른 소개팅 서비스를 이용해 보면 프로필을 하나하나 읽어 봐야 하고 호감을 표시해도 매칭이 쉽게 이루어지지 않습니다. 매칭이 되어 대화를 하려고 해도 돈을 내라고 해요 ㅠㅠ",
      subText:
        "시간도 돈도 없는 우리는 이런 번거로운 과정을 기다릴 수 없습니다. 내 사주를 입력하고 알아서 궁합을 봐주고 매칭까지 해주는 ‘오로라(Aurora)’와 함께하면 당신이 아무리 바빠도 연애 할 수 있어요!",
    },
  ];

  const commonImgs: [Img, SolImg][] = probImgs.map((img, i) => [
    img,
    solImgs[i],
  ]);

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    message: "",
  });

  const handleSubmitData = async (data: userDataType) => {
    const GAS_URL: string = import.meta.env.VITE_GOOGLE_GAS_URL;

    // console.log("data", data);

    // console.log("Submitting data to GAS:", data);

    // name gender birthdate birthtime phone

    // Fetch API를 사용하여 POST 전송
    // 주의: Google Apps Script는 보안상 redirection이 발생하므로
    // 전송 자체는 성공해도 브라우저에서 CORS 에러처럼 보일 수 있습니다.
    const formattedData = {
      ...data,
      gender: data.gender === "male" ? "남성" : "여성",
    };

    try {
      const response = await fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify(formattedData),
      });

      // 이제 status가 200으로 들어오며 json() 파싱이 가능해집니다.
      const result: { result: string; message: string } = await response.json();
      // console.log(result);
      setModalConfig({ isOpen: true, message: result.message });
    } catch (error) {
      console.log("error: " + error);
    }
  };

  const handleContainerIntersect = (target: HTMLElement) => {
    target.style.opacity = "1";
    target.style.marginTop = "0";
  };

  const containerRef = useScrollObserver(handleContainerIntersect);

  const handleSolImgIntersect = (target: HTMLElement) => {
    target.style.opacity = "1";
  };

  const solImgRef = useScrollObserver(handleSolImgIntersect);

  const closeModal = () =>
    setModalConfig((prev) => ({ ...prev, isOpen: false }));

  return (
    <div
      className={cn(
        "flex flex-1 flex-col pl-20 pr-20 max-xl:pl-10 max-xl:pr-10 max-md:pl-6 max-md:pr-6 overflow-hidden"
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center items-center h-screen max-sm:h-fit max-sm:mt-30"
        )}
      >
        <div className="flex flex-col gap-5 max-sm:gap-3">
          <div className="flex w-full ml-2">
            <p className="text-3xl font-medium max-md:text-xl max-sm:text-lg">
              당신이 <span className="text-[#6036BB] font-bold">연애</span>를
              못하고 있는 이유는 어쩌면…
            </p>
          </div>
          <div
            className={cn(
              "flex gap-4 justify-center items-center",
              "max-xl:grid max-xl:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-8"
            )}
          >
            {probImgs.map((img, i) => {
              const { src, title, description } = img;
              return (
                <Card
                  // ref={textRef}
                  key={i}
                  img={{
                    src,
                  }}
                  title={title}
                  description={description}
                  containerStyle={cn("h-full", "max-sm:h-fit")}
                />
              );
            })}
          </div>
        </div>
      </div>
      {commonImgs.map((imgs) => (
        <div
          ref={containerRef}
          className={cn(
            "relative flex items-center justify-center h-screen gap-5 max-sm:flex-col",
            "opacity-0 mt-40 transition-[margin] duration-1000"
          )}
        >
          <div className="flex flex-1 justify-center items-center  max-sm:flex-0">
            <div className="flex flex-col gap-5 max-sm:gap-3">
              <p className="text-5xl text-zinc-800 font-medium max-md:text-3xl">
                {imgs[1].title}
              </p>
              <p className="text-xl font-medium max-w-100 max-md:text-base max-sm:max-w-100">
                {imgs[1].description}
              </p>
              <p className="text-lg text-zinc-500 font-medium max-w-100 max-md:text-sm">
                {imgs[1].subText}
              </p>
            </div>
          </div>
          <div
            className={cn(
              "flex flex-1 justify-center items-center max-sm:flex-0 max-sm:items-start"
            )}
          >
            <div className="relative flex">
              {imgs.map((img, i) => {
                const { src } = img;
                return (
                  <img
                    key={i}
                    ref={solImgRef}
                    src={src}
                    className={cn(
                      "object-cover w-120  max-sm:max-w-md max-sm:w-screen max-sm:pl-6 max-sm:pr-6",
                      i === 1 &&
                        "absolute opacity-0 left-0 top-0 transition-opacity duration-1000 delay-700"
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ))}

      <div className={cn("flex flex-col justify-center items-center h-screen")}>
        <UserForm onSubmit={handleSubmitData} />
      </div>
      <AlertModal
        isOpen={modalConfig.isOpen}
        message={modalConfig.message}
        onClose={closeModal}
      />
    </div>
  );
}

export default HomePage;
