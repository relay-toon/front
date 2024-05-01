import { create } from 'zustand';

type Type = 'nickname';
interface ModalStoreProps {
  nickname: boolean;
  actions: {
    changeModalState: (type: Type) => void;
  };
}
const useModalStore = create<ModalStoreProps>((set) => ({
  nickname: false,
  actions: {
    changeModalState: (type: Type) => {
      set((state) => ({ ...state, [type]: !state[type] }));
    },
  },
}));

export default useModalStore;

export const useNicknameModalState = () =>
  useModalStore((state) => state.nickname);
