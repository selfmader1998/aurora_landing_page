import { useContext, useRef, useState } from "react";
import { cn } from "@/utils";
import CustomButton from "../button/CustomButton";
import CustomCheckBox from "../action/CustomCheckBox";
import CloseIcon from "@/assets/svgs/close.svg?react";
import { MainScrollContext } from "@/contexts/Scroll";

interface TermsModalProps {
  hideOption: () => void;
  onConfirm: (is: boolean) => void;
}

function TermsModal({ hideOption, onConfirm }: TermsModalProps) {
  const [isAgree, setIsAgree] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const scrollContext = useContext(MainScrollContext);

  const handlePressConfirm = () => {
    if (isAgree) {
      onConfirm(true);
      hideOption();
      scrollContext?.setIsScrollVisible(true);
    }
  };

  const handleCheckAll = () => {
    setIsAgree(!isAgree);

    setTimeout(() => {
      if (isAgree === false)
        contentRef.current?.scroll({
          behavior: "smooth",
          top:
            contentRef.current.scrollHeight - contentRef.current.clientHeight,
        });
    }, 500);
  };

  const handleCheckAgree = () => setIsAgree(!isAgree);

  const handlePressHide = () => {
    onConfirm(false);
    hideOption();
    scrollContext?.setIsScrollVisible(true);
  };

  const titleStyle = "text-base font-medium";

  return (
    <div
      className={cn(
        "absolute flex flex-col max-w-150 h-[calc(70%-80px)] bottom-[15%] items-center gap-6 rounded-2xl pb-6 bg-white border border-zinc-200 overflow-hidden z-10000",
        "max-sm:h-screen max-sm:top-0 max-sm:rounded-none max-sm:border-none"
      )}
    >
      <CloseIcon
        className="absolute top-5 right-5 text-zinc-500 cursor-pointer hover:text-black transition-all"
        onClick={handlePressHide}
      />
      <div
        ref={contentRef}
        className="size-full overflow-y-scroll pl-10 pr-10 mt-20 max-sm:pl-6 max-sm:pr-6"
      >
        <article className="text-sm">
          <div className="flex justify-between">
            <p className="text-xl font-medium max-sm:text-lg">
              개인정보 수집 및 이용에 관한 동의
            </p>
            <CustomCheckBox
              label="전체동의"
              checked={isAgree}
              onChange={handleCheckAll}
            />
          </div>
          <br />

          <p>
            <span className="font-semibold">Destiny Finders</span>(이하 ‘회사’라
            한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
            위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
          </p>
          <br />

          <p className={titleStyle}>제1조 (개인정보의 처리목적)</p>
          <p>
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
            개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
            변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등
            필요한 조치를 이행할 예정입니다.
          </p>
          <br />

          <p>1. 홈페이지 회원 가입 및 관리</p>
          <p>
            회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증,
            회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스
            부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의
            동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를
            처리합니다.
          </p>
          <br />

          <p>2. 재화 또는 서비스 제공</p>
          <p>
            물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공,
            맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심
            등을 목적으로 개인정보를 처리합니다.
          </p>
          <br />

          <p>3. 고충 처리</p>
          <p>
            민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리
            결과 통보 등의 목적으로 개인정보를 처리합니다.
          </p>
          <br />

          <p className={titleStyle}>제2조 (개인정보의 처리 및 보유기간)</p>
          <p>
            ① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터
            개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서
            개인정보를 처리, 보유합니다.
          </p>
          <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
          <br />

          <p>
            1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지
            다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
          </p>
          <p>
            1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당
            수사, 조사 종료 시까지
          </p>
          <p>
            2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무
            관계 정산 시까지
          </p>
          <br />

          <p>
            2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산
            완료 시까지 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료
            시까지
          </p>
          <p>
            1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고,
            계약내용 및 이행 등 거래에 관한 기록 - 표시․광고에 관한 기록 : 6월 -
            계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년 - 소비자
            불만 또는 분쟁 처리에 관한 기록 : 3년
          </p>
          <p>
            2) 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관 - 가입자
            전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수,
            발신기지국 위치추적자료 : 1년 - 컴퓨터 통신, 인터넷 로그 기록자료,
            접속지 추적자료 : 3개월
          </p>
          <br />

          <p className={titleStyle}>
            제3조 (정보주체 및 법정대리인의 권리와 그 행사 방법)
          </p>
          <p>
            ① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련
            권리를 행사할 수 있습니다.
          </p>
          <p>1. 개인정보 열람 요구</p>
          <p>2. 오류 등이 있을 경우 정정 요구</p>
          <p>3. 삭제요구</p>
          <p>4. 처리정지 요구</p>
          <p>
            ② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편,
            모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이
            조치하겠습니다.
          </p>
          <p>
            ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
            경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
            이용하거나 제공하지 않습니다.
          </p>
          <p>
            ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자
            등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법
            시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          </p>
          <p>
            ⑤ 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고
            있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니
            됩니다.
          </p>
          <br />

          <p className={titleStyle}>제4조 (처리하는 개인정보 항목)</p>
          <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
          <br />

          <p>1. 홈페이지 사전예약</p>
          <p>필수항목 : 성명, 생년월일, 전화번호, 성별</p>
          <p>선택항목 : 태어난 시간</p>
          <br />

          <p className={titleStyle}>제5조 (개인정보의 파기)</p>
          <p>
            ① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </p>
          <p>
            ② 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
            하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
            보관장소를 달리하여 보존합니다.
          </p>
          <p>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
          <p>1. 파기 절차</p>
          <p>
            회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보
            보호책임자의 승인을 받아 개인정보를 파기합니다.
          </p>
          <p>2. 파기 방법</p>
          <p>
            회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수
            없도록 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로
            분쇄하거나 소각하여 파기합니다.
          </p>
          <br />

          <p className={titleStyle}>제6조 (개인정보의 안전성 확보조치)</p>
          <p>
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고
            있습니다.
          </p>
          <p>1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등</p>
          <p>
            2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리,
            접근통제시스템 설치, 고유 식별정보 등의 암호화, 보안프로그램 설치
          </p>
          <p>3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제</p>
          <br />

          <p className={titleStyle}>
            제7조 (개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)
          </p>
          <p>
            ① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를
            저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
          </p>
          <p>
            ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
            브라우저에 보내는 소량의 정보이며 이용자들의 PC 또는 모바일에
            저장됩니다.
          </p>
          <p>
            ③ 정보주체는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의
            설정을 할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 맞춤형 서비스
            이용에 어려움이 발생할 수 있습니다.
          </p>
          <br />

          <p>웹 브라우저에서 쿠키 허용/차단</p>
          <p>
            - 크롬(Chrome) : 웹 브라우저 설정 {">"} 개인정보 보호 및 보안 {">"}{" "}
            인터넷 사용기록 삭제
          </p>
          <p>
            - 엣지(Edge) : 웹 브라우저 설정 {">"} 쿠키 및 사이트 권한 {">"} 쿠키
            및 사이트 데이터 관리 및 삭제
          </p>
          <br />

          <p>▶ 모바일 브라우저에서 쿠키 허용/차단</p>
          <p>
            - 크롬(Chrome) : 모바일 브라우저 설정 {">"} 개인정보 보호 및 보안{" "}
            {">"} 인터넷 사용기록 삭제
          </p>
          <p>
            - 사파리(Safari) : 모바일 기기 설정 {">"} 사파리(Safari) {">"} 고급
            {">"} 모든 쿠키 차단
          </p>
          <p>
            - 삼성 인터넷 : 모바일 브라우저 설정 {">"} 인터넷 사용 기록 {">"}{" "}
            인터넷 사용 기록 삭제
          </p>
          <br />

          <p>
            ④ 회사는 서비스 이용과정에서 사용자가 방문한 각 서비스와 웹
            사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부 등을
            파악하여 이용자에게 최적화된 정보 제공을 위해 수집・이용하고
            있습니다.
          </p>
          <br />

          <p className={titleStyle}>제8조 (개인정보 보호책임자)</p>
          <p>
            ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와
            같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <br />

          <p>▶ 개인정보 보호책임자</p>
          <p>성명 : 박형민</p>
          <p>직책 : 대표이사</p>
          <p>연락처 : 010-9905-2427</p>
          <p>이메일 : p12172@naver.com</p>
          <br />

          <p>
            ② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든
            개인정보 보호 관련 문의, 불만 처리, 피해구제 등에 관한 사항을
            개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의
            문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
          </p>
          <br />

          <p className={titleStyle}>제9조 (개인정보 열람청구)</p>
          <p>
            정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를
            아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람 청구가
            신속하게 처리되도록 노력하겠습니다.
          </p>
          <br />

          <p className={titleStyle}>제10조 (권익침해 구제 방법)</p>
          <p>
            정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담
            등을 문의하실 수 있습니다.
          </p>
          <p>
            1. 개인정보 분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
          </p>
          <p>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</p>
          <p>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</p>
          <p>4. 경찰청 : (국번없이) 182 (ecrm.police.go.kr/minwon/main)</p>
          <br />

          <p className={titleStyle}>제11조 (개인정보 처리방침 시행 및 변경)</p>
          <p>
            이 개인정보 처리방침은 <strong>2026. 1. 1.</strong> 부터 적용됩니다.
          </p>
          <br />
          <div className="flex flex-col items-end gap-2">
            <p className="font-medium">위 내용을 인지하고 동의합니다.</p>
            <div className="pr-1">
              <CustomCheckBox
                label="동의함"
                checked={isAgree}
                onChange={handleCheckAgree}
              />
            </div>
          </div>
        </article>
        <div className="flex justify-center"></div>
      </div>
      <CustomButton
        label="확인"
        style={cn(isAgree ? "text-black" : "text-zinc-500")}
        onClick={handlePressConfirm}
      />
    </div>
  );
}

export default TermsModal;
