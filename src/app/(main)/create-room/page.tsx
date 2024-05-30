import { Metadata } from 'next';
import CreateRoom from './_component/CreateRoom';

export const metadata: Metadata = {
  title: '방 생성 / 릴레이툰',
  description: '방 생성 페이지입니다.',
};
export default function CreateRoomPage() {
  return <CreateRoom />;
}
