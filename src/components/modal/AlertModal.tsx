interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const AlertModal = ({ isOpen, message, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/50 ">
      <div className="flex flex-col justify-between items-center bg-white p-4 rounded-lg shadow-xl max-w-sm w-ful gap-2 h-40 w-60 max-sm:w-54 max-sm:h-36 ">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-zinc-500 max-sm:text-xs">알림</p>
          <p className="text-slate-900 max-sm:text-sm">{message}</p>
        </div>
        <button
          type="button"
          className="border border-[#C89EE1] text-[#C89EE1] p-[6px_20px] max-sm:p-[4px_16px] rounded-md cursor-pointer text-sm"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
