/** @format */

import { useAppStore } from "~/store/useAppStore";

const Modal = () => {
  const { contentModal, setModal } = useAppStore();
  return (
    <div
      onClick={() => setModal({ isShowModal: false, contentModal: null })}
      className="bg-overlay fixed inset-0 flex items-center justify-center  z-[999] w-full "
    >
      <div onClick={(e) => e.stopPropagation()}>{contentModal}</div>
    </div>
  );
};

export default Modal;
