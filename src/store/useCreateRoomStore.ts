import { create } from 'zustand';

export const useCreateRoomStore = create((set) => ({
  subjectText: '',
  memberOption: 1,
  timeOption: '제한없음',
  setSubjectText: (text: string) => set(() => ({ subjectText: text })),
  setMemberOption: (number: number) => set(() => ({ memberOption: number })),
  setTimeOption: (time: number | string) => set(() => ({ timeOption: time })),
}));
